/*
 * These tests protect the public contract of the address-book package.
 * They verify the canonical JSON rather than duplicating its deployment values in fixtures.
 * Proxy assertions ensure only explicit proxyOf lists drive implementation-history behavior.
 * Lookup assertions prove the compact view is derived from the same records as full metadata.
 * The tests use Node's built-in runner to avoid adding a test-framework dependency.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { addressBook, addresses } from "../src/index.js";
import type { AddressBookEntry, Environment } from "../src/types.js";

const addressPattern = /^0x[0-9a-fA-F]{40}$/;

function entries(environment: Environment): AddressBookEntry[] {
  return Object.values(addressBook[environment]);
}

describe("address-book", () => {
  it("contains valid addresses and descriptions that identify their consumers", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const entry of entries(environment)) {
        assert.match(entry.address, addressPattern);
        assert.ok(entry.contractName.length > 0);
        assert.match(entry.description, /^For /);
      }
    }
  });

  it("marks environment-only entries conspicuously", () => {
    const mainnetNames = new Set(Object.keys(addressBook.mainnet));
    const testnetNames = new Set(Object.keys(addressBook.testnet));
    for (const name of mainnetNames) {
      if (!testnetNames.has(name)) assert.match(name, /^onlyMainnet/);
    }
    for (const name of testnetNames) {
      if (!mainnetNames.has(name)) assert.match(name, /^onlyTestnet/);
    }
  });

  it("uses null for non-proxies and newest-first tuples for proxies", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const entry of entries(environment)) {
        assert.ok("proxyOf" in entry);
        if (entry.proxyOf === null) continue;
        assert.ok(entry.proxyOf.length > 0);
        for (const [implementation, fromBlock] of entry.proxyOf) {
          assert.match(implementation, addressPattern);
          assert.ok(fromBlock === null || Number.isSafeInteger(fromBlock));
        }
        const knownBlocks = entry.proxyOf.flatMap(([, fromBlock]) => (fromBlock === null ? [] : [fromBlock]));
        assert.deepEqual(
          knownBlocks,
          [...knownBlocks].sort((left, right) => right - left),
        );
      }
    }
  });

  it("does not expose implementation contracts as stable lookup names", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const name of Object.keys(addressBook[environment])) assert.doesNotMatch(name, /implementation/i);
    }
  });

  it("derives the flat compact lookup from the canonical metadata", () => {
    for (const environment of ["mainnet", "testnet"] as const) {
      for (const [name, entry] of Object.entries(addressBook[environment])) {
        assert.equal(addresses[environment][name], entry.address);
      }
    }
  });

  // AddTasksRunner-mainnet deployed_addresses.json is the provenance for this installed provider.
  it("publishes the deployed mainnet RIF-to-MOC provider", () => {
    assert.equal(addresses.mainnet.rifToMocPriceProvider, "0x6A27F7D7457a0198631e835a13d7be9a94812002");
  });
});
