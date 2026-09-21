import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { getAddress, type Address, type Hash } from "viem";

import { addressCatalog } from "../src/catalog.js";
import { proxyHistory } from "../src/proxyHistory.js";
import type { AddressBookEntry, Environment, ProxyImplementation, StoredProxyHistory } from "../src/types.js";

const upgradedEventTopic = "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b";
const explorerUrls: Record<Environment, string | undefined> = {
  mainnet: process.env.ROOTSTOCK_MAINNET_BLOCKSCOUT_URL,
  testnet: process.env.ROOTSTOCK_TESTNET_BLOCKSCOUT_URL,
};

interface AddressDetails {
  creation_transaction_hash: Hash | null;
  implementations: { address_hash: Address }[] | null;
  proxy_type: string | null;
}

interface TransactionDetails {
  block_number: number;
}

interface LegacyLog {
  blockNumber: `0x${string}`;
  topics: [string, string?, string?, string?];
  transactionHash: Hash;
}

interface LegacyLogResponse {
  message: string;
  result: LegacyLog[] | string;
  status: string;
}

function explorerUrl(environment: Environment): string {
  const url = explorerUrls[environment];
  if (!url) {
    throw new Error(`Set ROOTSTOCK_${environment.toUpperCase()}_BLOCKSCOUT_URL before updating proxy histories`);
  }
  return url.replace(/\/$/, "");
}

async function fetchJson<T>(url: URL): Promise<T> {
  for (let attempt = 1; attempt <= 8; attempt++) {
    const response = await fetch(url, { headers: { "user-agent": "money-on-chain-address-book/0.1" } });
    if (response.ok) {
      const value = (await response.json()) as T | null;
      if (value !== null) return value;
    }
    if (response.status !== 429 && response.status < 500) {
      throw new Error(`${response.status} ${response.statusText}: ${url}`);
    }
    await new Promise(resolve => setTimeout(resolve, Math.min(60_000, attempt * 5_000)));
  }
  throw new Error(`Explorer remained unavailable: ${url}`);
}

function uniqueAddresses(environment: Environment): Address[] {
  const addresses = new Set<Address>();
  for (const entries of Object.values(addressCatalog[environment]) as Record<string, AddressBookEntry>[]) {
    for (const entry of Object.values(entries)) addresses.add(entry.address);
  }
  return [...addresses];
}

async function upgradeEvents(environment: Environment, proxyAddress: Address): Promise<ProxyImplementation[]> {
  const url = new URL("api", `${explorerUrl(environment)}/`);
  url.search = new URLSearchParams({
    module: "logs",
    action: "getLogs",
    fromBlock: "0",
    toBlock: "latest",
    address: proxyAddress,
    topic0: upgradedEventTopic,
  }).toString();
  const response = await fetchJson<LegacyLogResponse>(url);
  if (response.status !== "1" || !Array.isArray(response.result)) {
    if (/no (logs|records)/i.test(response.message)) return [];
    throw new Error(`Blockscout could not return upgrade events: ${response.message}`);
  }

  const history = response.result
    .flatMap(log => {
      const implementationTopic = log.topics[1];
      if (!implementationTopic) return [];
      return [
        {
          fromBlock: Number.parseInt(log.blockNumber, 16),
          address: getAddress(`0x${implementationTopic.slice(-40)}`),
          transactionHash: log.transactionHash,
        },
      ];
    })
    .sort((left, right) => left.fromBlock - right.fromBlock);

  return history.filter(
    (implementation, index) => index === 0 || history[index - 1]?.address !== implementation.address,
  );
}

async function inspectAddress(environment: Environment, address: Address): Promise<StoredProxyHistory | undefined> {
  const details = await fetchJson<AddressDetails>(
    new URL(`api/v2/addresses/${address}`, `${explorerUrl(environment)}/`),
  );
  if (!details.proxy_type) return undefined;

  const currentImplementation = details.implementations?.[0]?.address_hash;
  const eventHistory = await upgradeEvents(environment, address);
  const existing = proxyHistory[environment][
    address.toLowerCase() as keyof (typeof proxyHistory)[typeof environment]
  ] as StoredProxyHistory | undefined;
  const implementations: ProxyImplementation[] = eventHistory.length
    ? [
        ...(existing?.implementations.filter(
          oldImplementation =>
            !eventHistory.some(event => event.address.toLowerCase() === oldImplementation.address.toLowerCase()),
        ) ?? []),
        ...eventHistory,
      ]
    : [...(existing?.implementations ?? [])];
  let creationBlock: number | undefined;
  if (details.creation_transaction_hash) {
    const creation = await fetchJson<TransactionDetails>(
      new URL(`api/v2/transactions/${details.creation_transaction_hash}`, `${explorerUrl(environment)}/`),
    );
    creationBlock = creation.block_number;
  }

  if (currentImplementation) {
    const currentIndex = implementations.findIndex(
      implementation => implementation.address.toLowerCase() === currentImplementation.toLowerCase(),
    );
    if (currentIndex === -1) {
      implementations.push({ fromBlock: null, address: getAddress(currentImplementation) });
    } else if (currentIndex !== implementations.length - 1) {
      implementations.push(...implementations.splice(currentIndex, 1));
    }
  }

  const eventsReachCreation = Boolean(
    creationBlock !== undefined && eventHistory[0]?.fromBlock !== null && eventHistory[0]!.fromBlock <= creationBlock,
  );
  return {
    proxyAddress: address,
    standard: details.proxy_type,
    historyComplete: existing?.historyComplete || eventsReachCreation,
    implementations,
  };
}

function renderHistory(history: Record<Environment, StoredProxyHistory[]>): string {
  const lines = [
    'import type { Address } from "viem";',
    'import type { ProxyHistoryByEnvironment } from "./types.js";',
    "",
    'const address = <T extends Address>(literal: T): T => literal;',
    "",
    "/** Generated by scripts/updateProxyHistory.ts. Do not edit by hand. */",
    "export const proxyHistory = {",
  ];
  for (const environment of ["mainnet", "testnet"] as const) {
    lines.push(`  ${environment}: {`);
    for (const proxy of history[environment].sort((a, b) => a.proxyAddress.localeCompare(b.proxyAddress))) {
      lines.push(`    ${JSON.stringify(proxy.proxyAddress.toLowerCase())}: {`);
      lines.push(`      proxyAddress: address(${JSON.stringify(proxy.proxyAddress)}),`);
      lines.push(`      standard: ${JSON.stringify(proxy.standard)},`);
      lines.push(`      historyComplete: ${proxy.historyComplete},`);
      lines.push("      implementations: [");
      for (const implementation of proxy.implementations) {
        lines.push("        {");
        lines.push(`          fromBlock: ${implementation.fromBlock ?? "null"},`);
        lines.push(`          address: address(${JSON.stringify(implementation.address)}),`);
        if (implementation.transactionHash) {
          lines.push(`          transactionHash: ${JSON.stringify(implementation.transactionHash)},`);
        }
        if (implementation.source) {
          lines.push(
            `          source: { repository: ${JSON.stringify(implementation.source.repository)}, field: ${JSON.stringify(implementation.source.field)} },`,
          );
        }
        lines.push("        },");
      }
      lines.push("      ],");
      lines.push("    },");
    }
    lines.push("  },");
  }
  lines.push("} as const satisfies ProxyHistoryByEnvironment;", "");
  return lines.join("\n");
}

const histories: Record<Environment, StoredProxyHistory[]> = { mainnet: [], testnet: [] };
for (const environment of ["mainnet", "testnet"] as const) {
  for (const address of uniqueAddresses(environment)) {
    const proxy = await inspectAddress(environment, address);
    if (proxy) histories[environment].push(proxy);
  }
}

await writeFile(fileURLToPath(new URL("../src/proxyHistory.ts", import.meta.url)), renderHistory(histories));
