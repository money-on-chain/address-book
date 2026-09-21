<!--
This repository is the shared deployment address book for Money on Chain and Rif on Chain.
The canonical address-book.json contains every address, description, provenance record, and proxy history.
The TypeScript library derives both metadata-rich and address-only views from that one file.
Proxy updates inspect only entries explicitly marked as proxies and always cover both Rootstock networks.
viem supplies the Address and Hash types but is not imported by the emitted JavaScript at runtime.
-->

# address-book

Typed Rootstock deployment metadata for Money on Chain, Rif on Chain, and shared governance contracts.

```ts
import { addressBook, addresses } from "address-book";

const rifBucketMetadata = addressBook.mainnet.roc.rifBucket;
const rifBucketAddress = addresses.mainnet.roc.rifBucket;
```

`address-book.json` is the single source of truth. Each entry carries a stable address, a description of its role, and its original repository and field. The TypeScript exports read that file directly.

An entry that exists in only one environment starts with `onlyMainnet` or `onlyTestnet`. Stable proxy addresses include a `proxy` property containing their known implementation history. Implementation addresses do not appear as stable lookup names.

## Updating proxy histories

Run:

```sh
npm run update:proxies
```

The script checks every entry already marked as a proxy against the fixed Rootstock mainnet and testnet Blockscout endpoints. It merges `Upgraded(address)` events into `address-book.json` and validates that the final recorded implementation matches Blockscout's current implementation. It aborts on unsupported proxy standards or inconsistent explorer data rather than guessing.
