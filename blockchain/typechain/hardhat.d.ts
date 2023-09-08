/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "BalanceContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalanceContract__factory>;
    getContractFactory(
      name: "BigToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BigToken__factory>;
    getContractFactory(
      name: "GameContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameContract__factory>;
    getContractFactory(
      name: "TransferContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransferContract__factory>;
    getContractFactory(
      name: "GameContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GameContract__factory>;
    getContractFactory(
      name: "WinContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WinContract__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "BalanceContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalanceContract>;
    getContractAt(
      name: "BigToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BigToken>;
    getContractAt(
      name: "GameContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameContract>;
    getContractAt(
      name: "TransferContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransferContract>;
    getContractAt(
      name: "GameContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GameContract>;
    getContractAt(
      name: "WinContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WinContract>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
