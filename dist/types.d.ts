/*!
 * This module defines the public shape of the canonical address book.
 * Address strings use viem types so consumers cannot confuse them with arbitrary text.
 * Every environment is a flat mapping from a descriptive name to one contract entry.
 * proxyOf is null for contracts that are not proxies and a newest-first history otherwise.
 * These types contain no protocol implementation dependency and emit no runtime import.
 */
import type { Address } from "viem";
export type Environment = "mainnet" | "testnet";
/** The block may be null when the implementation's activation block is unknown or irrelevant. */
export type ProxyImplementation = [address: Address, fromBlock: number | null];
export interface AddressBookEntry {
    contractName: string;
    address: Address;
    /** States which protocol uses the contract and explains its role. */
    description: string;
    /** Newest known implementation first, or null when this address is not a proxy. */
    proxyOf: ProxyImplementation[] | null;
}
export type AddressBookForEnv = Record<string, AddressBookEntry>;
export interface AddressBook {
    /** JSON cannot contain comments, so these lines document the canonical data file. */
    _comment: string[];
    mainnet: AddressBookForEnv;
    testnet: AddressBookForEnv;
}
export type AddressLookupForEnv = Record<string, Address>;
export type AddressLookup = Record<Environment, AddressLookupForEnv>;
