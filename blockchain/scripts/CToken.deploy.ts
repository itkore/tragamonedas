import { ethers } from 'hardhat';

async function main() {
  const CToken = await ethers.getContractFactory('CTOKToken');
  const initialSupply = ethers.utils.parseUnits('2000', 18);
  const ctoken = await CToken.deploy(initialSupply);

  await ctoken.deployed();

  console.log('Greeter deployed to:', ctoken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});