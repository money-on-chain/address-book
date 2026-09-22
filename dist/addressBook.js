/*!
 * This runtime module reads the canonical JSON bundled at the package root.
 * It derives the short address lookup from the metadata view during import.
 * The emitted JavaScript has no runtime dependency on viem or protocol packages.
 * Keep this comment attached to the runtime import so generated JS explains its role.
 */
import storedAddressBook from "../address-book.json" with { type: "json" };
// JSON imports widen tuple arrays, while the canonical-file tests validate their exact two-item shape.
export const addressBook = storedAddressBook;
const addressLookup = {};
for (const environment of ["mainnet", "testnet"]) {
    addressLookup[environment] = Object.fromEntries(Object.entries(addressBook[environment]).map(([name, entry]) => [name, entry.address]));
}
export const addresses = addressLookup;
