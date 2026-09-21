import { addressCatalog } from "./catalog.js";
import { proxyHistory } from "./proxyHistory.js";
function attachProxyMetadata(environment, catalog) {
    const histories = proxyHistory[environment];
    const groups = Object.entries(catalog).map(([groupName, entries]) => {
        const enrichedEntries = Object.entries(entries).map(([entryName, entry]) => {
            const history = histories[entry.address.toLowerCase()];
            return [entryName, history ? { ...entry, proxy: history } : entry];
        });
        return [groupName, Object.fromEntries(enrichedEntries)];
    });
    return Object.fromEntries(groups);
}
function extractAddresses(catalog) {
    const groups = Object.entries(catalog).map(([groupName, entries]) => [
        groupName,
        Object.fromEntries(Object.entries(entries).map(([entryName, entry]) => [entryName, entry.address])),
    ]);
    return Object.fromEntries(groups);
}
/** Complete metadata, descriptions, provenance, and known proxy implementation histories. */
export const addressBook = {
    mainnet: attachProxyMetadata("mainnet", addressCatalog.mainnet),
    testnet: attachProxyMetadata("testnet", addressCatalog.testnet),
};
/** Short typed lookup for callers that only need stable contract addresses. */
export const addresses = {
    mainnet: extractAddresses(addressCatalog.mainnet),
    testnet: extractAddresses(addressCatalog.testnet),
};
/** Resolve a dotted name such as `roc.rifBucket` when the name is dynamic. */
export function findAddress(environment, name) {
    const [group, entry] = name.split(".");
    const environmentAddresses = addresses[environment];
    const groupEntries = environmentAddresses[group];
    const address = groupEntries?.[entry];
    if (!address)
        throw new Error(`Unknown ${environment} address-book name: ${name}`);
    return address;
}
//# sourceMappingURL=addressBook.js.map