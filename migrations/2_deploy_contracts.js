const HelloWorld = artifacts.require("HelloWorld");
const initMessage = "Hello world Liam!"

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, initMessage);
};
