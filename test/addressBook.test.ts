import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { addressBook, addresses, findAddress } from "../src/index.js";
import type { AddressBookEntry, Environment } from "../src/types.js";

const environments = ["mainnet", "testnet"] as const;

function entries(environment: Environment): AddressBookEntry[] {
  return Object.values(addressBook[environment]).flatMap(group => Object.values(group));
}

describe("AddressBook", () => {
  it("contains valid typed addresses and useful metadata", () => {
    for (const environment of environments) {
      for (const entry of entries(environment)) {
        assert.match(entry.address, /^0x[0-9a-fA-F]{40}$/);
        assert.ok(entry.contractName.length > 2);
        assert.ok(entry.description.length > 20);
        assert.ok(entry.source.field.startsWith(`${environment}.`));
      }
    }
  });

  it("makes environment-only names conspicuous", () => {
    for (const group of Object.keys(addressBook.mainnet) as (keyof typeof addressBook.mainnet)[]) {
      const mainnetNames = new Set(Object.keys(addressBook.mainnet[group]));
      const testnetNames = new Set(Object.keys(addressBook.testnet[group]));
      for (const name of mainnetNames) {
        if (!testnetNames.has(name)) assert.match(name, /^onlyMainnet/);
      }
      for (const name of testnetNames) {
        if (!mainnetNames.has(name)) assert.match(name, /^onlyTestnet/);
      }
    }
  });

  it("does not publish implementation contracts as stable lookup names", () => {
    for (const environment of environments) {
      for (const [groupName, group] of Object.entries(addressBook[environment])) {
        for (const entryName of Object.keys(group)) {
          assert.doesNotMatch(`${groupName}.${entryName}`, /implementation/i);
        }
      }
    }
  });

  it("keeps proxy histories chronological", () => {
    for (const environment of environments) {
      for (const entry of entries(environment)) {
        if (!entry.proxy) continue;
        assert.ok(entry.proxy.implementations.length > 0);
        for (let index = 1; index < entry.proxy.implementations.length; index++) {
          const previousBlock = entry.proxy.implementations[index - 1]!.fromBlock;
          const currentBlock = entry.proxy.implementations[index]!.fromBlock;
          if (previousBlock !== null && currentBlock !== null) {
            assert.ok(previousBlock <= currentBlock);
          }
          assert.notEqual(entry.proxy.implementations[index - 1]!.address, entry.proxy.implementations[index]!.address);
        }
      }
    }
  });

  it("retains legacy implementation fields only inside proxy histories", () => {
    const legacyImplementations = [
      "0x1a2702d60a8B68B845709155b3d97E1Da85FeC54",
      "0x6D1BB87856A2b2351D87Ba5772a93dC911325af9",
      "0x9a1b725B8DD1523159DcBE5B2e4075A95FE64a7d",
      "0xF9208Ca168ff7cCAFd120EDBf39CF86b625F5A9B",
      "0x4515be1CAb97f17933e954f5d1e01f1A73DDD8ce",
      "0xC36DA47c94c57FDE23cEF9Fc436B4EdA9A7C3EBd",
      "0xdd8134dee1bd67fBf681B7DA8D135CD732dD7c9C",
      "0x7C0d9FeD90aC531EC0E3Bf4E67f4e07078f63316",
      "0xdb863A19217d1D1aF9c1a5D98F30c56a6075F326",
      "0x854860C7e82FC455D4161c4Bbe538d47c3e44191",
      "0x47B0B4aD3170391Dde7B00482f76c93B715F87C5",
      "0x767BC47D6B7116d2c43E5B839aAe99E64384aD34",
    ].map(address => address.toLowerCase());
    const recordedImplementations = new Set(
      environments.flatMap(environment =>
        entries(environment).flatMap(entry =>
          (entry.proxy?.implementations ?? []).map(implementation => implementation.address.toLowerCase()),
        ),
      ),
    );
    for (const implementation of legacyImplementations) {
      assert.ok(recordedImplementations.has(implementation), implementation);
    }
  });

  it("offers nested and dotted address-only lookups", () => {
    assert.equal(addresses.mainnet.roc.rifBucket, addressBook.mainnet.roc.rifBucket.address);
    assert.equal(findAddress("mainnet", "roc.rifBucket"), addresses.mainnet.roc.rifBucket);
    assert.equal(addresses.mainnet.roc.rifToMocPriceProvider, "0x6A27F7D7457a0198631e835a13d7be9a94812002");
  });
});
