import { ethers } from "hardhat";

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const provider = new ethers.providers.JsonRpcProvider("https://canto.slingshot.finance")

  // uint256 _unlockCliff, uint256 _unlockPeriod, uint8 _unlockPercent, uint8 _teamSplit, address _teamAddress
  const minter = await ethers.getContractFactory("Cantofornia");
  const args = [12, 13, 14, 15, ethers.Wallet.createRandom().address];
  const contract = await minter.deploy(12, 13, 14, 15, ethers.Wallet.createRandom().address);

  await contract.deployed();

  console.log(`Minter with params ${args} deployed to ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
