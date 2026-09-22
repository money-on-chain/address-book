/*!
 * This module exposes the two views consumers need from one canonical JSON file.
 * addressBook retains descriptions and implementation histories for audits and verification.
 * addresses strips each entry down to its stable viem Address for normal integrations.
 * The lookup is derived at module load so metadata and short addresses cannot drift apart.
 * JSON is imported directly; this module owns no deployment data of its own.
 */
import type { AddressBook, AddressLookup, Environment } from "./types.js";
/*!
 * This runtime module reads the canonical JSON bundled at the package root.
 * It derives the short address lookup from the metadata view during import.
 * The emitted JavaScript has no runtime dependency on viem or protocol packages.
 * Keep this comment attached to the runtime import so generated JS explains its role.
 */
import storedAddressBook from "../address-book.json" with { type: "json" };

// JSON imports widen tuple arrays, while the canonical-file tests validate their exact two-item shape.
export const addressBook = storedAddressBook as unknown as AddressBook;

const addressLookup = {} as AddressLookup;
for (const environment of ["mainnet", "testnet"] as const satisfies readonly Environment[]) {
  addressLookup[environment] = Object.fromEntries(
    Object.entries(addressBook[environment]).map(([name, entry]) => [name, entry.address]),
  );
}

export const addresses = addressLookup;
