<!--
This file defines the code-authoring rules for OMoC-SC-Shared and related work.
It exists so architectural decisions and review expectations remain explicit.
The rules apply to human contributors and automated agents throughout the checkout.
Repository-specific ownership and address-book constraints take precedence over convenience.
Update this file whenever review feedback establishes a reusable engineering rule.
-->

# Code Authoring Guidelines

These rules apply to all code changed in this checkout, including code under
`packages/*/external`. They apply to people and AI agents. Follow more-specific
local guidance when it exists.

## Write for humans

- Make code easy to read and review. Use names that describe the domain concept
  or the value's purpose; do not use vague names such as `data`, `result`, or
  `value` when a meaningful name is available.
- Organize behavior around concepts. Prefer classes, objects, structs, enums,
  contracts, and their methods over collections of unrelated free functions.
  When behavior shares data, that data and behavior should usually live on the
  same concept.
- Keep behavior in the package that owns the concept. Shared utilities should
  remain domain-neutral; code used by only one protocol or application belongs
  with that consumer unless there is a clear architectural reason to share it.
- Write the least code that solves the current requirement. Do not add options,
  abstractions, generic types, indirection, or configuration for hypothetical
  future uses.
- Do not add behavior, files, dependencies, or operational choices that were not
  requested or required by the current design.
- Start every new human-maintained file with at least five lines explaining why
  the file exists, its responsibility, and any surprising implementation detail
  or dependency. Use documented metadata fields when the file format does not
  support comments.
- Comment hardcoded contract, network, event, and environment values where they
  are declared. State why the value is fixed and identify its provenance so a
  reviewer can verify when it must change.

## End-to-end architecture

- `packages/moc-end-to-end` owns Money on Chain scenarios and environment
  composition; `packages/roc-end-to-end` owns Rif on Chain scenarios and
  environment composition. Do not put protocol-specific code in the other
  protocol's package or make either end-to-end package depend on the other.
- `fullMocEnv` and `fullRocEnv` are independent entry points. Each chooses the
  contracts, pending changers, services, applications, and fixtures it needs.
  They may diverge as the protocols evolve; do not force them into one generic
  environment or keep them identical by copying protocol-specific setup.
- Reusable setup mechanisms belong in `packages/end-to-end-utils`. Before
  sharing code, identify the concept that owns it and its actual consumers.
  Choose the simplest, least surprising home and interface; moving a protocol's
  implementation into utilities does not make it shared infrastructure.
- Each environment assembles its application's `ViteAppConfig` locally and
  passes it to `ViteApp.setupFromConfig`. Shared utilities own process and browser
  lifecycle, not protocol-specific environment variables or application defaults.
  Use the same launch path for MoC and RoC; derive allowed API origins from the
  selected API URL so overrides remain consistent.
- The standalone `address-book` repository owns runtime deployment metadata for
  MoC, RoC, and shared governance. Consume a released version; do not copy its
  catalog into this monorepo or make it depend on protocol implementations.
  Migration parameter files are inputs to changers, not runtime address books.
- The canonical `address-book.json` stores each useful name, stable address,
  description, environment, source provenance, and proxy metadata. TypeScript
  utilities read that one file and derive the complete metadata view and the
  short `Address` lookup; do not maintain parallel catalogs or generated shadow
  histories. Prefix environment-only names with `onlyMainnet` or `onlyTestnet`
  so missing parity remains conspicuous.
- Mark proxies explicitly in `address-book.json`. The updater processes only
  marked entries, appends verified implementation history to the same in-memory
  structure, and overwrites that same JSON file. Keep implementation addresses
  out of the stable lookup and retain activation blocks, transaction hashes, and
  an explicit completeness flag when known.
- Shared utilities receive addresses explicitly from their consumers. Do not
  make a protocol implementation a dependency merely to obtain an address.
- Do not add dependency patches, patch files, or a `patches/` directory to this
  repository. Make missing source changes in the owning repository and consume
  a released version when it is available.
- Fix unclear responsibilities at their source. Inspect the callers and
  dependencies before adding a fallback, wrapper, or abstraction.
- Fresh mainnet environments fork the latest Rootstock mainnet block. Execute
  upcoming changers explicitly; do not replay migrations already on mainnet.
  Keep setup, cache restoration, and teardown consistent, and invalidate cached
  environments when their setup assumptions change.

## Keep code direct

- Do not introduce a variable or constant used only once unless it makes a long
  expression readable by splitting it across lines.
- Do not introduce a function or method used only once unless it represents a
  meaningful domain operation. Avoid trivial one-line wrappers, argument
  forwarding, and helpers that only concatenate strings.
- Copy a pattern while it is used once or twice. Refactor it when it appears
  more than twice. For small repetition inside one operation, prefer a local
  closure over a new method that must receive the surrounding context as
  arguments.
- If a value is genuinely shared between modules, prefer a static method on the
  relevant concept over a standalone `SCREAMING_SNAKE_CASE` constant. Keep
  implementation-local values close to their use.

## Comments and configuration

- Comment functions and methods to explain _why_ they exist, the assumptions
  they rely on, and surprising circumstances that may later stop applying.
  Do not narrate obvious control flow or restate what the code does.
- Treat runtime and deployment inputs as configuration: hosts, ports,
  credentials, paths, feature switches, and environment-specific behavior must
  come from environment variables. Fixed protocol constants and local
  implementation details may remain in code. Deployed contract addresses are
  versioned protocol metadata and follow the address-book ownership rules above.
- Add configuration only when an operator has a meaningful choice. Keep fixed
  protocol or service endpoints in code with a comment explaining their purpose
  and provenance instead of adding environment variables that imply unsupported
  alternatives.
- Before integrating an external API, inspect its official schema and a real
  response for every field the code relies on. Represent known facts explicitly
  in the source of truth; do not rediscover them at runtime or silently infer a
  different state when the service disagrees.
- Prefer one canonical data structure and derive narrower projections from it.
  An updater must read, modify, and write that same structure instead of creating
  a second file whose contents can drift.

## Language guidance

- **TypeScript:** model domain concepts with classes or objects; avoid exporting
  convenience helpers that add no behavior beyond their call sites.
- **Solidity:** use contracts and libraries to model protocol concepts; keep
  state, invariants, and access control with the behavior they protect.
- **Rust:** model concepts with structs, enums, traits, and `impl` blocks;
  avoid free helper functions that only pass data through.
- **Scripts and configuration:** keep scripts linear and local to their task;
  avoid framework-like wrappers or speculative configuration layers.

Use the language's existing formatter, linter, and compiler for mechanical
enforcement. These guidelines govern the design and readability decisions that
tools cannot reliably enforce.
