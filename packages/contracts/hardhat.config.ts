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
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
  mocha: {
    timeout: 50000,
  },
};
