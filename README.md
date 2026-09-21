# address-book

Typed Rootstock deployment metadata for Money on Chain, Rif on Chain, and their shared governance contracts.

```ts
import { addressBook, addresses, findAddress } from "address-book";

// Full metadata, including descriptions, provenance, and proxy history.
const rifBucket = addressBook.mainnet.roc.rifBucket;

// Short lookup when only a viem Address is needed.
const rifBucketAddress = addresses.mainnet.roc.rifBucket;
const sameAddress = findAddress("mainnet", "roc.rifBucket");
```

The published library has no runtime imports. Its only consumer dependency is `viem`, used for the `Address` and `Hash` types in TypeScript declarations.

Every `address` and implementation address uses viem's `Address` type. The source catalog is TypeScript so entries can carry reviewable comments, while the exported object remains JSON-serializable.

## Naming

The top-level groups preserve ownership and context:

- `moc` contains addresses sourced from `main-RBTC-contract`.
- `roc` contains addresses sourced from `roc-sc-protocol-v2`.
- `governance` contains addresses sourced from `proposals-changers`.

An address that exists in only one environment starts with `onlyMainnet` or `onlyTestnet`. That asymmetry should prompt callers to confirm that they selected the intended network and contract.

Stable proxy addresses are normal catalog entries. Implementation addresses are available only through the entry's `proxy.implementations` history because integrations should call the proxy. `historyComplete: false` means the explorer did not expose enough events to establish the implementation active at proxy creation.

## Updating proxy histories

The updater inspects every catalog address, identifies proxies through Blockscout, reads `Upgraded(address)` events, and rewrites only `src/proxyHistory.ts`.

```sh
ROOTSTOCK_MAINNET_BLOCKSCOUT_URL=https://rootstock.blockscout.com \
ROOTSTOCK_TESTNET_BLOCKSCOUT_URL=https://rootstock-testnet.blockscout.com \
pnpm --filter address-book update:proxies
```

Review newly discovered proxies and implementation changes before committing the generated file. Explorer data is best effort; an incomplete history remains explicitly marked as such.
