"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenContract = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const ethers_1 = require("ethers");
const BigToken__factory_1 = require("../../../blockchain/typechain/factories/BigToken__factory");
const urls_1 = require("./urls");
dotenv_1.default.config();
const getTokenContract = (url = urls_1.BlockchainUrlsEnum.POLYGON_MUMBAI) => {
    const provider = new ethers_1.ethers.JsonRpcProvider(url);
    const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY_2, provider);
    return new ethers_1.ethers.Contract(process.env.BIGTOKEN_CONTRACT_ADDRESS, BigToken__factory_1.BigToken__factory.abi, wallet);
};
exports.getTokenContract = getTokenContract;
