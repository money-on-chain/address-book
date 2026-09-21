# address-book authoring guidelines

This repository owns versioned deployment metadata shared by Money on Chain,
Rif on Chain, governance, and their tooling.

- Keep the package independent from every protocol implementation and consumer.
  Do not depend on protocol repositories to obtain addresses or metadata.
- The only allowed consumer dependency is `viem`, and it is used for the
  `Address` and `Hash` types. Do not add runtime packages. Build and test tools
  may be development dependencies, but must not enter the published dependency
  graph.
- Every public contract entry must include a domain name, a useful description,
  and source provenance. Comments should explain how consumers choose between
  addresses whose roles could be confused.
- Expose stable proxy addresses as public entries. Keep implementation addresses
  only in the proxy implementation history, including activation blocks and
  transaction hashes when known. Mark incomplete histories explicitly.
- Keep `mainnet` and `testnet` structurally parallel. Prefix an entry that exists
  in only one environment with `onlyMainnet` or `onlyTestnet` so the asymmetry is
  conspicuous during review.
- Treat the TypeScript catalog as the human-maintained source of truth. The
  address-only lookup and metadata-rich address book must be derived from the
  same catalog.
- The proxy updater may query explorers and rewrite `src/proxyHistory.ts`.
  Review generated changes before committing them; never discard known history
  merely because an explorer request failed.
- Commit `dist` after changing source so Git consumers receive JavaScript and
  declarations without running a build.
