const Web3   = require("web3");
var HDWalletProvider = require("truffle-hdwallet-provider");

exports.local = () => {
  return new Web3("http://localhost:8545")
}

exports.testnet = () => {
  return new Web3("http://a6defc6f3f20111e7844f068e5716195-1654545296.eu-west-1.elb.amazonaws.com:8545")
}

exports.ropsten = () => {
 // return new Web3( new HDWalletProvider("pony aim olive task wealth tip run review trust equal foster addict", "https://ropsten.infura.io/9IRoVfJ'8a3}osx") )
 return new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/9IRoVfJ'8a3}osx"));
}

exports.mainNet = () => {
  new HDWalletProvider("pony aim olive task wealth tip run review trust equal foster addict", "https://Mainnet.infura.io/9IRoVfJ'8a3}osx")
}

