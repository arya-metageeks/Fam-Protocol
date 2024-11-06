const hre = require("hardhat");
const feeRecipient = "0x2Ba1Bf6aB49c0d86CDb12D69A777B6dF39AB79D9";

async function main() {
  const { ethers } = hre; // Destructure ethers from hre
  
  // Rest of your code remains the same
  const DomainContract = await ethers.getContractFactory("FamDomainMintingV1");
  const domainContract = await DomainContract.deploy();

  const domainContractAddress = await domainContract.getAddress();
  console.log(`DomainContract Address: ${domainContractAddress}`);

  await domainContract.initialize(feeRecipient, feeRecipient);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});