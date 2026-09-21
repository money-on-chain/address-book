/*
 * This script refreshes implementation histories in the canonical address-book.json.
 * It always checks both official Rootstock Blockscout explorers in one invocation.
 * Only entries already marked with proxy metadata are inspected; it never discovers proxies.
 * Blockscout's current implementation is used to validate the event-derived history tip.
 * Unsupported proxy standards and inconsistent explorer data abort without rewriting the file.
 */
import { readFile, writeFile } from "node:fs/promises";

import { getAddress, toEventSelector, type Address, type Hash } from "viem";

import type {
  AddressBook,
  AddressBookEntry,
  Environment,
  ProxyImplementation,
  ProxyMetadata,
  ProxyStandard,
} from "../src/types.js";

// These are the official Blockscout deployments for Rootstock mainnet and testnet.
const networks = [
  {
    environment: "mainnet",
    blockscoutUrl: new URL("https://rootstock.blockscout.com/"),
  },
  {
    environment: "testnet",
    blockscoutUrl: new URL("https://rootstock-testnet.blockscout.com/"),
  },
] as const satisfies readonly {
  environment: Environment;
  blockscoutUrl: URL;
}[];

// ERC-1967 and OpenZeppelin ERC-1967 proxies emit this event when their implementation changes.
const upgradedEventTopic = toEventSelector("Upgraded(address)");

// These are the only proxy types currently present in the book and both follow IERC1967.Upgraded.
const proxyStandardsUsingUpgradedEvent = new Set<ProxyStandard>([
  "eip1967",
  "eip1967_oz",
]);

interface AddressDetails {
  implementations: { address_hash: Address }[] | null;
  proxy_type: string | null;
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

/** Blockscout has two API styles; this keeps their shared HTTP and JSON error handling consistent. */
async function fetchJson<T>(url: URL): Promise<T> {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return (await response.json()) as T;
}

/**
 * Reads implementation changes for proxy standards that emit IERC1967.Upgraded.
 * The implementation parameter is indexed, so its address occupies the second event topic.
 */
async function readUpgradeEvents(
  blockscoutUrl: URL,
  proxyAddress: Address,
): Promise<ProxyImplementation[]> {
  const url = new URL("api", blockscoutUrl);
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
    throw new Error(
      `Blockscout could not return upgrade events for ${proxyAddress}: ${response.message}`,
    );
  }

  return response.result.map((log) => {
    const implementationTopic = log.topics[1];
    if (!implementationTopic)
      throw new Error(
        `Upgraded event for ${proxyAddress} has no implementation topic`,
      );
    return {
      fromBlock: Number.parseInt(log.blockNumber, 16),
      address: getAddress(`0x${implementationTopic.slice(-40)}`),
      transactionHash: log.transactionHash,
    };
  });
}

/**
 * Refreshes one explicitly marked proxy while preserving provenance recorded by maintainers.
 * Blockscout's implementations array describes current targets, while events provide history.
 */
async function updatedProxyMetadata(
  blockscoutUrl: URL,
  proxyAddress: Address,
  recordedProxy: ProxyMetadata,
): Promise<ProxyMetadata> {
  if (!proxyStandardsUsingUpgradedEvent.has(recordedProxy.standard)) {
    throw new Error(
      `Proxy ${proxyAddress} uses unsupported standard ${recordedProxy.standard}`,
    );
  }

  const details = await fetchJson<AddressDetails>(
    new URL(`api/v2/addresses/${proxyAddress}`, blockscoutUrl),
  );
  if (details.proxy_type !== recordedProxy.standard) {
    throw new Error(
      `Proxy ${proxyAddress} is recorded as ${recordedProxy.standard}, but Blockscout reports ${details.proxy_type}`,
    );
  }
  if (details.implementations?.length !== 1) {
    throw new Error(
      `Expected one current implementation for ${proxyAddress}, got ${details.implementations?.length ?? 0}`,
    );
  }

  const currentImplementation = getAddress(
    details.implementations[0].address_hash,
  );
  const upgradeEvents = await readUpgradeEvents(blockscoutUrl, proxyAddress);
  const knownUpgradeEvents = [
    ...recordedProxy.implementations.filter(
      (implementation) => implementation.fromBlock !== null,
    ),
  ];
  for (const event of upgradeEvents) {
    const duplicate = knownUpgradeEvents.some(
      (implementation) =>
        implementation.fromBlock === event.fromBlock &&
        implementation.address.toLowerCase() === event.address.toLowerCase(),
    );
    if (!duplicate) knownUpgradeEvents.push(event);
  }
  knownUpgradeEvents.sort((left, right) => left.fromBlock! - right.fromBlock!);

  const implementationsWithoutKnownBlock = recordedProxy.implementations.filter(
    (implementation) =>
      implementation.fromBlock === null &&
      !knownUpgradeEvents.some(
        (event) =>
          event.address.toLowerCase() === implementation.address.toLowerCase(),
      ),
  );
  for (const event of knownUpgradeEvents) {
    const source = recordedProxy.implementations.find(
      (implementation) =>
        implementation.address.toLowerCase() === event.address.toLowerCase() &&
        implementation.source,
    )?.source;
    if (source) event.source = source;
  }
  const implementations = [
    ...implementationsWithoutKnownBlock,
    ...knownUpgradeEvents,
  ];

  const recordedCurrentImplementation = implementations.at(-1)?.address;
  if (
    recordedCurrentImplementation?.toLowerCase() !==
    currentImplementation.toLowerCase()
  ) {
    throw new Error(
      `Proxy ${proxyAddress} resolves to ${currentImplementation}, but its merged history ends at ${recordedCurrentImplementation ?? "nothing"}`,
    );
  }

  return { ...recordedProxy, implementations };
}

const addressBookFile = new URL("../address-book.json", import.meta.url);
const addressBook = JSON.parse(
  await readFile(addressBookFile, "utf8"),
) as AddressBook;

for (const { environment, blockscoutUrl } of networks) {
  const entriesByProxyAddress = new Map<string, AddressBookEntry[]>();
  for (const entries of Object.values(addressBook[environment])) {
    for (const entry of Object.values(entries)) {
      if (!entry.proxy) continue;
      const matchingEntries =
        entriesByProxyAddress.get(entry.address.toLowerCase()) ?? [];
      matchingEntries.push(entry);
      entriesByProxyAddress.set(entry.address.toLowerCase(), matchingEntries);
    }
  }

  for (const matchingEntries of entriesByProxyAddress.values()) {
    const representative = matchingEntries[0];
    if (!representative?.proxy) continue;
    const updatedProxy = await updatedProxyMetadata(
      blockscoutUrl,
      representative.address,
      representative.proxy,
    );
    for (const entry of matchingEntries) entry.proxy = updatedProxy;
  }
}

await writeFile(addressBookFile, `${JSON.stringify(addressBook, null, 2)}\n`);
