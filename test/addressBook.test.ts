/*
 * These tests protect the public contract of the address-book package.
 * They verify the canonical JSON rather than duplicating its deployment values in fixtures.
 * Proxy assertions ensure only explicit proxy metadata drives implementation-history behavior.
 * Lookup assertions prove the compact view is derived from the same records as full metadata.
 * The tests use Node's built-in runner to avoid adding a test-framework dependency.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { addressBook, addresses } from "../src/index.js";
import type { AddressBookEntry, Environment } from "../src/types.js";

const addressPattern = /^0x[0-9a-fA-F]{40}$/;

function entries(environment: Environment): AddressBookEntry[] {
  return Object.values(addressBook[environment]).flatMap((group) =>
    Object.values(group),
  );
}

describe("address-book", () => {
  it("contains valid addresses and auditable metadata", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const entry of entries(environment)) {
        assert.match(entry.address, addressPattern);
        assert.ok(entry.contractName.length > 0);
        assert.ok(entry.description.length > 20);
        assert.ok(entry.source.repository.length > 0);
        assert.ok(entry.source.field.startsWith(`${environment}.`));
      }
    }
  });

  it("marks environment-only entries conspicuously", () => {
    const mainnetNames = new Set(
      Object.values(addressBook.mainnet).flatMap((group) => Object.keys(group)),
    );
    const testnetNames = new Set(
      Object.values(addressBook.testnet).flatMap((group) => Object.keys(group)),
    );
    for (const name of mainnetNames) {
      if (!testnetNames.has(name)) assert.match(name, /^onlyMainnet/);
    }
    for (const name of testnetNames) {
      if (!mainnetNames.has(name)) assert.match(name, /^onlyTestnet/);
    }
  });

  it("stores proxy status and history on the canonical entry", () => {
    const proxies = (["mainnet", "testnet"] as const).flatMap((environment) =>
      entries(environment).filter((entry) => entry.proxy),
    );
    assert.ok(proxies.length > 0);
    for (const entry of proxies) {
      assert.ok(entry.proxy);
      assert.ok(entry.proxy.implementations.length > 0);
      assert.equal("proxyAddress" in entry.proxy, false);
      const knownBlocks = entry.proxy.implementations.flatMap(
        (implementation) =>
          implementation.fromBlock === null ? [] : [implementation.fromBlock],
      );
      assert.deepEqual(
        knownBlocks,
        [...knownBlocks].sort((left, right) => left - right),
      );
    }
  });

  it("does not expose implementation contracts as stable lookup names", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const group of Object.values(addressBook[environment])) {
        for (const name of Object.keys(group))
          assert.doesNotMatch(name, /implementation/i);
      }
    }
  });

  it("derives the compact lookup from the canonical metadata", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const group of ["moc", "roc", "governance"] as const) {
        for (const [name, entry] of Object.entries(
          addressBook[environment][group],
        )) {
          assert.equal(addresses[environment][group][name], entry.address);
        }
      }
    }
  });

  // AddTasksRunner-mainnet deployed_addresses.json is the provenance for this installed provider.
  it("publishes the deployed mainnet RIF-to-MOC provider", () => {
    assert.equal(
      addresses.mainnet.roc.rifToMocPriceProvider,
      "0x6A27F7D7457a0198631e835a13d7be9a94812002",
    );
  });
});
