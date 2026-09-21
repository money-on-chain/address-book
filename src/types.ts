/*
 * This module defines the public shape of the canonical address book.
 * Address and transaction-hash strings use viem types so consumers cannot confuse them.
 * An entry is a proxy only when its JSON metadata contains the proxy field.
 * Proxy histories may be incomplete when Blockscout cannot recover creation-time state.
 * These types contain no protocol implementation dependency and emit no runtime import.
 */
import type { Address, Hash } from "viem";

export type Environment = "mainnet" | "testnet";

export type AddressBookGroup = "moc" | "roc" | "governance";

export type ProxyStandard = "eip1967" | "eip1967_oz";

export interface AddressSource {
  /** Repository and field from which this entry was originally collected. */
  repository:
    | "main-RBTC-contract"
    | "roc-sc-protocol-v2"
    | "proposals-changers";
  field: string;
}

export interface ProxyImplementation {
  /** Activation block from an upgrade event, or null when that block is unknown. */
  fromBlock: number | null;
  address: Address;
  transactionHash?: Hash;
  source?: AddressSource;
}

export interface ProxyMetadata {
  standard: ProxyStandard;
  /** False means the recorded events do not prove a complete history from deployment. */
  historyComplete: boolean;
  /** Ordered from the earliest known implementation to the current implementation. */
  implementations: ProxyImplementation[];
}

export interface AddressBookEntry {
  contractName: string;
  address: Address;
  /** Explains the role and helps callers distinguish similarly named contracts. */
  description: string;
  source: AddressSource;
  /** Its presence explicitly opts this entry into proxy-history updates. */
  proxy?: ProxyMetadata;
}

export type AddressBookForEnv = Record<
  AddressBookGroup,
  Record<string, AddressBookEntry>
>;

export interface AddressBook {
  /** JSON cannot contain comments, so these lines document the canonical data file. */
  _comment: string[];
  mainnet: AddressBookForEnv;
  testnet: AddressBookForEnv;
}

export type AddressLookupForEnv = Record<
  AddressBookGroup,
  Record<string, Address>
>;

export type AddressLookup = Record<Environment, AddressLookupForEnv>;
