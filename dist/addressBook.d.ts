/*!
 * This module exposes the two views consumers need from one canonical JSON file.
 * addressBook retains descriptions and implementation histories for audits and verification.
 * addresses strips each entry down to its stable viem Address for normal integrations.
 * The lookup is derived at module load so metadata and short addresses cannot drift apart.
 * JSON is imported directly; this module owns no deployment data of its own.
 */
import type { AddressBook, AddressLookup } from "./types.js";
export declare const addressBook: AddressBook;
export declare const addresses: AddressLookup;
