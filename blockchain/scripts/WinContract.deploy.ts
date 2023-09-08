import { ethers } from 'hardhat';

async function main() {
    const GameContract = await ethers.getContractFactory("GameContract");
    const winAmount = ethers.utils.parseUnits("25", 18)
    const gameContract = await GameContract.deploy(
      "0x589ABDeb047a17de60cb1bc3cB510431B24E70cf",
      winAmount
    );

    await gameContract.deployed();
  
    console.log("Contrato desplegado en:", gameContract.address);
  }
  
main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});
  