// var NFTMarketplace = artifacts.require("NFTMarketplace");
// module.exports = function(deployer) {
//     deployer.deploy(NFTMarketplace);
// };

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const NFTMarketplace = artifacts.require('NFTMarketplaceUpgradable');

module.exports = async function (deployer, network, accounts) {
    // const rootAdmin = accounts[0];
  await deployProxy(NFTMarketplace, ["Nuqtah", "NQTH", "https://gateway.pinata.cloud/ipfs/", "0xb66f69dbb6647735ef4cfc1d7741db49bb04e98f"], { deployer });
};