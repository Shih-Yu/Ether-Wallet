const path = require("path");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, //Ganache GUI
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.RINKEBY_URL);
      },
      network_id: '4',
    },
    mumbai: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.MUMBAI_URL);
      },
      network_id: '80001',
    },
  compilers: {
    solc: {
      version: "^0.8.3"
    }
  }
};
