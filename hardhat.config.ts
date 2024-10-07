import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          metadata: {
            // Not including the metadata hash
            // https://github.com/paulrberg/hardhat-template/issues/31
            bytecodeHash: "none",
          },
          // Disable the optimizer when debugging
          // https://hardhat.org/hardhat-network/#solidity-optimizer-support
          optimizer: {enabled: true, runs: 10000},
          viaIR: true
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      "mirai": "mirai",
      'bscTestnet': process.env.BSCSCAN_TEST_API_KEY ?? "",
    },
    customChains: [
      {
        network: "mirai",
        chainId: 2195,
        urls: {
          apiURL: "https://verify.miraiscan.io/v1/contract",
          browserURL: "https://miraiscan.io",
        }
      }
    ]
  },
  networks: {
    'mirai': {
      url: "https://rpc1-testnet.miraichain.io/",
      accounts: ["private key"],
    },

    'bscTestnet': {
      url: "https://bsc-testnet.blockpi.network/v1/rpc/public	",
      accounts: ["private key"],
    }
  },
};

export default config;