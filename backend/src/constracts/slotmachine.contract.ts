// import dotenv from 'dotenv';
// import { ethers } from 'ethers';
// import { SlotMachine__factory } from '../../../blockchain/typechain/factories/SlotMachine__factory';
// import { BlockchainUrlsEnum } from './urls';

// dotenv.config();

// export const getSlotMachineContract = (
//   url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
// ) => {
//   const provider = new ethers.JsonRpcProvider(url);
//   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
//   return new ethers.Contract(
//     process.env.SLOTMACHINE_CONTRACT_ADDRESS!,
//     SlotMachine__factory.abi,
//     wallet
//   );
// };
