<!--
This repository is the shared deployment address book for Money on Chain and Rif on Chain.
The canonical address-book.json contains every stable address, description, and known proxy history.
The TypeScript library derives both metadata-rich and address-only views from that one file.
Proxy updates inspect only entries whose proxyOf field is an array and always cover both Rootstock networks.
viem supplies the Address type but is not imported by the emitted JavaScript at runtime.
-->

# address-book

Typed Rootstock deployment metadata for Money on Chain, Rif on Chain, and shared governance contracts.

```ts
import { addressBook, addresses } from "address-book";

const rifBucketMetadata = addressBook.mainnet.rifBucket;
const rifBucketAddress = addresses.mainnet.rifBucket;
```

`address-book.json` is the single source of truth. `mainnet` and `testnet` are flat name-to-entry mappings. Each entry contains a stable address, a description stating which protocol uses it, and `proxyOf`.

`proxyOf` is `null` when the entry is not a proxy. For a proxy, it is an array of `[implementationAddress, fromBlock]` tuples with the most recent known implementation first. `fromBlock` is the block at which that implementation became active; it may be `null` when unknown and consumers may ignore it. Implementation histories are informative records of old implementations for validation or verification. Integrations should use the stable entry address.

An entry that exists in only one environment starts with `onlyMainnet` or `onlyTestnet`.

## Updating proxy histories

Run:

```sh
npm run update:proxies
```

The script checks every entry whose `proxyOf` field is an array against the fixed Rootstock mainnet and testnet Blockscout endpoints. It merges `Upgraded(address)` events into `address-book.json` and validates that the first tuple matches Blockscout's current implementation. It aborts on unsupported proxy standards or inconsistent explorer data rather than guessing.

## Development

The published package includes `dist`, so installing it never runs a build or requires a pnpm `allowBuilds` entry. After cloning this repository, enable its dependency-free pre-commit hook once:

```sh
git config core.hooksPath .githooks
```

The hook runs `npm run build` and rejects the commit when the regenerated `dist` differs from the staged files. Review and stage those generated changes, then commit again.
