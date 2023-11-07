/* eslint-disable no-unused-vars */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
// eslint-disable-next-line no-unused-vars
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// eslint-disable-next-line no-undef
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      
      url: "https://eth-goerli.g.alchemy.com/v2/l6OLWCN0LxkjjKQsCruaMJkmgJI3c8e4",
      accounts: [ "0x610aFa8c2Eef5b6786F74c83f1b42C508532596a" ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};