/*
 * This script refreshes implementation histories in the canonical address-book.json.
 * It always checks both official Rootstock Blockscout explorers in one invocation.
 * Only entries whose proxyOf field is an array are inspected; null entries are ignored.
 * Blockscout's current implementation is used to validate the newest history tuple.
 * Unsupported proxy standards and inconsistent explorer data abort without rewriting the file.
 */
import { readFile, writeFile } from "node:fs/promises";

import { getAddress, toEventSelector, type Address } from "viem";

import type { AddressBook, AddressBookEntry, Environment, ProxyImplementation } from "../src/types.js";

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

// These are the Blockscout proxy types verified for the IERC1967.Upgraded event used below.
const supportedProxyTypes = new Set(["eip1967", "eip1967_oz"]);

interface AddressDetails {
  implementations: { address_hash: Address }[] | null;
  proxy_type: string | null;
}

interface LegacyLog {
  blockNumber: `0x${string}`;
  topics: [string, string?, string?, string?];
}

interface LegacyLogResponse {
  message: string;
  result: LegacyLog[] | string;
  status: string;
}

/** Blockscout has two API styles; this keeps their shared HTTP and JSON error handling consistent. */
async function fetchJson<T>(url: URL): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  return (await response.json()) as T;
}

/**
 * Reads implementation changes for proxy standards that emit IERC1967.Upgraded.
 * The implementation parameter is indexed, so its address occupies the second event topic.
 */
async function readUpgradeEvents(blockscoutUrl: URL, proxyAddress: Address): Promise<ProxyImplementation[]> {
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
    throw new Error(`Blockscout could not return upgrade events for ${proxyAddress}: ${response.message}`);
  }

  return response.result.map(log => {
    const implementationTopic = log.topics[1];
    if (!implementationTopic) throw new Error(`Upgraded event for ${proxyAddress} has no implementation topic`);
    return [getAddress(`0x${implementationTopic.slice(-40)}`), Number.parseInt(log.blockNumber, 16)];
  });
}

/**
 * Refreshes one explicitly marked proxy and returns its newest-first implementation list.
 * Blockscout's implementations array describes the current target, while events provide history.
 */
async function updatedProxyOf(
  blockscoutUrl: URL,
  proxyAddress: Address,
  recordedImplementations: ProxyImplementation[],
): Promise<ProxyImplementation[]> {
  const details = await fetchJson<AddressDetails>(new URL(`api/v2/addresses/${proxyAddress}`, blockscoutUrl));
  if (!details.proxy_type || !supportedProxyTypes.has(details.proxy_type)) {
    throw new Error(`Proxy ${proxyAddress} uses unsupported Blockscout type ${details.proxy_type}`);
  }
  if (details.implementations?.length !== 1) {
    throw new Error(
      `Expected one current implementation for ${proxyAddress}, got ${details.implementations?.length ?? 0}`,
    );
  }

  const currentImplementation = getAddress(details.implementations[0].address_hash);
  const implementationsByAddress = new Map(
    recordedImplementations.map(implementation => [implementation[0].toLowerCase(), implementation]),
  );
  for (const implementation of await readUpgradeEvents(blockscoutUrl, proxyAddress)) {
    const previous = implementationsByAddress.get(implementation[0].toLowerCase());
    if (previous?.[1] !== null && previous?.[1] !== undefined && previous[1] > (implementation[1] ?? -1)) continue;
    implementationsByAddress.set(implementation[0].toLowerCase(), implementation);
  }

  const current = implementationsByAddress.get(currentImplementation.toLowerCase());
  if (!current) {
    throw new Error(
      `Proxy ${proxyAddress} resolves to ${currentImplementation}, which is absent from its recorded and event histories`,
    );
  }
  const previousImplementations = [...implementationsByAddress.values()]
    .filter(implementation => implementation[0].toLowerCase() !== currentImplementation.toLowerCase())
    .sort((left, right) => (right[1] ?? -1) - (left[1] ?? -1));
  return [current, ...previousImplementations];
}

const addressBookFile = new URL("../address-book.json", import.meta.url);
const addressBook = JSON.parse(await readFile(addressBookFile, "utf8")) as AddressBook;

for (const { environment, blockscoutUrl } of networks) {
  const entriesByProxyAddress = new Map<string, AddressBookEntry[]>();
  for (const entry of Object.values(addressBook[environment])) {
    if (entry.proxyOf === null) continue;
    const matchingEntries = entriesByProxyAddress.get(entry.address.toLowerCase()) ?? [];
    matchingEntries.push(entry);
    entriesByProxyAddress.set(entry.address.toLowerCase(), matchingEntries);
  }

  for (const matchingEntries of entriesByProxyAddress.values()) {
    const representative = matchingEntries[0];
    if (!representative || representative.proxyOf === null) continue;
    const proxyOf = await updatedProxyOf(blockscoutUrl, representative.address, representative.proxyOf);
    for (const entry of matchingEntries) entry.proxyOf = proxyOf;
  }
}

await writeFile(addressBookFile, `${JSON.stringify(addressBook, null, 2)}\n`);
