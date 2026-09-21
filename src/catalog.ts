import type { Address } from "viem";
import type { AddressBook } from "./types.js";

const address = <T extends Address>(literal: T): T => literal;

/**
 * Human-maintained protocol metadata. Implementation contracts are deliberately absent here;
 * proxy implementation history is attached in addressBook.ts.
 */
export const addressCatalog = {
  mainnet: {
    moc: {
      /** Governance executor authorized to run approved protocol changes. */
      governor: {
        contractName: "Governor",
        address: address("0x3b8853DF65AfBd94853E6D77ee0Ab5590F41bB08"),
        description: "Governance executor authorized to run approved protocol changes.",
        source: { repository: "main-RBTC-contract", field: "mainnet.governor" },
      },
      /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
      oracleManager: {
        contractName: "Oracle manager",
        address: address("0x64A5634b2d1f17DC7C4765aAcD222f8e9Eb7712C"),
        description: "Oracle manager coordinating coin pairs, oracle selection, and staking.",
        source: { repository: "main-RBTC-contract", field: "mainnet.oracleManager" },
      },
      /** Governed registry of legacy MoC and shared flow contracts. */
      mocRegistry: {
        contractName: "Governed registry",
        address: address("0xCD101a2414256DA8F8E25d7b483b3cf639a71683"),
        description: "Governed registry of legacy MoC and shared flow contracts.",
        source: { repository: "main-RBTC-contract", field: "mainnet.mocRegistry" },
      },
      /** Canonical MOC governance and fee token. */
      mocToken: {
        contractName: "MOC token",
        address: address("0x9AC7fE28967B30E3A4e6e03286d715b42B453D10"),
        description: "Canonical MOC governance and fee token.",
        source: { repository: "main-RBTC-contract", field: "mainnet.mocToken" },
      },
      /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
      docToken: {
        contractName: "DOC token",
        address: address("0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db"),
        description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.",
        source: { repository: "main-RBTC-contract", field: "mainnet.docToken" },
      },
      /** Legacy MoC v1 state and pricing contract. */
      mocStateV1: {
        contractName: "MoC v1 state",
        address: address("0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257"),
        description: "Legacy MoC v1 state and pricing contract.",
        source: { repository: "main-RBTC-contract", field: "mainnet.mocStateV1" },
      },
      /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
      supporters: {
        contractName: "Oracle supporters",
        address: address("0xB1fc9817C4ad3C40562DfF1159732d657831558A"),
        description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.",
        source: { repository: "main-RBTC-contract", field: "mainnet.supporters" },
      },
      /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
      foundation: {
        contractName: "Foundation account",
        address: address("0x4905F643Db489d9561617638d31875b6bfF79077"),
        description: "Protocol foundation or treasury recipient used by fee-distribution contracts.",
        source: { repository: "main-RBTC-contract", field: "mainnet.foundation" },
      },
      /**
       * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
       * maintenance.
       */
      tasksRunner: {
        contractName: "Oracle tasks runner",
        address: address("0xd99a43ba443068Ea539CeB623aE24e6C9910b975"),
        description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.",
        source: { repository: "main-RBTC-contract", field: "mainnet.tasksRunner" },
      },
      /**
       * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
       * price.
       */
      docToRbtcPriceProvider: {
        contractName: "DOC/RBTC price provider",
        address: address("0x6CA9d0e9382f58ac9B109f5F7F3AaBc8b86c1a24"),
        description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.",
        source: { repository: "main-RBTC-contract", field: "mainnet.docToRbtcPriceProvider" },
      },
      /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
      rbtcToMocMocRewardsReverseAuction: {
        contractName: "RBTC-to-MOC rewards reverse auction",
        address: address("0x42E29760D05CfB229D4075C75238Ec82Fb94fd59"),
        description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.",
        source: { repository: "main-RBTC-contract", field: "mainnet.rbtcToMocMocRewardsReverseAuction" },
      },
      /** Stable proxy for the legacy Money on Chain v1 core protocol. */
      mocV1: {
        contractName: "MoC v1 core",
        address: address("0xf773B590aF754D597770937Fa8ea7AbDf2668370"),
        description: "Stable proxy for the legacy Money on Chain v1 core protocol.",
        source: { repository: "main-RBTC-contract", field: "mainnet.mocV1" },
      },
      /** Legacy MoC v1 interest-rate and commission contract. */
      mocInrateV1: {
        contractName: "MoC v1 interest and fees",
        address: address("0xc0f9B54c41E3d0587Ce0F7540738d8d649b0A3F3"),
        description: "Legacy MoC v1 interest-rate and commission contract.",
        source: { repository: "main-RBTC-contract", field: "mainnet.mocInrateV1" },
      },
      /**
       * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
       * an implementation address.
       */
      coiner: {
        contractName: "Coiner",
        address: address("0x661F7d510cdB40638f5Afd9f9dF8877398500593"),
        description:
          "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.",
        source: { repository: "main-RBTC-contract", field: "mainnet.coiner" },
      },
      /**
       * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
       * protocol-owned proxy.
       */
      multicall2: {
        contractName: "Multicall2",
        address: address("0x8f344c3b2a02a801c24635f594c5652c8a2eb02a"),
        description:
          "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.",
        source: { repository: "main-RBTC-contract", field: "mainnet.multicall2" },
      },
      /**
       * Vendor account supplied by the MoC application so operations can be attributed for vendor
       * commissions.
       */
      vendor: {
        contractName: "MoC application vendor account",
        address: address("0xC61820bFB8F87391d62Cd3976dDc1d35e0cf7128"),
        description:
          "Vendor account supplied by the MoC application so operations can be attributed for vendor commissions.",
        source: { repository: "main-RBTC-contract", field: "mainnet.vendor" },
      },
      /** Canonical Rootstock Name Service registry for this network. */
      rns: {
        contractName: "RNS registry",
        address: address("0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5"),
        description: "Canonical Rootstock Name Service registry for this network.",
        source: { repository: "main-RBTC-contract", field: "mainnet.rns" },
      },
    },
    roc: {
      /** Governance executor authorized to run approved protocol changes. */
      governor: {
        contractName: "Governor",
        address: address("0x3b8853DF65AfBd94853E6D77ee0Ab5590F41bB08"),
        description: "Governance executor authorized to run approved protocol changes.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.governor" },
      },
      /**
       * Administrative owner associated with the governor deployment; this is an account, not the
       * Governor contract.
       */
      governorOwner: {
        contractName: "Governor owner account",
        address: address("0x65a5681bE95d212F0c90eAd40170D8277de81169"),
        description:
          "Administrative owner associated with the governor deployment; this is an account, not the Governor contract.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.governorOwner" },
      },
      /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
      oracleManager: {
        contractName: "Oracle manager",
        address: address("0x64A5634b2d1f17DC7C4765aAcD222f8e9Eb7712C"),
        description: "Oracle manager coordinating coin pairs, oracle selection, and staking.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.oracleManager" },
      },
      /** Governed registry of legacy MoC and shared flow contracts. */
      mocRegistry: {
        contractName: "Governed registry",
        address: address("0xCD101a2414256DA8F8E25d7b483b3cf639a71683"),
        description: "Governed registry of legacy MoC and shared flow contracts.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocRegistry" },
      },
      /**
       * Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral
       * buckets.
       */
      mocMultiCollateralGuard: {
        contractName: "Multi-collateral guard",
        address: address("0x0237Ad1f0831b479a344E56646BC48B0885cF46F"),
        description: "Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocMultiCollateralGuard" },
      },
      /**
       * Legacy RoC core contract retained for integrations that still refer to the original core
       * deployment.
       */
      mocCore: {
        contractName: "Legacy RoC core",
        address: address("0xA27024Ed70035E46dba712609fc2Afa1c97aA36A"),
        description:
          "Legacy RoC core contract retained for integrations that still refer to the original core deployment.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocCore" },
      },
      /** Canonical MOC governance and fee token. */
      mocToken: {
        contractName: "MOC token",
        address: address("0x9AC7fE28967B30E3A4e6e03286d715b42B453D10"),
        description: "Canonical MOC governance and fee token.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocToken" },
      },
      /** Canonical RIF token used as collateral by the RIF-backed RoC bucket. */
      rifToken: {
        contractName: "RIF token",
        address: address("0x2AcC95758f8b5F583470ba265EB685a8F45fC9D5"),
        description: "Canonical RIF token used as collateral by the RIF-backed RoC bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifToken" },
      },
      /** Current RIFPro collateral token used by the RIF-backed RoC bucket. */
      rifProToken: {
        contractName: "RIFPro token",
        address: address("0xf4d27c56595Ed59B66cC7F03CFF5193e4bd74a61"),
        description: "Current RIFPro collateral token used by the RIF-backed RoC bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifProToken" },
      },
      /** Canonical USD-rif pegged token used by RoC collateral buckets. */
      usdRifToken: {
        contractName: "USD-rif token",
        address: address("0x3A15461d8aE0F0Fb5Fa2629e9DA7D66A794a6e37"),
        description: "Canonical USD-rif pegged token used by RoC collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.usdRifToken" },
      },
      /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
      docToken: {
        contractName: "DOC token",
        address: address("0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db"),
        description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docToken" },
      },
      /**
       * Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable
       * token.
       */
      docProToken: {
        contractName: "DOC collateral token",
        address: address("0x6D46472D6c147970706eA41Db9CAAB79da9262c2"),
        description: "Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable token.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docProToken" },
      },
      /** Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif. */
      rifBucket: {
        contractName: "RIF collateral bucket",
        address: address("0xA27024Ed70035E46dba712609fc2Afa1c97aA36A"),
        description: "Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifBucket" },
      },
      /**
       * RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the
       * stable bucket proxy.
       */
      docBucket: {
        contractName: "DOC collateral bucket",
        address: address("0x697535055Aa7AfD2C280523C7B062b1F05284661"),
        description:
          "RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the stable bucket proxy.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docBucket" },
      },
      /** Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls. */
      rifQueue: {
        contractName: "RIF operation queue",
        address: address("0x47f5014115d3bb29B20b5168Ee75050D6f8c3Bf1"),
        description: "Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifQueue" },
      },
      /** Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls. */
      docQueue: {
        contractName: "DOC operation queue",
        address: address("0x2BBCBC2CD2F2655d5A4306637c46Bcf2E6D859f6"),
        description: "Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docQueue" },
      },
      /** Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair. */
      rifUsdLegacyPriceProvider: {
        contractName: "Legacy RIF/USD price provider",
        address: address("0x6a5b2C84E63b5C1330bf4CcCff1Ad6F23116CC14"),
        description: "Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifUsdLegacyPriceProvider" },
      },
      /** Final provider quoting RIF in RBTC for protocol consumers. */
      rifToRbtcPriceProvider: {
        contractName: "RIF/RBTC price provider",
        address: address("0x9F5cE0A8f023F8096145cE2d792EB66091cB89fe"),
        description: "Final provider quoting RIF in RBTC for protocol consumers.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifToRbtcPriceProvider" },
      },
      /**
       * Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral
       * buckets.
       */
      docToUsdRifPriceProvider: {
        contractName: "DOC/USD-rif price provider",
        address: address("0x6A343488338b944C6FcC89906646FaC1e8E91cE5"),
        description:
          "Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docToUsdRifPriceProvider" },
      },
      /**
       * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
       * price.
       */
      docToRbtcPriceProvider: {
        contractName: "DOC/RBTC price provider",
        address: address("0x6CA9d0e9382f58ac9B109f5F7F3AaBc8b86c1a24"),
        description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docToRbtcPriceProvider" },
      },
      /**
       * Base provider used to derive a MOC/RIF price. Prefer the final directional provider when
       * one is available.
       */
      mocToRifBasePriceProvider: {
        contractName: "MOC/RIF base price provider",
        address: address("0x11683439c9509C135ee4F7bB6e23835e1d86ECBA"),
        description:
          "Base provider used to derive a MOC/RIF price. Prefer the final directional provider when one is available.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocToRifBasePriceProvider" },
      },
      /**
       * Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final
       * quote.
       */
      rifToRbtcDivisorPriceProvider: {
        contractName: "RIF/RBTC divisor",
        address: address("0xe2927A0620b82A66D67F678FC9b826B0E01B1bFD"),
        description:
          "Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final quote.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifToRbtcDivisorPriceProvider" },
      },
      /**
       * Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and
       * automation.
       */
      btcUsdCoinPair: {
        contractName: "BTC/USD CoinPairPrice",
        address: address("0xa288319eCb63301e21963E21EF3Ca8fb720d2672"),
        description:
          "Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and automation.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.btcUsdCoinPair" },
      },
      /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
      supporters: {
        contractName: "Oracle supporters",
        address: address("0xB1fc9817C4ad3C40562DfF1159732d657831558A"),
        description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.supporters" },
      },
      /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
      foundation: {
        contractName: "Foundation account",
        address: address("0x4905F643Db489d9561617638d31875b6bfF79077"),
        description: "Protocol foundation or treasury recipient used by fee-distribution contracts.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.foundation" },
      },
      /**
       * Funded account used by tests and operational simulations. Do not treat it as a protocol
       * contract.
       */
      holder: {
        contractName: "Test asset holder",
        address: address("0xe4822F07C1d988A8f2F53D1817f7e8848897b67A"),
        description:
          "Funded account used by tests and operational simulations. Do not treat it as a protocol contract.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.holder" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner1: {
        contractName: "Oracle owner 1",
        address: address("0x4e9e0e64ff95f9a629D1F756119fA636F30BbACD"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.oracleOwner1" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner2: {
        contractName: "Oracle owner 2",
        address: address("0xd6fdad4e02477A05A492F1AC51cfE0883C470022"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.oracleOwner2" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner3: {
        contractName: "Oracle owner 3",
        address: address("0xC9acAf0Ab55cADC285F109E20d9Ba5cCa81d02D6"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.oracleOwner3" },
      },
      /** Live version-2 splitter for fees produced by the RIF collateral bucket. */
      rifCommissionSplitterV2: {
        contractName: "RIF commission splitter V2",
        address: address("0x9C66296938d849802fFa879A20fdC11B58C55851"),
        description: "Live version-2 splitter for fees produced by the RIF collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifCommissionSplitterV2" },
      },
      /** Live version-3 splitter for fees produced by the RIF collateral bucket. */
      rifCommissionSplitterV3: {
        contractName: "RIF commission splitter V3",
        address: address("0x6C22ff31fbdF725d30F206efFF9f8a2a11fAf948"),
        description: "Live version-3 splitter for fees produced by the RIF collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifCommissionSplitterV3" },
      },
      /** Live version-2 splitter for fees produced by the DOC collateral bucket. */
      docCommissionSplitterV2: {
        contractName: "DOC commission splitter V2",
        address: address("0xfc5E1B8468327B60cA1C6e32672249De9a10FfDc"),
        description: "Live version-2 splitter for fees produced by the DOC collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docCommissionSplitterV2" },
      },
      /** Live version-2 splitter for MOC-denominated commissions. */
      mocCommissionSplitterV2: {
        contractName: "MOC commission splitter V2",
        address: address("0x60cEEf03AA1AA96263e297D220EE4EBc3c6b6E47"),
        description: "Live version-2 splitter for MOC-denominated commissions.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocCommissionSplitterV2" },
      },
      /** Live version-3 splitter for MOC-denominated commissions. */
      mocCommissionSplitterV3: {
        contractName: "MOC commission splitter V3",
        address: address("0x114921bcbd5fc34E103494d338cA492B9400B0fD"),
        description: "Live version-3 splitter for MOC-denominated commissions.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocCommissionSplitterV3" },
      },
      /** Buffer that accumulates RIFPro rewards before automated distribution. */
      rifProRewardsBuffer: {
        contractName: "RIFPro rewards buffer",
        address: address("0x09A84d61c1A10f1D5fb3267DFb00D16ca0DaCC30"),
        description: "Buffer that accumulates RIFPro rewards before automated distribution.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifProRewardsBuffer" },
      },
      /** Legacy buffer that accumulates ROCR rewards before automated distribution. */
      rocrRewardsBuffer: {
        contractName: "ROCR rewards buffer",
        address: address("0x9Ea22Ca83dD42A4b8E4C797bBcd6dFE4413EE8F8"),
        description: "Legacy buffer that accumulates ROCR rewards before automated distribution.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rocrRewardsBuffer" },
      },
      /**
       * Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only
       * for the legacy BitPro reward flow.
       */
      bitProRewardsBuffer: {
        contractName: "BitPro rewards buffer",
        address: address("0x7002dD3027947aB98cA3DDC28F93F2450281453A"),
        description:
          "Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only for the legacy BitPro reward flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.bitProRewardsBuffer" },
      },
      /**
       * Legacy buffer that accumulates BPro rewards before automated distribution. Use this only
       * for the legacy BPro reward flow.
       */
      bproRewardsBuffer: {
        contractName: "BPro rewards buffer",
        address: address("0x5646c6988d5D3d7F78F15683CE3aca11699BCDBb"),
        description:
          "Legacy buffer that accumulates BPro rewards before automated distribution. Use this only for the legacy BPro reward flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.bproRewardsBuffer" },
      },
      /**
       * Buffer that receives MOC rewards before they are distributed through the automated rewards
       * flow.
       */
      mocRewardsBuffer: {
        contractName: "MOC rewards buffer",
        address: address("0xf09006E812BE98c7B18c877Af5C126629acB6cAb"),
        description: "Buffer that receives MOC rewards before they are distributed through the automated rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocRewardsBuffer" },
      },
      /** Reverse auction converting RIF into MOC for the RoC rewards flow. */
      rifToMocRocRewardsReverseAuction: {
        contractName: "RIF-to-MOC RoC rewards reverse auction",
        address: address("0x323f6117A256E8f697Ac8d2816eb71e9B7134809"),
        description: "Reverse auction converting RIF into MOC for the RoC rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifToMocRocRewardsReverseAuction" },
      },
      /** Reverse auction converting MOC into RIF for the RIF collateral-bucket flow. */
      mocToRifRifBucketReverseAuction: {
        contractName: "MOC-to-RIF bucket reverse auction",
        address: address("0xd3D1aFc638cEF2C55D2Ee33e0C355972f11Be065"),
        description: "Reverse auction converting MOC into RIF for the RIF collateral-bucket flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocToRifRifBucketReverseAuction" },
      },
      /** Reverse auction converting DOC into MOC for the RoC rewards flow. */
      docToMocRocRewardsReverseAuction: {
        contractName: "DOC-to-MOC RoC rewards reverse auction",
        address: address("0x883e3433c236Abd3c301FFc9B59EA478C0C21c9a"),
        description: "Reverse auction converting DOC into MOC for the RoC rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.docToMocRocRewardsReverseAuction" },
      },
      /** Reverse auction converting MOC into DOC for the DOC collateral-bucket flow. */
      mocToDocDocBucketReverseAuction: {
        contractName: "MOC-to-DOC bucket reverse auction",
        address: address("0x3EB689a01c4e8ccaC7c72097104FF37Ccf907bBE"),
        description: "Reverse auction converting MOC into DOC for the DOC collateral-bucket flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocToDocDocBucketReverseAuction" },
      },
      /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
      rbtcToMocMocRewardsReverseAuction: {
        contractName: "RBTC-to-MOC rewards reverse auction",
        address: address("0x42E29760D05CfB229D4075C75238Ec82Fb94fd59"),
        description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rbtcToMocMocRewardsReverseAuction" },
      },
      /** Reverse auction converting MOC into RBTC for the legacy MoC v1 flow. */
      mocToRbtcMocV1ReverseAuction: {
        contractName: "MOC-to-RBTC MoC v1 reverse auction",
        address: address("0xcd1D5d171a466A103c3A078C6770dEb801011542"),
        description: "Reverse auction converting MOC into RBTC for the legacy MoC v1 flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocToRbtcMocV1ReverseAuction" },
      },
      /** Legacy MoC v1 state and pricing contract. */
      mocStateV1: {
        contractName: "MoC v1 state",
        address: address("0xb9C42EFc8ec54490a37cA91c423F7285Fa01e257"),
        description: "Legacy MoC v1 state and pricing contract.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.mocStateV1" },
      },
      /**
       * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
       * maintenance.
       */
      tasksRunner: {
        contractName: "Oracle tasks runner",
        address: address("0xd99a43ba443068Ea539CeB623aE24e6C9910b975"),
        description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.tasksRunner" },
      },
      /** Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow. */
      rifUsdCoinPair: {
        contractName: "RIF/USD CoinPairPrice",
        address: address("0xaFb1B8C320ACc776c1279bcDB24Ab8F84aB727A4"),
        description: "Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifUsdCoinPair" },
      },
      /** Price provider quoting RBTC in MOC for RBTC-to-MOC auctions. */
      rbtcToMocPriceProvider: {
        contractName: "RBTC/MOC price provider",
        address: address("0x46f28Bb1F9E96B11899d36c8072d3345a27b732B"),
        description: "Price provider quoting RBTC in MOC for RBTC-to-MOC auctions.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rbtcToMocPriceProvider" },
      },
      /**
       * Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC
       * auctions.
       */
      rifToMocPriceProvider: {
        contractName: "RIF/MOC price provider",
        address: address("0x6A27F7D7457a0198631e835a13d7be9a94812002"),
        description:
          "Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC auctions.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rifToMocPriceProvider" },
      },
      /**
       * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
       * protocol-owned proxy.
       */
      multicall2: {
        contractName: "Multicall2",
        address: address("0x8f344c3b2a02a801c24635f594c5652c8a2eb02a"),
        description:
          "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.multicall2" },
      },
      /** Mainnet-only. Mainnet-only legacy RDOC token accepted by the RDOC-to-USD-rif migrator. */
      onlyMainnetRdocToken: {
        contractName: "RDOC token",
        address: address("0x2d919f19d4892381d58edebeca66d5642cef1a1f"),
        description: "Mainnet-only. Mainnet-only legacy RDOC token accepted by the RDOC-to-USD-rif migrator.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.rdocToken" },
      },
      /**
       * Mainnet-only. Mainnet-only migrator that converts legacy RDOC into the current USD-rif
       * token.
       */
      onlyMainnetTokenMigrator: {
        contractName: "RDOC-to-USD-rif token migrator",
        address: address("0x4ac78a51f67bdbc9fcb813d041914b2de37e87d7"),
        description: "Mainnet-only. Mainnet-only migrator that converts legacy RDOC into the current USD-rif token.",
        source: { repository: "roc-sc-protocol-v2", field: "mainnet.tokenMigrator" },
      },
    },
    governance: {
      /** Stable governance VotingMachine proxy on which proposals are registered and voted. */
      votingMachine: {
        contractName: "Voting machine",
        address: address("0x65a5681bE95d212F0c90eAd40170D8277de81169"),
        description: "Stable governance VotingMachine proxy on which proposals are registered and voted.",
        source: { repository: "proposals-changers", field: "mainnet.votingMachine" },
      },
      /** Delegator authorized to upgrade the VotingMachine proxy after governance approval. */
      votingUpgradeDelegator: {
        contractName: "Voting upgrade delegator",
        address: address("0x131564703310a294C1bFDC09D10EC0659f18E253"),
        description: "Delegator authorized to upgrade the VotingMachine proxy after governance approval.",
        source: { repository: "proposals-changers", field: "mainnet.votingUpgradeDelegator" },
      },
      /**
       * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
       * an implementation address.
       */
      coiner: {
        contractName: "Coiner",
        address: address("0x661F7d510cdB40638f5Afd9f9dF8877398500593"),
        description:
          "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.",
        source: { repository: "proposals-changers", field: "mainnet.coiner" },
      },
    },
  },
  testnet: {
    moc: {
      /** Governance executor authorized to run approved protocol changes. */
      governor: {
        contractName: "Governor",
        address: address("0x7b716178771057195bB511f0B1F7198EEE62Bc22"),
        description: "Governance executor authorized to run approved protocol changes.",
        source: { repository: "main-RBTC-contract", field: "testnet.governor" },
      },
      /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
      oracleManager: {
        contractName: "Oracle manager",
        address: address("0x493eefbB8F0a22f85708c0C890E7B531E61A7018"),
        description: "Oracle manager coordinating coin pairs, oracle selection, and staking.",
        source: { repository: "main-RBTC-contract", field: "testnet.oracleManager" },
      },
      /** Governed registry of legacy MoC and shared flow contracts. */
      mocRegistry: {
        contractName: "Governed registry",
        address: address("0xf078375a3dD89dDF4D9dA460352199C6769b5f10"),
        description: "Governed registry of legacy MoC and shared flow contracts.",
        source: { repository: "main-RBTC-contract", field: "testnet.mocRegistry" },
      },
      /** Canonical MOC governance and fee token. */
      mocToken: {
        contractName: "MOC token",
        address: address("0x45a97b54021a3F99827641AFe1BFAE574431e6ab"),
        description: "Canonical MOC governance and fee token.",
        source: { repository: "main-RBTC-contract", field: "testnet.mocToken" },
      },
      /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
      docToken: {
        contractName: "DOC token",
        address: address("0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0"),
        description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.",
        source: { repository: "main-RBTC-contract", field: "testnet.docToken" },
      },
      /** Legacy MoC v1 state and pricing contract. */
      mocStateV1: {
        contractName: "MoC v1 state",
        address: address("0x0adb40132cB0ffcEf6ED81c26A1881e214100555"),
        description: "Legacy MoC v1 state and pricing contract.",
        source: { repository: "main-RBTC-contract", field: "testnet.mocStateV1" },
      },
      /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
      supporters: {
        contractName: "Oracle supporters",
        address: address("0x2Bb08e5DFb88477A88180Fbb7eF8196fbdea4Cd5"),
        description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.",
        source: { repository: "main-RBTC-contract", field: "testnet.supporters" },
      },
      /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
      foundation: {
        contractName: "Foundation account",
        address: address("0xf69287F5Ca3cC3C6d3981f2412109110cB8af076"),
        description: "Protocol foundation or treasury recipient used by fee-distribution contracts.",
        source: { repository: "main-RBTC-contract", field: "testnet.foundation" },
      },
      /**
       * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
       * maintenance.
       */
      tasksRunner: {
        contractName: "Oracle tasks runner",
        address: address("0x0E00baCDf5c6d6F51777998B4d7A660FD29e0fb6"),
        description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.",
        source: { repository: "main-RBTC-contract", field: "testnet.tasksRunner" },
      },
      /**
       * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
       * price.
       */
      docToRbtcPriceProvider: {
        contractName: "DOC/RBTC price provider",
        address: address("0x1d927673aFB57F82Af4a9CD94CCC5aA4915e0A13"),
        description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.",
        source: { repository: "main-RBTC-contract", field: "testnet.docToRbtcPriceProvider" },
      },
      /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
      rbtcToMocMocRewardsReverseAuction: {
        contractName: "RBTC-to-MOC rewards reverse auction",
        address: address("0x80bB8a52290bF85C4b500980dcDB3FF14Ab8C35e"),
        description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.",
        source: { repository: "main-RBTC-contract", field: "testnet.rbtcToMocMocRewardsReverseAuction" },
      },
      /** Stable proxy for the legacy Money on Chain v1 core protocol. */
      mocV1: {
        contractName: "MoC v1 core",
        address: address("0x2820f6d4D199B8D8838A4B26F9917754B86a0c1F"),
        description: "Stable proxy for the legacy Money on Chain v1 core protocol.",
        source: { repository: "main-RBTC-contract", field: "testnet.mocV1" },
      },
      /** Legacy MoC v1 interest-rate and commission contract. */
      mocInrateV1: {
        contractName: "MoC v1 interest and fees",
        address: address("0x76790f846FAAf44cf1B2D717d0A6c5f6f5152B60"),
        description: "Legacy MoC v1 interest-rate and commission contract.",
        source: { repository: "main-RBTC-contract", field: "testnet.mocInrateV1" },
      },
      /**
       * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
       * an implementation address.
       */
      coiner: {
        contractName: "Coiner",
        address: address("0x5b7071270C3FD3d99BE411baCb145b2fb47F0D0F"),
        description:
          "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.",
        source: { repository: "main-RBTC-contract", field: "testnet.coiner" },
      },
      /**
       * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
       * protocol-owned proxy.
       */
      multicall2: {
        contractName: "Multicall2",
        address: address("0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8"),
        description:
          "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.",
        source: { repository: "main-RBTC-contract", field: "testnet.multicall2" },
      },
      /**
       * Vendor account supplied by the MoC application so operations can be attributed for vendor
       * commissions.
       */
      vendor: {
        contractName: "MoC application vendor account",
        address: address("0xf69287F5Ca3cC3C6d3981f2412109110cB8af076"),
        description:
          "Vendor account supplied by the MoC application so operations can be attributed for vendor commissions.",
        source: { repository: "main-RBTC-contract", field: "testnet.vendor" },
      },
      /** Canonical Rootstock Name Service registry for this network. */
      rns: {
        contractName: "RNS registry",
        address: address("0x7d284aaac6e925aad802a53c0c69efe3764597b8"),
        description: "Canonical Rootstock Name Service registry for this network.",
        source: { repository: "main-RBTC-contract", field: "testnet.rns" },
      },
    },
    roc: {
      /** Governance executor authorized to run approved protocol changes. */
      governor: {
        contractName: "Governor",
        address: address("0x7b716178771057195bB511f0B1F7198EEE62Bc22"),
        description: "Governance executor authorized to run approved protocol changes.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.governor" },
      },
      /**
       * Administrative owner associated with the governor deployment; this is an account, not the
       * Governor contract.
       */
      governorOwner: {
        contractName: "Governor owner account",
        address: address("0x7d124cc0f59ada5793ad8eda9ed1836cb7e797a3"),
        description:
          "Administrative owner associated with the governor deployment; this is an account, not the Governor contract.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.governorOwner" },
      },
      /**
       * Funded account used by tests and operational simulations. Do not treat it as a protocol
       * contract.
       */
      holder: {
        contractName: "Test asset holder",
        address: address("0x5bCdf8A2E61BD238AEe43b99962Ee8BfBda1Beca"),
        description:
          "Funded account used by tests and operational simulations. Do not treat it as a protocol contract.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.holder" },
      },
      /** Oracle manager coordinating coin pairs, oracle selection, and staking. */
      oracleManager: {
        contractName: "Oracle manager",
        address: address("0x7b716178771057195bB511f0B1F7198EEE62Bc22"),
        description: "Oracle manager coordinating coin pairs, oracle selection, and staking.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.oracleManager" },
      },
      /** Governed registry of legacy MoC and shared flow contracts. */
      mocRegistry: {
        contractName: "Governed registry",
        address: address("0xf078375a3dD89dDF4D9dA460352199C6769b5f10"),
        description: "Governed registry of legacy MoC and shared flow contracts.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocRegistry" },
      },
      /**
       * Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral
       * buckets.
       */
      mocMultiCollateralGuard: {
        contractName: "Multi-collateral guard",
        address: address("0xBc3669954b4c513140294ECF9B7b540cf964f0a3"),
        description: "Stable proxy coordinating operations across the RIF-backed and DOC-backed collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocMultiCollateralGuard" },
      },
      /**
       * Legacy RoC core contract retained for integrations that still refer to the original core
       * deployment.
       */
      mocCore: {
        contractName: "Legacy RoC core",
        address: address("0xa416934264515bb381E3b746f10f22D5c6f9431a"),
        description:
          "Legacy RoC core contract retained for integrations that still refer to the original core deployment.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocCore" },
      },
      /** Canonical MOC governance and fee token. */
      mocToken: {
        contractName: "MOC token",
        address: address("0x45a97b54021a3F99827641AFe1BFAE574431e6ab"),
        description: "Canonical MOC governance and fee token.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocToken" },
      },
      /** Canonical RIF token used as collateral by the RIF-backed RoC bucket. */
      rifToken: {
        contractName: "RIF token",
        address: address("0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE"),
        description: "Canonical RIF token used as collateral by the RIF-backed RoC bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifToken" },
      },
      /** Current RIFPro collateral token used by the RIF-backed RoC bucket. */
      rifProToken: {
        contractName: "RIFPro token",
        address: address("0xAC29DFF7B9b237B569cBb1595860bba77e848771"),
        description: "Current RIFPro collateral token used by the RIF-backed RoC bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifProToken" },
      },
      /**
       * Testnet-only. Testnet-only legacy RIFPro token retained for testing the RIFPro migration
       * path.
       */
      onlyTestnetLegacyRifProToken: {
        contractName: "Legacy RIFPro token",
        address: address("0x23A1aA7b11e68beBE560a36beC04D1f79357f28d"),
        description: "Testnet-only. Testnet-only legacy RIFPro token retained for testing the RIFPro migration path.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.legacyRifProToken" },
      },
      /** Testnet-only. Testnet-only migrator used to exercise the legacy RIFPro migration path. */
      onlyTestnetRifProMigrator: {
        contractName: "RIFPro migrator",
        address: address("0x49bDFd00D1Af1B46a933f6583238e69f6B7d76e2"),
        description: "Testnet-only. Testnet-only migrator used to exercise the legacy RIFPro migration path.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifProMigrator" },
      },
      /** Canonical USD-rif pegged token used by RoC collateral buckets. */
      usdRifToken: {
        contractName: "USD-rif token",
        address: address("0x8dbf326e12a9fF37ED6DDF75adA548C2640A6482"),
        description: "Canonical USD-rif pegged token used by RoC collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.usdRifToken" },
      },
      /** Canonical DOC stable token shared by the legacy MoC and RoC integrations. */
      docToken: {
        contractName: "DOC token",
        address: address("0xCB46c0ddc60D18eFEB0E586C17Af6ea36452Dae0"),
        description: "Canonical DOC stable token shared by the legacy MoC and RoC integrations.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docToken" },
      },
      /**
       * Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable
       * token.
       */
      docProToken: {
        contractName: "DOC collateral token",
        address: address("0x5579764B323966CD11d3a0936A8c75bEC61BA7D0"),
        description: "Collateral token associated with the DOC-backed RoC bucket; it is not the DOC stable token.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docProToken" },
      },
      /** Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif. */
      rifBucket: {
        contractName: "RIF collateral bucket",
        address: address("0xa416934264515bb381E3b746f10f22D5c6f9431a"),
        description: "Stable proxy for the RIF-backed RoC collateral bucket whose pegged token is USD-rif.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifBucket" },
      },
      /**
       * RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the
       * stable bucket proxy.
       */
      docBucket: {
        contractName: "DOC collateral bucket",
        address: address("0xFc2aF3396D8DB9398f7cF704Fa5F78aBAbb79650"),
        description:
          "RoC multi-collateral bucket backed by DOC and serving USD-rif operations. This is the stable bucket proxy.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docBucket" },
      },
      /** Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls. */
      rifQueue: {
        contractName: "RIF operation queue",
        address: address("0x57672a34e92cA751148BcB303E5FE02E2E5F00Ed"),
        description: "Operation queue used by the RIF collateral bucket. Use the proxy address for queue calls.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifQueue" },
      },
      /** Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls. */
      docQueue: {
        contractName: "DOC operation queue",
        address: address("0x313E40047eb61Db80BE00135dd25F04eD7b2203b"),
        description: "Operation queue used by the DOC collateral bucket. Use the proxy address for queue calls.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docQueue" },
      },
      /** Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair. */
      rifUsdLegacyPriceProvider: {
        contractName: "Legacy RIF/USD price provider",
        address: address("0x963eF288380d8466c7509775FdF32EDF56edcD56"),
        description: "Legacy RIF/USD provider retained for contracts that have not moved to rifUsdCoinPair.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifUsdLegacyPriceProvider" },
      },
      /** Final provider quoting RIF in RBTC for protocol consumers. */
      rifToRbtcPriceProvider: {
        contractName: "RIF/RBTC price provider",
        address: address("0xE01Ff5527ffae7Bc2f722966CC9272bbBf9f3E27"),
        description: "Final provider quoting RIF in RBTC for protocol consumers.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifToRbtcPriceProvider" },
      },
      /**
       * Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral
       * buckets.
       */
      docToUsdRifPriceProvider: {
        contractName: "DOC/USD-rif price provider",
        address: address("0x640a1102700325e68193F0741E7DA5Fd213Fde24"),
        description:
          "Price provider quoting DOC in USD-rif for interactions between the DOC and RIF collateral buckets.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docToUsdRifPriceProvider" },
      },
      /**
       * Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC
       * price.
       */
      docToRbtcPriceProvider: {
        contractName: "DOC/RBTC price provider",
        address: address("0x1d927673aFB57F82Af4a9CD94CCC5aA4915e0A13"),
        description: "Price provider quoting DOC in RBTC. Use when a consumer explicitly requires a DOC/RBTC price.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docToRbtcPriceProvider" },
      },
      /**
       * Base provider used to derive a MOC/RIF price. Prefer the final directional provider when
       * one is available.
       */
      mocToRifBasePriceProvider: {
        contractName: "MOC/RIF base price provider",
        address: address("0x8DCE78BbD4D757EF7777Be113277cf5A35283b1E"),
        description:
          "Base provider used to derive a MOC/RIF price. Prefer the final directional provider when one is available.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocToRifBasePriceProvider" },
      },
      /**
       * Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final
       * quote.
       */
      rifToRbtcDivisorPriceProvider: {
        contractName: "RIF/RBTC divisor",
        address: address("0xbffBD993FF1d229B0FfE55668F2009d20d4F7C5f"),
        description:
          "Divisor input used to derive RIF/RBTC pricing. Prefer rifToRbtcPriceProvider for the final quote.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifToRbtcDivisorPriceProvider" },
      },
      /** Live version-2 splitter for fees produced by the DOC collateral bucket. */
      docCommissionSplitterV2: {
        contractName: "DOC commission splitter V2",
        address: address("0xCA58E6B68b349BAd86b5E405fF68fa15c88Df22C"),
        description: "Live version-2 splitter for fees produced by the DOC collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docCommissionSplitterV2" },
      },
      /** Reverse auction converting DOC into MOC for the RoC rewards flow. */
      docToMocRocRewardsReverseAuction: {
        contractName: "DOC-to-MOC RoC rewards reverse auction",
        address: address("0xBe950B0B03Fbc4205dc1E596c479F2Ef03cCA64f"),
        description: "Reverse auction converting DOC into MOC for the RoC rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.docToMocRocRewardsReverseAuction" },
      },
      /** Legacy MoC v1 state and pricing contract. */
      mocStateV1: {
        contractName: "MoC v1 state",
        address: address("0x0adb40132cB0ffcEf6ED81c26A1881e214100555"),
        description: "Legacy MoC v1 state and pricing contract.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocStateV1" },
      },
      /**
       * Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and
       * automation.
       */
      btcUsdCoinPair: {
        contractName: "BTC/USD CoinPairPrice",
        address: address("0x39192498FcF1dBE11653040bB49308E09A1056AC"),
        description:
          "Canonical decentralized BTC/USD oracle coin pair used by protocol price providers and automation.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.btcUsdCoinPair" },
      },
      /** Oracle Supporters proxy that accounts for stake and distributes oracle rewards. */
      supporters: {
        contractName: "Oracle supporters",
        address: address("0x2Bb08e5DFb88477A88180Fbb7eF8196fbdea4Cd5"),
        description: "Oracle Supporters proxy that accounts for stake and distributes oracle rewards.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.supporters" },
      },
      /** Protocol foundation or treasury recipient used by fee-distribution contracts. */
      foundation: {
        contractName: "Foundation account",
        address: address("0xf69287F5Ca3cC3C6d3981f2412109110cB8af076"),
        description: "Protocol foundation or treasury recipient used by fee-distribution contracts.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.foundation" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner1: {
        contractName: "Oracle owner 1",
        address: address("0xc256e64884be4f266c4f98f5e8e9f73486a7c829"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.oracleOwner1" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner2: {
        contractName: "Oracle owner 2",
        address: address("0x17f9fbb707fa50eb98d7ec32cfeda33d0924f1a1"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.oracleOwner2" },
      },
      /**
       * Known oracle-owner account used by the configured oracle network. This is an account, not
       * an oracle signing key.
       */
      oracleOwner3: {
        contractName: "Oracle owner 3",
        address: address("0xc9aacd76ff8a8c567cd947148cbfcc18c07b8b5c"),
        description:
          "Known oracle-owner account used by the configured oracle network. This is an account, not an oracle signing key.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.oracleOwner3" },
      },
      /** Live version-2 splitter for fees produced by the RIF collateral bucket. */
      rifCommissionSplitterV2: {
        contractName: "RIF commission splitter V2",
        address: address("0x499072990571C49Ef9369624885581b9C5aF0B11"),
        description: "Live version-2 splitter for fees produced by the RIF collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifCommissionSplitterV2" },
      },
      /** Live version-3 splitter for fees produced by the RIF collateral bucket. */
      rifCommissionSplitterV3: {
        contractName: "RIF commission splitter V3",
        address: address("0xD1FF3909dCa7C755F38e4FF04ce7170b4940d89B"),
        description: "Live version-3 splitter for fees produced by the RIF collateral bucket.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifCommissionSplitterV3" },
      },
      /** Live version-2 splitter for MOC-denominated commissions. */
      mocCommissionSplitterV2: {
        contractName: "MOC commission splitter V2",
        address: address("0xFA17f640d0E914B20CDDF985B269D2Dc16e0f767"),
        description: "Live version-2 splitter for MOC-denominated commissions.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocCommissionSplitterV2" },
      },
      /** Live version-3 splitter for MOC-denominated commissions. */
      mocCommissionSplitterV3: {
        contractName: "MOC commission splitter V3",
        address: address("0x0dee24D1ffb67fA751a58042F2C7a858FFb3F207"),
        description: "Live version-3 splitter for MOC-denominated commissions.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocCommissionSplitterV3" },
      },
      /** Buffer that accumulates RIFPro rewards before automated distribution. */
      rifProRewardsBuffer: {
        contractName: "RIFPro rewards buffer",
        address: address("0x1eDaDfd891793a5D1a011fFB82635C2Bbedc2511"),
        description: "Buffer that accumulates RIFPro rewards before automated distribution.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifProRewardsBuffer" },
      },
      /** Legacy buffer that accumulates ROCR rewards before automated distribution. */
      rocrRewardsBuffer: {
        contractName: "ROCR rewards buffer",
        address: address("0x6e364c96a83B72fe69843E50Fe08D09495AB0100"),
        description: "Legacy buffer that accumulates ROCR rewards before automated distribution.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rocrRewardsBuffer" },
      },
      /**
       * Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only
       * for the legacy BitPro reward flow.
       */
      bitProRewardsBuffer: {
        contractName: "BitPro rewards buffer",
        address: address("0xb998C3Da8D24295406d308ea42c85c8acDa880Ba"),
        description:
          "Legacy buffer that accumulates BitPro rewards before automated distribution. Use this only for the legacy BitPro reward flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.bitProRewardsBuffer" },
      },
      /**
       * Legacy buffer that accumulates BPro rewards before automated distribution. Use this only
       * for the legacy BPro reward flow.
       */
      bproRewardsBuffer: {
        contractName: "BPro rewards buffer",
        address: address("0xBBD8aFD5E7D3127D9Ee372D9AD2BC0B0af8af066"),
        description:
          "Legacy buffer that accumulates BPro rewards before automated distribution. Use this only for the legacy BPro reward flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.bproRewardsBuffer" },
      },
      /**
       * Buffer that receives MOC rewards before they are distributed through the automated rewards
       * flow.
       */
      mocRewardsBuffer: {
        contractName: "MOC rewards buffer",
        address: address("0x40d86d6ac67059bAe5ae42B6FCaB843c1c6af300"),
        description: "Buffer that receives MOC rewards before they are distributed through the automated rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocRewardsBuffer" },
      },
      /** Reverse auction converting RIF into MOC for the RoC rewards flow. */
      rifToMocRocRewardsReverseAuction: {
        contractName: "RIF-to-MOC RoC rewards reverse auction",
        address: address("0x55c888D946784fcc732dB1bB4A5b059C67aE5510"),
        description: "Reverse auction converting RIF into MOC for the RoC rewards flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifToMocRocRewardsReverseAuction" },
      },
      /** Reverse auction converting MOC into RIF for the RIF collateral-bucket flow. */
      mocToRifRifBucketReverseAuction: {
        contractName: "MOC-to-RIF bucket reverse auction",
        address: address("0x7461878FDe4144112f91DD6B913023563363bC80"),
        description: "Reverse auction converting MOC into RIF for the RIF collateral-bucket flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocToRifRifBucketReverseAuction" },
      },
      /** Reverse auction converting MOC into DOC for the DOC collateral-bucket flow. */
      mocToDocDocBucketReverseAuction: {
        contractName: "MOC-to-DOC bucket reverse auction",
        address: address("0x94199B751709c7e9a6AdeCBA5aA28de5BB1178D0"),
        description: "Reverse auction converting MOC into DOC for the DOC collateral-bucket flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocToDocDocBucketReverseAuction" },
      },
      /** Reverse auction converting RBTC into MOC for the MOC rewards buffer. */
      rbtcToMocMocRewardsReverseAuction: {
        contractName: "RBTC-to-MOC rewards reverse auction",
        address: address("0x80bB8a52290bF85C4b500980dcDB3FF14Ab8C35e"),
        description: "Reverse auction converting RBTC into MOC for the MOC rewards buffer.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rbtcToMocMocRewardsReverseAuction" },
      },
      /** Reverse auction converting MOC into RBTC for the legacy MoC v1 flow. */
      mocToRbtcMocV1ReverseAuction: {
        contractName: "MOC-to-RBTC MoC v1 reverse auction",
        address: address("0x0cC17FC424cC39E07CF774f2597d2778261cf6a8"),
        description: "Reverse auction converting MOC into RBTC for the legacy MoC v1 flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.mocToRbtcMocV1ReverseAuction" },
      },
      /**
       * Stable TasksRunner proxy used by selected oracles to execute scheduled protocol
       * maintenance.
       */
      tasksRunner: {
        contractName: "Oracle tasks runner",
        address: address("0x0E00baCDf5c6d6F51777998B4d7A660FD29e0fb6"),
        description: "Stable TasksRunner proxy used by selected oracles to execute scheduled protocol maintenance.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.tasksRunner" },
      },
      /** Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow. */
      rifUsdCoinPair: {
        contractName: "RIF/USD CoinPairPrice",
        address: address("0x45Eda601198Db28413fa7653300C52d5E4Db9b8b"),
        description: "Decentralized RIF/USD oracle coin pair introduced for the current RoC price flow.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifUsdCoinPair" },
      },
      /** Price provider quoting RBTC in MOC for RBTC-to-MOC auctions. */
      rbtcToMocPriceProvider: {
        contractName: "RBTC/MOC price provider",
        address: address("0x3C05F6193A2FBF9B6CF427C6CF1505Cf113eD417"),
        description: "Price provider quoting RBTC in MOC for RBTC-to-MOC auctions.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rbtcToMocPriceProvider" },
      },
      /**
       * Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC
       * auctions.
       */
      rifToMocPriceProvider: {
        contractName: "RIF/MOC price provider",
        address: address("0x169733DB88838a07061dB985dd52583170796F38"),
        description:
          "Final provider quoting RIF in MOC. This is the provider installed in the active RIF-to-MOC auctions.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.rifToMocPriceProvider" },
      },
      /**
       * Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a
       * protocol-owned proxy.
       */
      multicall2: {
        contractName: "Multicall2",
        address: address("0xaf7be1ef9537018feda5397d9e3bb9a1e4e27ac8"),
        description:
          "Shared Multicall2 deployment used to batch read-only calls. It is infrastructure, not a protocol-owned proxy.",
        source: { repository: "roc-sc-protocol-v2", field: "testnet.multicall2" },
      },
    },
    governance: {
      /** Stable governance VotingMachine proxy on which proposals are registered and voted. */
      votingMachine: {
        contractName: "Voting machine",
        address: address("0x7D124cC0f59aDA5793AD8edA9eD1836cB7e797a3"),
        description: "Stable governance VotingMachine proxy on which proposals are registered and voted.",
        source: { repository: "proposals-changers", field: "testnet.votingMachine" },
      },
      /** Delegator authorized to upgrade the VotingMachine proxy after governance approval. */
      votingUpgradeDelegator: {
        contractName: "Voting upgrade delegator",
        address: address("0x546afdf647d0b5c73323366b090ebe6c0c4d9b2c"),
        description: "Delegator authorized to upgrade the VotingMachine proxy after governance approval.",
        source: { repository: "proposals-changers", field: "testnet.votingUpgradeDelegator" },
      },
      /**
       * Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never
       * an implementation address.
       */
      coiner: {
        contractName: "Coiner",
        address: address("0x5b7071270C3FD3d99BE411baCb145b2fb47F0D0F"),
        description:
          "Stable Coiner proxy used by the shared reward-minting flow. Use the proxy address, never an implementation address.",
        source: { repository: "proposals-changers", field: "testnet.coiner" },
      },
    },
  },
} as const satisfies AddressBook;
