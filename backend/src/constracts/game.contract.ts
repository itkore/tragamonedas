import dotenv from 'dotenv';
import { ethers } from 'ethers';
import { GameContract__factory } from '../../../blockchain/typechain/factories/GameContract__factory';
import { BlockchainUrlsEnum } from './urls';

dotenv.config();

export const getGameContract = (
  url: BlockchainUrlsEnum = BlockchainUrlsEnum.POLYGON_MUMBAI
) => {
  const provider = new ethers.JsonRpcProvider(url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY_2!, provider);
  return new ethers.Contract(
    process.env.GAME_CONTRACT_ADDRESS!,
    GameContract__factory.abi,
    wallet
  );
};
