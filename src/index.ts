/*
 * This is the package's deliberately small public API.
 * It exports the metadata-rich address book and its derived address-only lookup.
 * Public types use viem Address and Hash without adding a runtime viem import.
 * Deployment records remain in address-book.json rather than TypeScript modules.
 * Keep new exports tied directly to that canonical data instead of adding another store.
 */
export { addressBook, addresses } from "./addressBook.js";
export type {
  AddressBook,
  AddressBookEntry,
  AddressBookForEnv,
  AddressBookGroup,
  AddressLookup,
  AddressLookupForEnv,
  AddressSource,
  Environment,
  ProxyImplementation,
  ProxyMetadata,
  ProxyStandard,
} from "./types.js";
