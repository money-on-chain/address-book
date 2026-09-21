/*
 * This module exposes the two views consumers need from one canonical JSON file.
 * addressBook retains descriptions, provenance, and implementation history for audits.
 * addresses strips each entry down to its stable viem Address for normal integrations.
 * The lookup is derived at module load so metadata and short addresses cannot drift apart.
 * JSON is imported directly; this module owns no deployment data of its own.
 */
import type {
  AddressBook,
  AddressLookup,
  AddressLookupForEnv,
  Environment,
} from "./types.js";
import storedAddressBook from "../address-book.json" with { type: "json" };

export const addressBook = storedAddressBook as AddressBook;

const addressLookup = {} as AddressLookup;
for (const environment of [
  "mainnet",
  "testnet",
] as const satisfies readonly Environment[]) {
  const environmentLookup = {} as AddressLookupForEnv;
  for (const group of ["moc", "roc", "governance"] as const) {
    environmentLookup[group] = Object.fromEntries(
      Object.entries(addressBook[environment][group]).map(([name, entry]) => [
        name,
        entry.address,
      ]),
    );
  }
  addressLookup[environment] = environmentLookup;
}

export const addresses = addressLookup;
