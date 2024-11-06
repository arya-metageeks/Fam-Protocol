require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",  // Use your solidity version
  networks: {
    arbitrumTestnet: {
      url: process.env.ARBITRUM_TESTNET_RPC,  // Your Arbitrum testnet RPC URL
      accounts: [process.env.MASTER_PRIVATE_KEY],     // Your deployment wallet private key
      chainId: 421614                         // Arbitrum Goerli chainId
    }
  }
};