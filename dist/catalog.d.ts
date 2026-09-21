/**
 * Human-maintained protocol metadata. Implementation contracts are deliberately absent here;
 * proxy implementation history is attached in addressBook.ts.
 */
export declare const addressCatalog: {
    readonly mainnet: {
        readonly moc: {
            /** Governance executor authorized to run approved protocol changes. */
            readonly governor: {
                readonly contractName: "Governor";
                readonly address: "0x3b8853DF65AfBd94853E6D77ee0Ab5590F41bB08";
                readonly description: "Governance executor authorized to run approved protocol changes.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.governor";
                };
            };
            /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
            readonly oracleManager: {
                readonly contractName: "Oracle manager";
                readonly address: "0x64A5634b2d1f17DC7C4765aAcD222f8e9Eb7712C";
                readonly description: "Oracle manager coordinating coin pairs, oracle selection, and staking.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.oracleManager";
                };
            };
            /** Governed registry of legacy MoC and shared flow contracts. */
            readonly mocRegistry: {
                readonly contractName: "Governed registry";
                readonly address: "0xCD101a2414256DA8F8E25d7b483b3cf639a71683";
                readonly description: "Governed registry of legacy MoC and shared flow contracts.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.mocRegistry";
                };
            };
            /** Canonical MOC governance and fee token. */
            readonly mocToken: {
                readonly contractName: "MOC token";
                readonly address: "0x9AC7fE28967B30E3A4e6e03286d715b42B453D10";
                readonly description: "Canonical MOC governance and fee token.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.mocToken";
                };
            };
            /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
            readonly docToken: {
                readonly contractName: "DOC token";
                readonly address: "0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db";
                readonly description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.docToken";
                };
            };
            /** Legacy MoC v1 state and pricing contract. */
            readonly mocStateV1: {
                readonly contractName: "MoC v1 state";
                readonly address: "0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257";
                readonly description: "Legacy MoC v1 state and pricing contract.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.mocStateV1";
                };
            };
            /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
            readonly supporters: {
                readonly contractName: "Oracle supporters";
                readonly address: "0xB1fc9817C4ad3C40562DfF1159732d657831558A";
                readonly description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.supporters";
                };
            };
            /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
            readonly foundation: {
                readonly contractName: "Foundation account";
                readonly address: "0x4905F643Db489d9561617638d31875b6bfF79077";
                readonly description: "Protocol foundation or treasury recipient used by fee-distribution contracts.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.foundation";
                };
            };
            /**
             * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
             * maintenance.
             */
            readonly tasksRunner: {
                readonly contractName: "Oracle tasks runner";
                readonly address: "0xd99a43ba443068Ea539CeB623aE24e6C9910b975";
                readonly description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.tasksRunner";
                };
            };
            /**
             * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
             * price.
             */
            readonly docToRbtcPriceProvider: {
                readonly contractName: "DOC/RBTC price provider";
                readonly address: "0x6CA9d0e9382f58ac9B109f5F7F3AaBc8b86c1a24";
                readonly description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.docToRbtcPriceProvider";
                };
            };
            /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
            readonly rbtcToMocMocRewardsReverseAuction: {
                readonly contractName: "RBTC-to-MOC rewards reverse auction";
                readonly address: "0x42E29760D05CfB229D4075C75238Ec82Fb94fd59";
                readonly description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.rbtcToMocMocRewardsReverseAuction";
                };
            };
            /** Stable proxy for the legacy Money on Chain v1 core protocol. */
            readonly mocV1: {
                readonly contractName: "MoC v1 core";
                readonly address: "0xf773B590aF754D597770937Fa8ea7AbDf2668370";
                readonly description: "Stable proxy for the legacy Money on Chain v1 core protocol.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.mocV1";
                };
            };
            /** Legacy MoC v1 interest-rate and commission contract. */
            readonly mocInrateV1: {
                readonly contractName: "MoC v1 interest and fees";
                readonly address: "0xc0f9B54c41E3d0587Ce0F7540738d8d649b0A3F3";
                readonly description: "Legacy MoC v1 interest-rate and commission contract.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.mocInrateV1";
                };
            };
            /**
             * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
             * an implementation address.
             */
            readonly coiner: {
                readonly contractName: "Coiner";
                readonly address: "0x661F7d510cdB40638f5Afd9f9dF8877398500593";
                readonly description: "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.coiner";
                };
            };
            /**
             * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
             * protocol-owned proxy.
             */
            readonly multicall2: {
                readonly contractName: "Multicall2";
                readonly address: "0x8f344c3b2a02a801c24635f594c5652c8a2eb02a";
                readonly description: "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.multicall2";
                };
            };
            /**
             * Vendor account supplied by the MoC application so operations can be attributed for vendor
             * commissions.
             */
            readonly vendor: {
                readonly contractName: "MoC application vendor account";
                readonly address: "0xC61820bFB8F87391d62Cd3976dDc1d35e0cf7128";
                readonly description: "Vendor account supplied by the MoC application so operations can be attributed for vendor commissions.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.vendor";
                };
            };
            /** Canonical Rootstock Name Service registry for this network. */
            readonly rns: {
                readonly contractName: "RNS registry";
                readonly address: "0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5";
                readonly description: "Canonical Rootstock Name Service registry for this network.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "mainnet.rns";
                };
            };
        };
        readonly roc: {
            /** Governance executor authorized to run approved protocol changes. */
            readonly governor: {
                readonly contractName: "Governor";
                readonly address: "0x3b8853DF65AfBd94853E6D77ee0Ab5590F41bB08";
                readonly description: "Governance executor authorized to run approved protocol changes.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.governor";
                };
            };
            /**
             * Administrative owner associated with the governor deployment; this is an account, not the
             * Governor contract.
             */
            readonly governorOwner: {
                readonly contractName: "Governor owner account";
                readonly address: "0x65a5681bE95d212F0c90eAd40170D8277de81169";
                readonly description: "Administrative owner associated with the governor deployment; this is an account, not the Governor contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.governorOwner";
                };
            };
            /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
            readonly oracleManager: {
                readonly contractName: "Oracle manager";
                readonly address: "0x64A5634b2d1f17DC7C4765aAcD222f8e9Eb7712C";
                readonly description: "Oracle manager coordinating coin pairs, oracle selection, and staking.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.oracleManager";
                };
            };
            /** Governed registry of legacy MoC and shared flow contracts. */
            readonly mocRegistry: {
                readonly contractName: "Governed registry";
                readonly address: "0xCD101a2414256DA8F8E25d7b483b3cf639a71683";
                readonly description: "Governed registry of legacy MoC and shared flow contracts.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocRegistry";
                };
            };
            /**
             * Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral
             * buckets.
             */
            readonly mocMultiCollateralGuard: {
                readonly contractName: "Multi-collateral guard";
                readonly address: "0x0237Ad1f0831b479a344E56646BC48B0885cF46F";
                readonly description: "Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocMultiCollateralGuard";
                };
            };
            /**
             * Legacy RoC core contract retained for integrations that still refer to the original core
             * deployment.
             */
            readonly mocCore: {
                readonly contractName: "Legacy RoC core";
                readonly address: "0xA27024Ed70035E46dba712609fc2Afa1c97aA36A";
                readonly description: "Legacy RoC core contract retained for integrations that still refer to the original core deployment.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocCore";
                };
            };
            /** Canonical MOC governance and fee token. */
            readonly mocToken: {
                readonly contractName: "MOC token";
                readonly address: "0x9AC7fE28967B30E3A4e6e03286d715b42B453D10";
                readonly description: "Canonical MOC governance and fee token.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocToken";
                };
            };
            /** Canonical RIF token used as collateral by the RIF-backed RoC bucket. */
            readonly rifToken: {
                readonly contractName: "RIF token";
                readonly address: "0x2AcC95758f8b5F583470ba265EB685a8F45fC9D5";
                readonly description: "Canonical RIF token used as collateral by the RIF-backed RoC bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifToken";
                };
            };
            /** Current RIFPro collateral token used by the RIF-backed RoC bucket. */
            readonly rifProToken: {
                readonly contractName: "RIFPro token";
                readonly address: "0xf4d27c56595Ed59B66cC7F03CFF5193e4bd74a61";
                readonly description: "Current RIFPro collateral token used by the RIF-backed RoC bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifProToken";
                };
            };
            /** Canonical USD-rif pegged token used by RoC collateral buckets. */
            readonly usdRifToken: {
                readonly contractName: "USD-rif token";
                readonly address: "0x3A15461d8aE0F0Fb5Fa2629e9DA7D66A794a6e37";
                readonly description: "Canonical USD-rif pegged token used by RoC collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.usdRifToken";
                };
            };
            /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
            readonly docToken: {
                readonly contractName: "DOC token";
                readonly address: "0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db";
                readonly description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docToken";
                };
            };
            /**
             * Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable
             * token.
             */
            readonly docProToken: {
                readonly contractName: "DOC collateral token";
                readonly address: "0x6D46472D6c147970706eA41Db9CAAB79da9262c2";
                readonly description: "Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable token.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docProToken";
                };
            };
            /** Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif. */
            readonly rifBucket: {
                readonly contractName: "RIF collateral bucket";
                readonly address: "0xA27024Ed70035E46dba712609fc2Afa1c97aA36A";
                readonly description: "Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifBucket";
                };
            };
            /**
             * RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the
             * stable bucket proxy.
             */
            readonly docBucket: {
                readonly contractName: "DOC collateral bucket";
                readonly address: "0x697535055Aa7AfD2C280523C7B062b1F05284661";
                readonly description: "RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the stable bucket proxy.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docBucket";
                };
            };
            /** Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls. */
            readonly rifQueue: {
                readonly contractName: "RIF operation queue";
                readonly address: "0x47f5014115d3bb29B20b5168Ee75050D6f8c3Bf1";
                readonly description: "Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifQueue";
                };
            };
            /** Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls. */
            readonly docQueue: {
                readonly contractName: "DOC operation queue";
                readonly address: "0x2BBCBC2CD2F2655d5A4306637c46Bcf2E6D859f6";
                readonly description: "Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docQueue";
                };
            };
            /** Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair. */
            readonly rifUsdLegacyPriceProvider: {
                readonly contractName: "Legacy RIF/USD price provider";
                readonly address: "0x6a5b2C84E63b5C1330bf4CcCff1Ad6F23116CC14";
                readonly description: "Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifUsdLegacyPriceProvider";
                };
            };
            /** Final provider quoting RIF in RBTC for protocol consumers. */
            readonly rifToRbtcPriceProvider: {
                readonly contractName: "RIF/RBTC price provider";
                readonly address: "0x9F5cE0A8f023F8096145cE2d792EB66091cB89fe";
                readonly description: "Final provider quoting RIF in RBTC for protocol consumers.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifToRbtcPriceProvider";
                };
            };
            /**
             * Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral
             * buckets.
             */
            readonly docToUsdRifPriceProvider: {
                readonly contractName: "DOC/USD-rif price provider";
                readonly address: "0x6A343488338b944C6FcC89906646FaC1e8E91cE5";
                readonly description: "Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docToUsdRifPriceProvider";
                };
            };
            /**
             * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
             * price.
             */
            readonly docToRbtcPriceProvider: {
                readonly contractName: "DOC/RBTC price provider";
                readonly address: "0x6CA9d0e9382f58ac9B109f5F7F3AaBc8b86c1a24";
                readonly description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docToRbtcPriceProvider";
                };
            };
            /**
             * Base provider used to derive a MOC/RIF price. Prefer the final directional provider when
             * one is available.
             */
            readonly mocToRifBasePriceProvider: {
                readonly contractName: "MOC/RIF base price provider";
                readonly address: "0x11683439c9509C135ee4F7bB6e23835e1d86ECBA";
                readonly description: "Base provider used to derive a MOC/RIF price. Prefer the final directional provider when one is available.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocToRifBasePriceProvider";
                };
            };
            /**
             * Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final
             * quote.
             */
            readonly rifToRbtcDivisorPriceProvider: {
                readonly contractName: "RIF/RBTC divisor";
                readonly address: "0xe2927A0620b82A66D67F678FC9b826B0E01B1bFD";
                readonly description: "Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final quote.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifToRbtcDivisorPriceProvider";
                };
            };
            /**
             * Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and
             * automation.
             */
            readonly btcUsdCoinPair: {
                readonly contractName: "BTC/USD CoinPairPrice";
                readonly address: "0xa288319eCb63301e21963E21EF3Ca8fb720d2672";
                readonly description: "Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and automation.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.btcUsdCoinPair";
                };
            };
            /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
            readonly supporters: {
                readonly contractName: "Oracle supporters";
                readonly address: "0xB1fc9817C4ad3C40562DfF1159732d657831558A";
                readonly description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.supporters";
                };
            };
            /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
            readonly foundation: {
                readonly contractName: "Foundation account";
                readonly address: "0x4905F643Db489d9561617638d31875b6bfF79077";
                readonly description: "Protocol foundation or treasury recipient used by fee-distribution contracts.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.foundation";
                };
            };
            /**
             * Funded account used by tests and operational simulations. Do not treat it as a protocol
             * contract.
             */
            readonly holder: {
                readonly contractName: "Test asset holder";
                readonly address: "0xe4822F07C1d988A8f2F53D1817f7e8848897b67A";
                readonly description: "Funded account used by tests and operational simulations. Do not treat it as a protocol contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.holder";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner1: {
                readonly contractName: "Oracle owner 1";
                readonly address: "0x4e9e0e64ff95f9a629D1F756119fA636F30BbACD";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.oracleOwner1";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner2: {
                readonly contractName: "Oracle owner 2";
                readonly address: "0xd6fdad4e02477A05A492F1AC51cfE0883C470022";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.oracleOwner2";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner3: {
                readonly contractName: "Oracle owner 3";
                readonly address: "0xC9acAf0Ab55cADC285F109E20d9Ba5cCa81d02D6";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.oracleOwner3";
                };
            };
            /** Live version-2 splitter for fees produced by the RIF collateral bucket. */
            readonly rifCommissionSplitterV2: {
                readonly contractName: "RIF commission splitter V2";
                readonly address: "0x9C66296938d849802fFa879A20fdC11B58C55851";
                readonly description: "Live version-2 splitter for fees produced by the RIF collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifCommissionSplitterV2";
                };
            };
            /** Live version-3 splitter for fees produced by the RIF collateral bucket. */
            readonly rifCommissionSplitterV3: {
                readonly contractName: "RIF commission splitter V3";
                readonly address: "0x6C22ff31fbdF725d30F206efFF9f8a2a11fAf948";
                readonly description: "Live version-3 splitter for fees produced by the RIF collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifCommissionSplitterV3";
                };
            };
            /** Live version-2 splitter for fees produced by the DOC collateral bucket. */
            readonly docCommissionSplitterV2: {
                readonly contractName: "DOC commission splitter V2";
                readonly address: "0xfc5E1B8468327B60cA1C6e32672249De9a10FfDc";
                readonly description: "Live version-2 splitter for fees produced by the DOC collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docCommissionSplitterV2";
                };
            };
            /** Live version-2 splitter for MOC-denominated commissions. */
            readonly mocCommissionSplitterV2: {
                readonly contractName: "MOC commission splitter V2";
                readonly address: "0x60cEEf03AA1AA96263e297D220EE4EBc3c6b6E47";
                readonly description: "Live version-2 splitter for MOC-denominated commissions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocCommissionSplitterV2";
                };
            };
            /** Live version-3 splitter for MOC-denominated commissions. */
            readonly mocCommissionSplitterV3: {
                readonly contractName: "MOC commission splitter V3";
                readonly address: "0x114921bcbd5fc34E103494d338cA492B9400B0fD";
                readonly description: "Live version-3 splitter for MOC-denominated commissions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocCommissionSplitterV3";
                };
            };
            /** Buffer that accumulates RIFPro rewards before automated distribution. */
            readonly rifProRewardsBuffer: {
                readonly contractName: "RIFPro rewards buffer";
                readonly address: "0x09A84d61c1A10f1D5fb3267DFb00D16ca0DaCC30";
                readonly description: "Buffer that accumulates RIFPro rewards before automated distribution.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifProRewardsBuffer";
                };
            };
            /** Legacy buffer that accumulates ROCR rewards before automated distribution. */
            readonly rocrRewardsBuffer: {
                readonly contractName: "ROCR rewards buffer";
                readonly address: "0x9Ea22Ca83dD42A4b8E4C797bBcd6dFE4413EE8F8";
                readonly description: "Legacy buffer that accumulates ROCR rewards before automated distribution.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rocrRewardsBuffer";
                };
            };
            /**
             * Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only
             * for the legacy BitPro reward flow.
             */
            readonly bitProRewardsBuffer: {
                readonly contractName: "BitPro rewards buffer";
                readonly address: "0x7002dD3027947aB98cA3DDC28F93F2450281453A";
                readonly description: "Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only for the legacy BitPro reward flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.bitProRewardsBuffer";
                };
            };
            /**
             * Legacy buffer that accumulates BPro rewards before automated distribution. Use this only
             * for the legacy BPro reward flow.
             */
            readonly bproRewardsBuffer: {
                readonly contractName: "BPro rewards buffer";
                readonly address: "0x5646c6988d5D3d7F78F15683CE3aca11699BCDBb";
                readonly description: "Legacy buffer that accumulates BPro rewards before automated distribution. Use this only for the legacy BPro reward flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.bproRewardsBuffer";
                };
            };
            /**
             * Buffer that receives MOC rewards before they are distributed through the automated rewards
             * flow.
             */
            readonly mocRewardsBuffer: {
                readonly contractName: "MOC rewards buffer";
                readonly address: "0xf09006E812BE98c7B18c877Af5C126629acB6cAb";
                readonly description: "Buffer that receives MOC rewards before they are distributed through the automated rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocRewardsBuffer";
                };
            };
            /** Reverse auction converting RIF into MOC for the RoC rewards flow. */
            readonly rifToMocRocRewardsReverseAuction: {
                readonly contractName: "RIF-to-MOC RoC rewards reverse auction";
                readonly address: "0x323f6117A256E8f697Ac8d2816eb71e9B7134809";
                readonly description: "Reverse auction converting RIF into MOC for the RoC rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifToMocRocRewardsReverseAuction";
                };
            };
            /** Reverse auction converting MOC into RIF for the RIF collateral-bucket flow. */
            readonly mocToRifRifBucketReverseAuction: {
                readonly contractName: "MOC-to-RIF bucket reverse auction";
                readonly address: "0xd3D1aFc638cEF2C55D2Ee33e0C355972f11Be065";
                readonly description: "Reverse auction converting MOC into RIF for the RIF collateral-bucket flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocToRifRifBucketReverseAuction";
                };
            };
            /** Reverse auction converting DOC into MOC for the RoC rewards flow. */
            readonly docToMocRocRewardsReverseAuction: {
                readonly contractName: "DOC-to-MOC RoC rewards reverse auction";
                readonly address: "0x883e3433c236Abd3c301FFc9B59EA478C0C21c9a";
                readonly description: "Reverse auction converting DOC into MOC for the RoC rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.docToMocRocRewardsReverseAuction";
                };
            };
            /** Reverse auction converting MOC into DOC for the DOC collateral-bucket flow. */
            readonly mocToDocDocBucketReverseAuction: {
                readonly contractName: "MOC-to-DOC bucket reverse auction";
                readonly address: "0x3EB689a01c4e8ccaC7c72097104FF37Ccf907bBE";
                readonly description: "Reverse auction converting MOC into DOC for the DOC collateral-bucket flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocToDocDocBucketReverseAuction";
                };
            };
            /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
            readonly rbtcToMocMocRewardsReverseAuction: {
                readonly contractName: "RBTC-to-MOC rewards reverse auction";
                readonly address: "0x42E29760D05CfB229D4075C75238Ec82Fb94fd59";
                readonly description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rbtcToMocMocRewardsReverseAuction";
                };
            };
            /** Reverse auction converting MOC into RBTC for the legacy MoC v1 flow. */
            readonly mocToRbtcMocV1ReverseAuction: {
                readonly contractName: "MOC-to-RBTC MoC v1 reverse auction";
                readonly address: "0xcd1D5d171a466A103c3A078C6770dEb801011542";
                readonly description: "Reverse auction converting MOC into RBTC for the legacy MoC v1 flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocToRbtcMocV1ReverseAuction";
                };
            };
            /** Legacy MoC v1 state and pricing contract. */
            readonly mocStateV1: {
                readonly contractName: "MoC v1 state";
                readonly address: "0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257";
                readonly description: "Legacy MoC v1 state and pricing contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.mocStateV1";
                };
            };
            /**
             * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
             * maintenance.
             */
            readonly tasksRunner: {
                readonly contractName: "Oracle tasks runner";
                readonly address: "0xd99a43ba443068Ea539CeB623aE24e6C9910b975";
                readonly description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.tasksRunner";
                };
            };
            /** Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow. */
            readonly rifUsdCoinPair: {
                readonly contractName: "RIF/USD CoinPairPrice";
                readonly address: "0xaFb1B8C320ACc776c1279bcDB24Ab8F84aB727A4";
                readonly description: "Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifUsdCoinPair";
                };
            };
            /** Price provider quoting RBTC in MOC for RBTC-to-MOC auctions. */
            readonly rbtcToMocPriceProvider: {
                readonly contractName: "RBTC/MOC price provider";
                readonly address: "0x46f28Bb1F9E96B11899d36c8072d3345a27b732B";
                readonly description: "Price provider quoting RBTC in MOC for RBTC-to-MOC auctions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rbtcToMocPriceProvider";
                };
            };
            /**
             * Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC
             * auctions.
             */
            readonly rifToMocPriceProvider: {
                readonly contractName: "RIF/MOC price provider";
                readonly address: "0x6A27F7D7457a0198631e835a13d7be9a94812002";
                readonly description: "Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC auctions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rifToMocPriceProvider";
                };
            };
            /**
             * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
             * protocol-owned proxy.
             */
            readonly multicall2: {
                readonly contractName: "Multicall2";
                readonly address: "0x8f344c3b2a02a801c24635f594c5652c8a2eb02a";
                readonly description: "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.multicall2";
                };
            };
            /** Mainnet-only. Mainnet-only legacy RDOC token accepted by the RDOC-to-USD-rif migrator. */
            readonly onlyMainnetRdocToken: {
                readonly contractName: "RDOC token";
                readonly address: "0x2d919f19d4892381d58edebeca66d5642cef1a1f";
                readonly description: "Mainnet-only. Mainnet-only legacy RDOC token accepted by the RDOC-to-USD-rif migrator.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.rdocToken";
                };
            };
            /**
             * Mainnet-only. Mainnet-only migrator that converts legacy RDOC into the current USD-rif
             * token.
             */
            readonly onlyMainnetTokenMigrator: {
                readonly contractName: "RDOC-to-USD-rif token migrator";
                readonly address: "0x4ac78a51f67bdbc9fcb813d041914b2de37e87d7";
                readonly description: "Mainnet-only. Mainnet-only migrator that converts legacy RDOC into the current USD-rif token.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "mainnet.tokenMigrator";
                };
            };
        };
        readonly governance: {
            /** Stable governance VotingMachine proxy on which proposals are registered and voted. */
            readonly votingMachine: {
                readonly contractName: "Voting machine";
                readonly address: "0x65a5681bE95d212F0c90eAd40170D8277de81169";
                readonly description: "Stable governance VotingMachine proxy on which proposals are registered and voted.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "mainnet.votingMachine";
                };
            };
            /** Delegator authorized to upgrade the VotingMachine proxy after governance approval. */
            readonly votingUpgradeDelegator: {
                readonly contractName: "Voting upgrade delegator";
                readonly address: "0x131564703310a294C1bFDC09D10EC0659f18E253";
                readonly description: "Delegator authorized to upgrade the VotingMachine proxy after governance approval.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "mainnet.votingUpgradeDelegator";
                };
            };
            /**
             * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
             * an implementation address.
             */
            readonly coiner: {
                readonly contractName: "Coiner";
                readonly address: "0x661F7d510cdB40638f5Afd9f9dF8877398500593";
                readonly description: "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "mainnet.coiner";
                };
            };
        };
    };
    readonly testnet: {
        readonly moc: {
            /** Governance executor authorized to run approved protocol changes. */
            readonly governor: {
                readonly contractName: "Governor";
                readonly address: "0x7b716178771057195bB511f0B1F7198EEE62Bc22";
                readonly description: "Governance executor authorized to run approved protocol changes.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.governor";
                };
            };
            /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
            readonly oracleManager: {
                readonly contractName: "Oracle manager";
                readonly address: "0x493eefbB8F0a22f85708c0C890E7B531E61A7018";
                readonly description: "Oracle manager coordinating coin pairs, oracle selection, and staking.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.oracleManager";
                };
            };
            /** Governed registry of legacy MoC and shared flow contracts. */
            readonly mocRegistry: {
                readonly contractName: "Governed registry";
                readonly address: "0xf078375a3dD89dDF4D9dA460352199C6769b5f10";
                readonly description: "Governed registry of legacy MoC and shared flow contracts.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.mocRegistry";
                };
            };
            /** Canonical MOC governance and fee token. */
            readonly mocToken: {
                readonly contractName: "MOC token";
                readonly address: "0x45a97b54021a3F99827641AFe1BFAE574431e6ab";
                readonly description: "Canonical MOC governance and fee token.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.mocToken";
                };
            };
            /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
            readonly docToken: {
                readonly contractName: "DOC token";
                readonly address: "0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0";
                readonly description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.docToken";
                };
            };
            /** Legacy MoC v1 state and pricing contract. */
            readonly mocStateV1: {
                readonly contractName: "MoC v1 state";
                readonly address: "0x0adb40132cB0ffcEf6ED81c26A1881e214100555";
                readonly description: "Legacy MoC v1 state and pricing contract.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.mocStateV1";
                };
            };
            /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
            readonly supporters: {
                readonly contractName: "Oracle supporters";
                readonly address: "0x2Bb08e5DFb88477A88180Fbb7eF8196fbdea4Cd5";
                readonly description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.supporters";
                };
            };
            /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
            readonly foundation: {
                readonly contractName: "Foundation account";
                readonly address: "0xf69287F5Ca3cC3C6d3981f2412109110cB8af076";
                readonly description: "Protocol foundation or treasury recipient used by fee-distribution contracts.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.foundation";
                };
            };
            /**
             * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
             * maintenance.
             */
            readonly tasksRunner: {
                readonly contractName: "Oracle tasks runner";
                readonly address: "0x0E00baCDf5c6d6F51777998B4d7A660FD29e0fb6";
                readonly description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.tasksRunner";
                };
            };
            /**
             * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
             * price.
             */
            readonly docToRbtcPriceProvider: {
                readonly contractName: "DOC/RBTC price provider";
                readonly address: "0x1d927673aFB57F82Af4a9CD94CCC5aA4915e0A13";
                readonly description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.docToRbtcPriceProvider";
                };
            };
            /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
            readonly rbtcToMocMocRewardsReverseAuction: {
                readonly contractName: "RBTC-to-MOC rewards reverse auction";
                readonly address: "0x80bB8a52290bF85C4b500980dcDB3FF14Ab8C35e";
                readonly description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.rbtcToMocMocRewardsReverseAuction";
                };
            };
            /** Stable proxy for the legacy Money on Chain v1 core protocol. */
            readonly mocV1: {
                readonly contractName: "MoC v1 core";
                readonly address: "0x2820f6d4D199B8D8838A4B26F9917754B86a0c1F";
                readonly description: "Stable proxy for the legacy Money on Chain v1 core protocol.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.mocV1";
                };
            };
            /** Legacy MoC v1 interest-rate and commission contract. */
            readonly mocInrateV1: {
                readonly contractName: "MoC v1 interest and fees";
                readonly address: "0x76790f846FAAf44cf1B2D717d0A6c5f6f5152B60";
                readonly description: "Legacy MoC v1 interest-rate and commission contract.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.mocInrateV1";
                };
            };
            /**
             * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
             * an implementation address.
             */
            readonly coiner: {
                readonly contractName: "Coiner";
                readonly address: "0x5b7071270C3FD3d99BE411baCb145b2fb47F0D0F";
                readonly description: "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.coiner";
                };
            };
            /**
             * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
             * protocol-owned proxy.
             */
            readonly multicall2: {
                readonly contractName: "Multicall2";
                readonly address: "0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8";
                readonly description: "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.multicall2";
                };
            };
            /**
             * Vendor account supplied by the MoC application so operations can be attributed for vendor
             * commissions.
             */
            readonly vendor: {
                readonly contractName: "MoC application vendor account";
                readonly address: "0xf69287F5Ca3cC3C6d3981f2412109110cB8af076";
                readonly description: "Vendor account supplied by the MoC application so operations can be attributed for vendor commissions.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.vendor";
                };
            };
            /** Canonical Rootstock Name Service registry for this network. */
            readonly rns: {
                readonly contractName: "RNS registry";
                readonly address: "0x7d284aaac6e925aad802a53c0c69efe3764597b8";
                readonly description: "Canonical Rootstock Name Service registry for this network.";
                readonly source: {
                    readonly repository: "main-RBTC-contract";
                    readonly field: "testnet.rns";
                };
            };
        };
        readonly roc: {
            /** Governance executor authorized to run approved protocol changes. */
            readonly governor: {
                readonly contractName: "Governor";
                readonly address: "0x7b716178771057195bB511f0B1F7198EEE62Bc22";
                readonly description: "Governance executor authorized to run approved protocol changes.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.governor";
                };
            };
            /**
             * Administrative owner associated with the governor deployment; this is an account, not the
             * Governor contract.
             */
            readonly governorOwner: {
                readonly contractName: "Governor owner account";
                readonly address: "0x7d124cc0f59ada5793ad8eda9ed1836cb7e797a3";
                readonly description: "Administrative owner associated with the governor deployment; this is an account, not the Governor contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.governorOwner";
                };
            };
            /**
             * Funded account used by tests and operational simulations. Do not treat it as a protocol
             * contract.
             */
            readonly holder: {
                readonly contractName: "Test asset holder";
                readonly address: "0x5bCdf8A2E61BD238AEe43b99962Ee8BfBda1Beca";
                readonly description: "Funded account used by tests and operational simulations. Do not treat it as a protocol contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.holder";
                };
            };
            /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
            readonly oracleManager: {
                readonly contractName: "Oracle manager";
                readonly address: "0x7b716178771057195bB511f0B1F7198EEE62Bc22";
                readonly description: "Oracle manager coordinating coin pairs, oracle selection, and staking.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.oracleManager";
                };
            };
            /** Governed registry of legacy MoC and shared flow contracts. */
            readonly mocRegistry: {
                readonly contractName: "Governed registry";
                readonly address: "0xf078375a3dD89dDF4D9dA460352199C6769b5f10";
                readonly description: "Governed registry of legacy MoC and shared flow contracts.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocRegistry";
                };
            };
            /**
             * Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral
             * buckets.
             */
            readonly mocMultiCollateralGuard: {
                readonly contractName: "Multi-collateral guard";
                readonly address: "0xBc3669954b4c513140294ECF9B7b540cf964f0a3";
                readonly description: "Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocMultiCollateralGuard";
                };
            };
            /**
             * Legacy RoC core contract retained for integrations that still refer to the original core
             * deployment.
             */
            readonly mocCore: {
                readonly contractName: "Legacy RoC core";
                readonly address: "0xa416934264515bb381E3b746f10f22D5c6f9431a";
                readonly description: "Legacy RoC core contract retained for integrations that still refer to the original core deployment.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocCore";
                };
            };
            /** Canonical MOC governance and fee token. */
            readonly mocToken: {
                readonly contractName: "MOC token";
                readonly address: "0x45a97b54021a3F99827641AFe1BFAE574431e6ab";
                readonly description: "Canonical MOC governance and fee token.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocToken";
                };
            };
            /** Canonical RIF token used as collateral by the RIF-backed RoC bucket. */
            readonly rifToken: {
                readonly contractName: "RIF token";
                readonly address: "0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE";
                readonly description: "Canonical RIF token used as collateral by the RIF-backed RoC bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifToken";
                };
            };
            /** Current RIFPro collateral token used by the RIF-backed RoC bucket. */
            readonly rifProToken: {
                readonly contractName: "RIFPro token";
                readonly address: "0xAC29DFF7B9b237B569cBb1595860bba77e848771";
                readonly description: "Current RIFPro collateral token used by the RIF-backed RoC bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifProToken";
                };
            };
            /**
             * Testnet-only. Testnet-only legacy RIFPro token retained for testing the RIFPro migration
             * path.
             */
            readonly onlyTestnetLegacyRifProToken: {
                readonly contractName: "Legacy RIFPro token";
                readonly address: "0x23A1aA7b11e68beBE560a36beC04D1f79357f28d";
                readonly description: "Testnet-only. Testnet-only legacy RIFPro token retained for testing the RIFPro migration path.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.legacyRifProToken";
                };
            };
            /** Testnet-only. Testnet-only migrator used to exercise the legacy RIFPro migration path. */
            readonly onlyTestnetRifProMigrator: {
                readonly contractName: "RIFPro migrator";
                readonly address: "0x49bDFd00D1Af1B46a933f6583238e69f6B7d76e2";
                readonly description: "Testnet-only. Testnet-only migrator used to exercise the legacy RIFPro migration path.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifProMigrator";
                };
            };
            /** Canonical USD-rif pegged token used by RoC collateral buckets. */
            readonly usdRifToken: {
                readonly contractName: "USD-rif token";
                readonly address: "0x8dbf326e12a9fF37ED6DDF75adA548C2640A6482";
                readonly description: "Canonical USD-rif pegged token used by RoC collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.usdRifToken";
                };
            };
            /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
            readonly docToken: {
                readonly contractName: "DOC token";
                readonly address: "0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0";
                readonly description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docToken";
                };
            };
            /**
             * Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable
             * token.
             */
            readonly docProToken: {
                readonly contractName: "DOC collateral token";
                readonly address: "0x5579764B323966CD11d3a0936A8c75bEC61BA7D0";
                readonly description: "Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable token.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docProToken";
                };
            };
            /** Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif. */
            readonly rifBucket: {
                readonly contractName: "RIF collateral bucket";
                readonly address: "0xa416934264515bb381E3b746f10f22D5c6f9431a";
                readonly description: "Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifBucket";
                };
            };
            /**
             * RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the
             * stable bucket proxy.
             */
            readonly docBucket: {
                readonly contractName: "DOC collateral bucket";
                readonly address: "0xFc2aF3396D8DB9398f7cF704Fa5F78aBAbb79650";
                readonly description: "RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the stable bucket proxy.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docBucket";
                };
            };
            /** Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls. */
            readonly rifQueue: {
                readonly contractName: "RIF operation queue";
                readonly address: "0x57672a34e92cA751148BcB303E5FE02E2E5F00Ed";
                readonly description: "Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifQueue";
                };
            };
            /** Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls. */
            readonly docQueue: {
                readonly contractName: "DOC operation queue";
                readonly address: "0x313E40047eb61Db80BE00135dd25F04eD7b2203b";
                readonly description: "Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docQueue";
                };
            };
            /** Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair. */
            readonly rifUsdLegacyPriceProvider: {
                readonly contractName: "Legacy RIF/USD price provider";
                readonly address: "0x963eF288380d8466c7509775FdF32EDF56edcD56";
                readonly description: "Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifUsdLegacyPriceProvider";
                };
            };
            /** Final provider quoting RIF in RBTC for protocol consumers. */
            readonly rifToRbtcPriceProvider: {
                readonly contractName: "RIF/RBTC price provider";
                readonly address: "0xE01Ff5527ffae7Bc2f722966CC9272bbBf9f3E27";
                readonly description: "Final provider quoting RIF in RBTC for protocol consumers.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifToRbtcPriceProvider";
                };
            };
            /**
             * Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral
             * buckets.
             */
            readonly docToUsdRifPriceProvider: {
                readonly contractName: "DOC/USD-rif price provider";
                readonly address: "0x640a1102700325e68193F0741E7DA5Fd213Fde24";
                readonly description: "Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral buckets.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docToUsdRifPriceProvider";
                };
            };
            /**
             * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
             * price.
             */
            readonly docToRbtcPriceProvider: {
                readonly contractName: "DOC/RBTC price provider";
                readonly address: "0x1d927673aFB57F82Af4a9CD94CCC5aA4915e0A13";
                readonly description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docToRbtcPriceProvider";
                };
            };
            /**
             * Base provider used to derive a MOC/RIF price. Prefer the final directional provider when
             * one is available.
             */
            readonly mocToRifBasePriceProvider: {
                readonly contractName: "MOC/RIF base price provider";
                readonly address: "0x8DCE78BbD4D757EF7777Be113277cf5A35283b1E";
                readonly description: "Base provider used to derive a MOC/RIF price. Prefer the final directional provider when one is available.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocToRifBasePriceProvider";
                };
            };
            /**
             * Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final
             * quote.
             */
            readonly rifToRbtcDivisorPriceProvider: {
                readonly contractName: "RIF/RBTC divisor";
                readonly address: "0xbffBD993FF1d229B0FfE55668F2009d20d4F7C5f";
                readonly description: "Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final quote.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifToRbtcDivisorPriceProvider";
                };
            };
            /** Live version-2 splitter for fees produced by the DOC collateral bucket. */
            readonly docCommissionSplitterV2: {
                readonly contractName: "DOC commission splitter V2";
                readonly address: "0xCA58E6B68b349BAd86b5E405fF68fa15c88Df22C";
                readonly description: "Live version-2 splitter for fees produced by the DOC collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docCommissionSplitterV2";
                };
            };
            /** Reverse auction converting DOC into MOC for the RoC rewards flow. */
            readonly docToMocRocRewardsReverseAuction: {
                readonly contractName: "DOC-to-MOC RoC rewards reverse auction";
                readonly address: "0xBe950B0B03Fbc4205dc1E596c479F2Ef03cCA64f";
                readonly description: "Reverse auction converting DOC into MOC for the RoC rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.docToMocRocRewardsReverseAuction";
                };
            };
            /** Legacy MoC v1 state and pricing contract. */
            readonly mocStateV1: {
                readonly contractName: "MoC v1 state";
                readonly address: "0x0adb40132cB0ffcEf6ED81c26A1881e214100555";
                readonly description: "Legacy MoC v1 state and pricing contract.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocStateV1";
                };
            };
            /**
             * Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and
             * automation.
             */
            readonly btcUsdCoinPair: {
                readonly contractName: "BTC/USD CoinPairPrice";
                readonly address: "0x39192498FcF1dBE11653040bB49308E09A1056AC";
                readonly description: "Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and automation.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.btcUsdCoinPair";
                };
            };
            /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
            readonly supporters: {
                readonly contractName: "Oracle supporters";
                readonly address: "0x2Bb08e5DFb88477A88180Fbb7eF8196fbdea4Cd5";
                readonly description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.supporters";
                };
            };
            /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
            readonly foundation: {
                readonly contractName: "Foundation account";
                readonly address: "0xf69287F5Ca3cC3C6d3981f2412109110cB8af076";
                readonly description: "Protocol foundation or treasury recipient used by fee-distribution contracts.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.foundation";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner1: {
                readonly contractName: "Oracle owner 1";
                readonly address: "0xc256e64884be4f266c4f98f5e8e9f73486a7c829";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.oracleOwner1";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner2: {
                readonly contractName: "Oracle owner 2";
                readonly address: "0x17f9fbb707fa50eb98d7ec32cfeda33d0924f1a1";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.oracleOwner2";
                };
            };
            /**
             * Known oracle-owner account used by the configured oracle network. This is an account, not
             * an oracle signing key.
             */
            readonly oracleOwner3: {
                readonly contractName: "Oracle owner 3";
                readonly address: "0xc9aacd76ff8a8c567cd947148cbfcc18c07b8b5c";
                readonly description: "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.oracleOwner3";
                };
            };
            /** Live version-2 splitter for fees produced by the RIF collateral bucket. */
            readonly rifCommissionSplitterV2: {
                readonly contractName: "RIF commission splitter V2";
                readonly address: "0x499072990571C49Ef9369624885581b9C5aF0B11";
                readonly description: "Live version-2 splitter for fees produced by the RIF collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifCommissionSplitterV2";
                };
            };
            /** Live version-3 splitter for fees produced by the RIF collateral bucket. */
            readonly rifCommissionSplitterV3: {
                readonly contractName: "RIF commission splitter V3";
                readonly address: "0xD1FF3909dCa7C755F38e4FF04ce7170b4940d89B";
                readonly description: "Live version-3 splitter for fees produced by the RIF collateral bucket.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifCommissionSplitterV3";
                };
            };
            /** Live version-2 splitter for MOC-denominated commissions. */
            readonly mocCommissionSplitterV2: {
                readonly contractName: "MOC commission splitter V2";
                readonly address: "0xFA17f640d0E914B20CDDF985B269D2Dc16e0f767";
                readonly description: "Live version-2 splitter for MOC-denominated commissions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocCommissionSplitterV2";
                };
            };
            /** Live version-3 splitter for MOC-denominated commissions. */
            readonly mocCommissionSplitterV3: {
                readonly contractName: "MOC commission splitter V3";
                readonly address: "0x0dee24D1ffb67fA751a58042F2C7a858FFb3F207";
                readonly description: "Live version-3 splitter for MOC-denominated commissions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocCommissionSplitterV3";
                };
            };
            /** Buffer that accumulates RIFPro rewards before automated distribution. */
            readonly rifProRewardsBuffer: {
                readonly contractName: "RIFPro rewards buffer";
                readonly address: "0x1eDaDfd891793a5D1a011fFB82635C2Bbedc2511";
                readonly description: "Buffer that accumulates RIFPro rewards before automated distribution.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifProRewardsBuffer";
                };
            };
            /** Legacy buffer that accumulates ROCR rewards before automated distribution. */
            readonly rocrRewardsBuffer: {
                readonly contractName: "ROCR rewards buffer";
                readonly address: "0x6e364c96a83B72fe69843E50Fe08D09495AB0100";
                readonly description: "Legacy buffer that accumulates ROCR rewards before automated distribution.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rocrRewardsBuffer";
                };
            };
            /**
             * Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only
             * for the legacy BitPro reward flow.
             */
            readonly bitProRewardsBuffer: {
                readonly contractName: "BitPro rewards buffer";
                readonly address: "0xb998C3Da8D24295406d308ea42c85c8acDa880Ba";
                readonly description: "Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only for the legacy BitPro reward flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.bitProRewardsBuffer";
                };
            };
            /**
             * Legacy buffer that accumulates BPro rewards before automated distribution. Use this only
             * for the legacy BPro reward flow.
             */
            readonly bproRewardsBuffer: {
                readonly contractName: "BPro rewards buffer";
                readonly address: "0xBBD8aFD5E7D3127D9Ee372D9AD2BC0B0af8af066";
                readonly description: "Legacy buffer that accumulates BPro rewards before automated distribution. Use this only for the legacy BPro reward flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.bproRewardsBuffer";
                };
            };
            /**
             * Buffer that receives MOC rewards before they are distributed through the automated rewards
             * flow.
             */
            readonly mocRewardsBuffer: {
                readonly contractName: "MOC rewards buffer";
                readonly address: "0x40d86d6ac67059bAe5ae42B6FCaB843c1c6af300";
                readonly description: "Buffer that receives MOC rewards before they are distributed through the automated rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocRewardsBuffer";
                };
            };
            /** Reverse auction converting RIF into MOC for the RoC rewards flow. */
            readonly rifToMocRocRewardsReverseAuction: {
                readonly contractName: "RIF-to-MOC RoC rewards reverse auction";
                readonly address: "0x55c888D946784fcc732dB1bB4A5b059C67aE5510";
                readonly description: "Reverse auction converting RIF into MOC for the RoC rewards flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifToMocRocRewardsReverseAuction";
                };
            };
            /** Reverse auction converting MOC into RIF for the RIF collateral-bucket flow. */
            readonly mocToRifRifBucketReverseAuction: {
                readonly contractName: "MOC-to-RIF bucket reverse auction";
                readonly address: "0x7461878FDe4144112f91DD6B913023563363bC80";
                readonly description: "Reverse auction converting MOC into RIF for the RIF collateral-bucket flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocToRifRifBucketReverseAuction";
                };
            };
            /** Reverse auction converting MOC into DOC for the DOC collateral-bucket flow. */
            readonly mocToDocDocBucketReverseAuction: {
                readonly contractName: "MOC-to-DOC bucket reverse auction";
                readonly address: "0x94199B751709c7e9a6AdeCBA5aA28de5BB1178D0";
                readonly description: "Reverse auction converting MOC into DOC for the DOC collateral-bucket flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocToDocDocBucketReverseAuction";
                };
            };
            /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
            readonly rbtcToMocMocRewardsReverseAuction: {
                readonly contractName: "RBTC-to-MOC rewards reverse auction";
                readonly address: "0x80bB8a52290bF85C4b500980dcDB3FF14Ab8C35e";
                readonly description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rbtcToMocMocRewardsReverseAuction";
                };
            };
            /** Reverse auction converting MOC into RBTC for the legacy MoC v1 flow. */
            readonly mocToRbtcMocV1ReverseAuction: {
                readonly contractName: "MOC-to-RBTC MoC v1 reverse auction";
                readonly address: "0x0cC17FC424cC39E07CF774f2597d2778261cf6a8";
                readonly description: "Reverse auction converting MOC into RBTC for the legacy MoC v1 flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.mocToRbtcMocV1ReverseAuction";
                };
            };
            /**
             * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
             * maintenance.
             */
            readonly tasksRunner: {
                readonly contractName: "Oracle tasks runner";
                readonly address: "0x0E00baCDf5c6d6F51777998B4d7A660FD29e0fb6";
                readonly description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.tasksRunner";
                };
            };
            /** Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow. */
            readonly rifUsdCoinPair: {
                readonly contractName: "RIF/USD CoinPairPrice";
                readonly address: "0x45Eda601198Db28413fa7653300C52d5E4Db9b8b";
                readonly description: "Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifUsdCoinPair";
                };
            };
            /** Price provider quoting RBTC in MOC for RBTC-to-MOC auctions. */
            readonly rbtcToMocPriceProvider: {
                readonly contractName: "RBTC/MOC price provider";
                readonly address: "0x3C05F6193A2FBF9B6CF427C6CF1505Cf113eD417";
                readonly description: "Price provider quoting RBTC in MOC for RBTC-to-MOC auctions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rbtcToMocPriceProvider";
                };
            };
            /**
             * Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC
             * auctions.
             */
            readonly rifToMocPriceProvider: {
                readonly contractName: "RIF/MOC price provider";
                readonly address: "0x169733DB88838a07061dB985dd52583170796F38";
                readonly description: "Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC auctions.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.rifToMocPriceProvider";
                };
            };
            /**
             * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
             * protocol-owned proxy.
             */
            readonly multicall2: {
                readonly contractName: "Multicall2";
                readonly address: "0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8";
                readonly description: "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.";
                readonly source: {
                    readonly repository: "roc-sc-protocol-v2";
                    readonly field: "testnet.multicall2";
                };
            };
        };
        readonly governance: {
            /** Stable governance VotingMachine proxy on which proposals are registered and voted. */
            readonly votingMachine: {
                readonly contractName: "Voting machine";
                readonly address: "0x7D124cC0f59aDA5793AD8edA9eD1836cB7e797a3";
                readonly description: "Stable governance VotingMachine proxy on which proposals are registered and voted.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "testnet.votingMachine";
                };
            };
            /** Delegator authorized to upgrade the VotingMachine proxy after governance approval. */
            readonly votingUpgradeDelegator: {
                readonly contractName: "Voting upgrade delegator";
                readonly address: "0x546afdf647d0b5c73323366b090ebe6c0c4d9b2c";
                readonly description: "Delegator authorized to upgrade the VotingMachine proxy after governance approval.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "testnet.votingUpgradeDelegator";
                };
            };
            /**
             * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
             * an implementation address.
             */
            readonly coiner: {
                readonly contractName: "Coiner";
                readonly address: "0x5b7071270C3FD3d99BE411baCb145b2fb47F0D0F";
                readonly description: "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.";
                readonly source: {
                    readonly repository: "proposals-changers";
                    readonly field: "testnet.coiner";
                };
            };
        };
    };
};
//# sourceMappingURL=catalog.d.ts.map