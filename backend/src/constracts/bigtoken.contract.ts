import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { BigToken__factory } from '../../../blockchain/typechain/factories/BigToken__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getTokenContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_2!, provider);
  return new ethers.Contract(
    process.env.BIGTOKEN_CONTRACT_ADDRESS!,
    BigToken__factory.abi,
    wallet
  );
};
