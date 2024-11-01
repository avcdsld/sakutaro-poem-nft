import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-typechain";
import "hardhat-deploy";
import "solidity-coverage";

const privateKey = process.env.PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"; // this is to avoid hardhat error

module.exports = {
  solidity: "0.8.4",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    localhost: {
      timeout: 50000,
    },
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9",
      },
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9",
      accounts: [privateKey],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/7495501b681645b0b80f955d4139add9",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/7495501b681645b0b80f955d4139add9",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      accounts: [privateKey],
      gas: 12000000,
      gasPrice: 7000000000,
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 12000000000,
    },
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/6ae5bd1d600f40048725736711ef4acb",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    arbitrumtestnet: {
      url: "https://arbitrum-rinkeby.infura.io/v3/6ae5bd1d600f40048725736711ef4acb",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    shiden: {
      url: "https://rpc.shiden.astar.network:8545",
      accounts: [privateKey],
      gas: 13000000,
      gasPrice: 1000000000,
    },
    shibuya: {
      url: "https://rpc.shibuya.astar.network:8545",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 12000000000,
    },
    astar: {
      url: "https://rpc.astar.network:8545",
      accounts: [privateKey],
      gas: 13000000,
      gasPrice: 1000000000,
    },
    optimism: {
      url: "https://optimism-mainnet.infura.io/v3/6ae5bd1d600f40048725736711ef4acb",
      accounts: [privateKey],
      gas: 4000000,
      gasPrice: 1000000,
    },
    optimismtestnet: {
      url: "https://optimism-kovan.infura.io/v3/6ae5bd1d600f40048725736711ef4acb",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [privateKey],
      gas: 4000000,
      gasPrice: 25100000000,
    },
    avalanchetestnet: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [privateKey],
      gas: 21000000,
      gasPrice: 32000000000000,
    },
    filecoin: {
      url: "https://api.node.glif.io/rpc/v1",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    filecointestnet: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    soniemtestnet: {
      url: "https://rpc.minato.soneium.org",
      accounts: [privateKey],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
    customChains: [
      {
        network: "soniemtestnet",
        chainId: 1946,
        urls: {
          apiURL: "https://explorer-testnet.soneium.org/api/",
          browserURL: "https://explorer-testnet.soneium.org/",
        },
      },
    ],
  },
  mocha: {
    timeout: 50000,
  },
};
