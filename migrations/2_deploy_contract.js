var SampleToken = artifacts.require("NewToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "My New Token", "MNT", 2000000);
};