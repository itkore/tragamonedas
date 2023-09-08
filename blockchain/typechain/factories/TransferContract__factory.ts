/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransferContract,
  TransferContractInterface,
} from "../TransferContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "playerWins",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161068a38038061068a833981810160405281019061003291906100ce565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610140565b6000815190506100c881610129565b92915050565b6000602082840312156100e057600080fd5b60006100ee848285016100b9565b91505092915050565b600061010282610109565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610132816100f7565b811461013d57600080fd5b50565b61053b8061014f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806355a373d6146100465780638b31fb89146100645780638da5cb5b14610080575b600080fd5b61004e61009e565b60405161005b919061039b565b60405180910390f35b61007e60048036038101906100799190610292565b6100c4565b005b610088610244565b6040516100959190610357565b60405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610152576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610149906103d6565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8260196040518363ffffffff1660e01b81526004016101b0929190610372565b602060405180830381600087803b1580156101ca57600080fd5b505af11580156101de573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020291906102bb565b610241576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610238906103b6565b60405180910390fd5b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600081359050610277816104d7565b92915050565b60008151905061028c816104ee565b92915050565b6000602082840312156102a457600080fd5b60006102b284828501610268565b91505092915050565b6000602082840312156102cd57600080fd5b60006102db8482850161027d565b91505092915050565b6102ed81610407565b82525050565b6102fc8161044f565b82525050565b61030b81610473565b82525050565b600061031e600f836103f6565b915061032982610485565b602082019050919050565b60006103416020836103f6565b915061034c826104ae565b602082019050919050565b600060208201905061036c60008301846102e4565b92915050565b600060408201905061038760008301856102e4565b6103946020830184610302565b9392505050565b60006020820190506103b060008301846102f3565b92915050565b600060208201905081810360008301526103cf81610311565b9050919050565b600060208201905081810360008301526103ef81610334565b9050919050565b600082825260208201905092915050565b600061041282610425565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061045a82610461565b9050919050565b600061046c82610425565b9050919050565b600061047e82610445565b9050919050565b7f5472616e73666572206661696c65640000000000000000000000000000000000600082015250565b7f4f6e6c7920746865206f776e65722063616e206465636c61726520612077696e600082015250565b6104e081610407565b81146104eb57600080fd5b50565b6104f781610419565b811461050257600080fd5b5056fea2646970667358221220605bdae2a6558a97aea7a66657c94b80d153bdd995336c44ea561c79e2789f4264736f6c63430008040033";

export class TransferContract__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _tokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TransferContract> {
    return super.deploy(
      _tokenContract,
      overrides || {}
    ) as Promise<TransferContract>;
  }
  getDeployTransaction(
    _tokenContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_tokenContract, overrides || {});
  }
  attach(address: string): TransferContract {
    return super.attach(address) as TransferContract;
  }
  connect(signer: Signer): TransferContract__factory {
    return super.connect(signer) as TransferContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferContractInterface {
    return new utils.Interface(_abi) as TransferContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferContract {
    return new Contract(address, _abi, signerOrProvider) as TransferContract;
  }
}
