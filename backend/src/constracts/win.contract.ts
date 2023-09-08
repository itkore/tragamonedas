import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { WinContract__factory } from '../../../blockchain/typechain/factories/WinContract__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getWinContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  return new ethers.Contract(
    process.env.WIN_CONTRACT_ADDRESS!,
    WinContract__factory.abi,
    wallet
  );
};
