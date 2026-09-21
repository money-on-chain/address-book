import type { Address, Hash } from "viem";
export type Environment = "mainnet" | "testnet";
export type AddressBookGroup = "moc" | "roc" | "governance";
export interface AddressSource {
    /** Repository that originally owned this address before the unified package was created. */
    readonly repository: "main-RBTC-contract" | "roc-sc-protocol-v2" | "proposals-changers";
    /** Original environment-qualified field, retained so provenance can be audited. */
    readonly field: string;
}
export interface ProxyImplementation {
    /** Activation block from an upgrade event, or null when the explorer exposed no event. */
    readonly fromBlock: number | null;
    readonly address: Address;
    /** Upgrade transaction when the implementation was recovered from an Upgraded event. */
    readonly transactionHash?: Hash;
    /** Original project field when an old implementation came from a legacy address book. */
    readonly source?: AddressSource;
}
export interface ProxyMetadata {
    readonly standard: string;
    /** False means events did not establish the implementation active at proxy creation. */
    readonly historyComplete: boolean;
    /** Chronological implementation history. The final item is the current implementation. */
    readonly implementations: readonly ProxyImplementation[];
}
export interface StoredProxyHistory extends ProxyMetadata {
    /** Address of the stable proxy whose implementations are listed here. */
    readonly proxyAddress: Address;
}
export type ProxyHistoryByEnvironment = Record<Environment, Partial<Record<Address, StoredProxyHistory>>>;
export interface AddressBookEntry {
    /** Contract or account concept, independent of the environment-specific address. */
    readonly contractName: string;
    readonly address: Address;
    /** Explains the role and helps callers distinguish similarly named contracts. */
    readonly description: string;
    readonly source: AddressSource;
    /** Present only when the address itself is a proxy. */
    readonly proxy?: ProxyMetadata;
}
export type AddressBookForEnv = Record<AddressBookGroup, Record<string, AddressBookEntry>>;
export interface AddressBook {
    readonly mainnet: AddressBookForEnv;
    readonly testnet: AddressBookForEnv;
}
//# sourceMappingURL=types.d.ts.map