import type { Address } from "viem";

import { addressCatalog } from "./catalog.js";
import { proxyHistory } from "./proxyHistory.js";
import type { AddressBookEntry, AddressBookForEnv, Environment, ProxyMetadata } from "./types.js";

type WithProxyMetadata<T> = T extends AddressBookEntry
  ? T & { readonly proxy?: ProxyMetadata }
  : T extends object
    ? { readonly [K in keyof T]: WithProxyMetadata<T[K]> }
    : T;

type AddressesOnly<T> = T extends AddressBookEntry
  ? Address
  : T extends object
    ? { readonly [K in keyof T]: AddressesOnly<T[K]> }
    : never;

function attachProxyMetadata<T extends AddressBookForEnv>(environment: Environment, catalog: T): WithProxyMetadata<T> {
  const histories = proxyHistory[environment] as unknown as Partial<Record<Address, ProxyMetadata>>;
  const groups = Object.entries(catalog).map(([groupName, entries]) => {
    const enrichedEntries = Object.entries(entries).map(([entryName, entry]) => {
      const history = histories[entry.address.toLowerCase() as Address];
      return [entryName, history ? { ...entry, proxy: history } : entry];
    });
    return [groupName, Object.fromEntries(enrichedEntries)];
  });
  return Object.fromEntries(groups) as WithProxyMetadata<T>;
}

function extractAddresses<T extends AddressBookForEnv>(catalog: T): AddressesOnly<T> {
  const groups = Object.entries(catalog).map(([groupName, entries]) => [
    groupName,
    Object.fromEntries(Object.entries(entries).map(([entryName, entry]) => [entryName, entry.address])),
  ]);
  return Object.fromEntries(groups) as AddressesOnly<T>;
}

/** Complete metadata, descriptions, provenance, and known proxy implementation histories. */
export const addressBook = {
  mainnet: attachProxyMetadata("mainnet", addressCatalog.mainnet),
  testnet: attachProxyMetadata("testnet", addressCatalog.testnet),
} as const;

/** Short typed lookup for callers that only need stable contract addresses. */
export const addresses = {
  mainnet: extractAddresses(addressCatalog.mainnet),
  testnet: extractAddresses(addressCatalog.testnet),
} as const;

type Catalog = typeof addressCatalog;

export type AddressName<E extends Environment> = {
  [G in keyof Catalog[E] & string]: `${G}.${keyof Catalog[E][G] & string}`;
}[keyof Catalog[E] & string];

/** Resolve a dotted name such as `roc.rifBucket` when the name is dynamic. */
export function findAddress<E extends Environment>(environment: E, name: AddressName<E>): Address {
  const [group, entry] = name.split(".");
  const environmentAddresses = addresses[environment] as unknown as Record<string, Record<string, Address>>;
  const groupEntries = environmentAddresses[group!];
  const address = groupEntries?.[entry!];
  if (!address) throw new Error(`Unknown ${environment} address-book name: ${name}`);
  return address;
}
