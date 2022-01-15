/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SakutaroPoem } from "./SakutaroPoem";

export class SakutaroPoemFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _tokenURIContractAddress: string,
    overrides?: Overrides
  ): Promise<SakutaroPoem> {
    return super.deploy(
      _tokenURIContractAddress,
      overrides || {}
    ) as Promise<SakutaroPoem>;
  }
  getDeployTransaction(
    _tokenURIContractAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _tokenURIContractAddress,
      overrides || {}
    );
  }
  attach(address: string): SakutaroPoem {
    return super.attach(address) as SakutaroPoem;
  }
  connect(signer: Signer): SakutaroPoemFactory {
    return super.connect(signer) as SakutaroPoemFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SakutaroPoem {
    return new Contract(address, _abi, signerOrProvider) as SakutaroPoem;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenURIContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxElements",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "modulo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "royaltyReceiver",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "secondarySaleRoyalty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenURIContractAddress",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620035fa380380620035fa83398181016040528101906200003791906200043d565b6040518060400160405280600d81526020017f53616b757261746f20506f656d000000000000000000000000000000000000008152506040518060400160405280600481526020017f53414b55000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb92919062000376565b508060019080519060200190620000d492919062000376565b505050620000f7620000eb620001cf60201b60201c565b620001d760201b60201c565b6200010f6380ac58cd60e01b6200029d60201b60201c565b62000127635b5e139f60e01b6200029d60201b60201c565b6200013f632a55205a60e01b6200029d60201b60201c565b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555042600c81905550506200059f565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000309576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003009062000490565b60405180910390fd5b600160086000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8280546200038490620004f7565b90600052602060002090601f016020900481019282620003a85760008555620003f4565b82601f10620003c357805160ff1916838001178555620003f4565b82800160010185558215620003f4579182015b82811115620003f3578251825591602001919060010190620003d6565b5b50905062000403919062000407565b5090565b5b808211156200042257600081600090555060010162000408565b5090565b600081519050620004378162000585565b92915050565b6000602082840312156200045057600080fd5b6000620004608482850162000426565b91505092915050565b600062000478601c83620004b2565b915062000485826200055c565b602082019050919050565b60006020820190508181036000830152620004ab8162000469565b9050919050565b600082825260208201905092915050565b6000620004d082620004d7565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200051057607f821691505b602082108114156200052757620005266200052d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4552433136353a20696e76616c696420696e7465726661636520696400000000600082015250565b6200059081620004c3565b81146200059c57600080fd5b50565b61304b80620005af6000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c806363f204d0116100de5780639fbc871311610097578063c87b56dd11610071578063c87b56dd14610427578063d9cc188614610457578063e985e9c514610475578063f2fde38b146104a557610173565b80639fbc8713146103d1578063a22cb465146103ef578063b88d4fde1461040b57610173565b806363f204d0146103215780636a6278421461033f57806370a082311461035b578063715018a61461038b5780638da5cb5b1461039557806395d89b41146103b357610173565b80632974526211610130578063297452621461024c5780632a55205a1461026a57806342842e0e1461029b57806342966c68146102b7578063558fa0f5146102d35780636352211e146102f157610173565b806301ffc9a71461017857806306fdde03146101a8578063081812fc146101c6578063095ea7b3146101f657806318160ddd1461021257806323b872dd14610230575b600080fd5b610192600480360381019061018d9190612035565b6104c1565b60405161019f91906124af565b60405180910390f35b6101b06104d3565b6040516101bd91906124ca565b60405180910390f35b6101e060048036038101906101db91906120c8565b610565565b6040516101ed919061241f565b60405180910390f35b610210600480360381019061020b9190611ff9565b6105ea565b005b61021a610702565b604051610227919061270c565b60405180910390f35b61024a60048036038101906102459190611ef3565b610713565b005b610254610773565b604051610261919061270c565b60405180910390f35b610284600480360381019061027f91906120f1565b61077a565b604051610292929190612486565b60405180910390f35b6102b560048036038101906102b09190611ef3565b6107c8565b005b6102d160048036038101906102cc91906120c8565b6107e8565b005b6102db610844565b6040516102e8919061270c565b60405180910390f35b61030b600480360381019061030691906120c8565b610849565b604051610318919061241f565b60405180910390f35b6103296108fb565b604051610336919061270c565b60405180910390f35b61035960048036038101906103549190611e8e565b610902565b005b61037560048036038101906103709190611e8e565b610974565b604051610382919061270c565b60405180910390f35b610393610a2c565b005b61039d610ab4565b6040516103aa919061241f565b60405180910390f35b6103bb610ade565b6040516103c891906124ca565b60405180910390f35b6103d9610b70565b6040516103e6919061241f565b60405180910390f35b61040960048036038101906104049190611fbd565b610b96565b005b61042560048036038101906104209190611f42565b610d17565b005b610441600480360381019061043c91906120c8565b610d79565b60405161044e91906124ca565b60405180910390f35b61045f610e6f565b60405161046c919061241f565b60405180910390f35b61048f600480360381019061048a9190611eb7565b610e95565b60405161049c91906124af565b60405180910390f35b6104bf60048036038101906104ba9190611e8e565b610f29565b005b60006104cc82611021565b9050919050565b6060600080546104e2906129b1565b80601f016020809104026020016040519081016040528092919081815260200182805461050e906129b1565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050905090565b600061057082611099565b6105af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a69061264c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105f582610849565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065d906126ac565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610685611105565b73ffffffffffffffffffffffffffffffffffffffff1614806106b457506106b3816106ae611105565b610e95565b5b6106f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ea906125cc565b60405180910390fd5b6106fd838361110d565b505050565b600061070e60096111c6565b905090565b61072461071e611105565b826111d4565b610763576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075a906126cc565b60405180910390fd5b61076e8383836112b2565b505050565b6298968081565b600080600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150620f424062989680846107b5919061283c565b6107bf919061286d565b90509250929050565b6107e383838360405180602001604052806000815250610d17565b505050565b6107f96107f3611105565b826111d4565b610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f906126ec565b60405180910390fd5b6108418161150e565b50565b602781565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e99061260c565b60405180910390fd5b80915050919050565b620f424081565b602761090e60096111c6565b1061094e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610945906125ac565b60405180910390fd5b610958600961151a565b600061096460096111c6565b90506109708282611530565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109dc906125ec565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a34611105565b73ffffffffffffffffffffffffffffffffffffffff16610a52610ab4565b73ffffffffffffffffffffffffffffffffffffffff1614610aa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9f9061266c565b60405180910390fd5b610ab2600061154e565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610aed906129b1565b80601f0160208091040260200160405190810160405280929190818152602001828054610b19906129b1565b8015610b665780601f10610b3b57610100808354040283529160200191610b66565b820191906000526020600020905b815481529060010190602001808311610b4957829003601f168201915b5050505050905090565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b9e611105565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c039061256c565b60405180910390fd5b8060056000610c19611105565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610cc6611105565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610d0b91906124af565b60405180910390a35050565b610d28610d22611105565b836111d4565b610d67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5e906126cc565b60405180910390fd5b610d7384848484611614565b50505050565b606060006027600c54610d8b85610849565b73ffffffffffffffffffffffffffffffffffffffff16610dab91906127e6565b610db59190612a14565b9050600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c87b56dd826040518263ffffffff1660e01b8152600401610e12919061270c565b60006040518083038186803b158015610e2a57600080fd5b505afa158015610e3e573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190610e679190612087565b915050919050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610f31611105565b73ffffffffffffffffffffffffffffffffffffffff16610f4f610ab4565b73ffffffffffffffffffffffffffffffffffffffff1614610fa5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9c9061266c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611015576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100c9061250c565b60405180910390fd5b61101e8161154e565b50565b600061102c82611670565b80611092575060086000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff165b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661118083610849565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600081600001549050919050565b60006111df82611099565b61121e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112159061258c565b60405180910390fd5b600061122983610849565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061129857508373ffffffffffffffffffffffffffffffffffffffff1661128084610565565b73ffffffffffffffffffffffffffffffffffffffff16145b806112a957506112a88185610e95565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166112d282610849565b73ffffffffffffffffffffffffffffffffffffffff1614611328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161131f9061268c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161138f9061254c565b60405180910390fd5b6113a3838383611752565b6113ae60008261110d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113fe91906128c7565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461145591906127e6565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b61151781611757565b50565b6001816000016000828254019250508190555050565b61154a8282604051806020016040528060008152506117aa565b5050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61161f8484846112b2565b61162b84848484611805565b61166a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611661906124ec565b60405180910390fd5b50505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061173b57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061174b575061174a8261199c565b5b9050919050565b505050565b61176081611a06565b6000600660008381526020019081526020016000208054611780906129b1565b9050146117a7576006600082815260200190815260200160002060006117a69190611cf8565b5b50565b6117b48383611b17565b6117c16000848484611805565b611800576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117f7906124ec565b60405180910390fd5b505050565b60006118268473ffffffffffffffffffffffffffffffffffffffff16611ce5565b1561198f578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261184f611105565b8786866040518563ffffffff1660e01b8152600401611871949392919061243a565b602060405180830381600087803b15801561188b57600080fd5b505af19250505080156118bc57506040513d601f19601f820116820180604052508101906118b9919061205e565b60015b61193f573d80600081146118ec576040519150601f19603f3d011682016040523d82523d6000602084013e6118f1565b606091505b50600081511415611937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161192e906124ec565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611994565b600190505b949350505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6000611a1182610849565b9050611a1f81600084611752565b611a2a60008361110d565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611a7a91906128c7565b925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b7e9061262c565b60405180910390fd5b611b9081611099565b15611bd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bc79061252c565b60405180910390fd5b611bdc60008383611752565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611c2c91906127e6565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b508054611d04906129b1565b6000825580601f10611d165750611d35565b601f016020900490600052602060002090810190611d349190611d38565b5b50565b5b80821115611d51576000816000905550600101611d39565b5090565b6000611d68611d638461274c565b612727565b905082815260208101848484011115611d8057600080fd5b611d8b84828561296f565b509392505050565b6000611da6611da18461277d565b612727565b905082815260208101848484011115611dbe57600080fd5b611dc984828561297e565b509392505050565b600081359050611de081612fb9565b92915050565b600081359050611df581612fd0565b92915050565b600081359050611e0a81612fe7565b92915050565b600081519050611e1f81612fe7565b92915050565b600082601f830112611e3657600080fd5b8135611e46848260208601611d55565b91505092915050565b600082601f830112611e6057600080fd5b8151611e70848260208601611d93565b91505092915050565b600081359050611e8881612ffe565b92915050565b600060208284031215611ea057600080fd5b6000611eae84828501611dd1565b91505092915050565b60008060408385031215611eca57600080fd5b6000611ed885828601611dd1565b9250506020611ee985828601611dd1565b9150509250929050565b600080600060608486031215611f0857600080fd5b6000611f1686828701611dd1565b9350506020611f2786828701611dd1565b9250506040611f3886828701611e79565b9150509250925092565b60008060008060808587031215611f5857600080fd5b6000611f6687828801611dd1565b9450506020611f7787828801611dd1565b9350506040611f8887828801611e79565b925050606085013567ffffffffffffffff811115611fa557600080fd5b611fb187828801611e25565b91505092959194509250565b60008060408385031215611fd057600080fd5b6000611fde85828601611dd1565b9250506020611fef85828601611de6565b9150509250929050565b6000806040838503121561200c57600080fd5b600061201a85828601611dd1565b925050602061202b85828601611e79565b9150509250929050565b60006020828403121561204757600080fd5b600061205584828501611dfb565b91505092915050565b60006020828403121561207057600080fd5b600061207e84828501611e10565b91505092915050565b60006020828403121561209957600080fd5b600082015167ffffffffffffffff8111156120b357600080fd5b6120bf84828501611e4f565b91505092915050565b6000602082840312156120da57600080fd5b60006120e884828501611e79565b91505092915050565b6000806040838503121561210457600080fd5b600061211285828601611e79565b925050602061212385828601611e79565b9150509250929050565b612136816128fb565b82525050565b6121458161290d565b82525050565b6000612156826127ae565b61216081856127c4565b935061217081856020860161297e565b61217981612b01565b840191505092915050565b600061218f826127b9565b61219981856127d5565b93506121a981856020860161297e565b6121b281612b01565b840191505092915050565b60006121ca6032836127d5565b91506121d582612b12565b604082019050919050565b60006121ed6026836127d5565b91506121f882612b61565b604082019050919050565b6000612210601c836127d5565b915061221b82612bb0565b602082019050919050565b60006122336024836127d5565b915061223e82612bd9565b604082019050919050565b60006122566019836127d5565b915061226182612c28565b602082019050919050565b6000612279602c836127d5565b915061228482612c51565b604082019050919050565b600061229c6024836127d5565b91506122a782612ca0565b604082019050919050565b60006122bf6038836127d5565b91506122ca82612cef565b604082019050919050565b60006122e2602a836127d5565b91506122ed82612d3e565b604082019050919050565b60006123056029836127d5565b915061231082612d8d565b604082019050919050565b60006123286020836127d5565b915061233382612ddc565b602082019050919050565b600061234b602c836127d5565b915061235682612e05565b604082019050919050565b600061236e6020836127d5565b915061237982612e54565b602082019050919050565b60006123916029836127d5565b915061239c82612e7d565b604082019050919050565b60006123b46021836127d5565b91506123bf82612ecc565b604082019050919050565b60006123d76031836127d5565b91506123e282612f1b565b604082019050919050565b60006123fa6030836127d5565b915061240582612f6a565b604082019050919050565b61241981612965565b82525050565b6000602082019050612434600083018461212d565b92915050565b600060808201905061244f600083018761212d565b61245c602083018661212d565b6124696040830185612410565b818103606083015261247b818461214b565b905095945050505050565b600060408201905061249b600083018561212d565b6124a86020830184612410565b9392505050565b60006020820190506124c4600083018461213c565b92915050565b600060208201905081810360008301526124e48184612184565b905092915050565b60006020820190508181036000830152612505816121bd565b9050919050565b60006020820190508181036000830152612525816121e0565b9050919050565b6000602082019050818103600083015261254581612203565b9050919050565b6000602082019050818103600083015261256581612226565b9050919050565b6000602082019050818103600083015261258581612249565b9050919050565b600060208201905081810360008301526125a58161226c565b9050919050565b600060208201905081810360008301526125c58161228f565b9050919050565b600060208201905081810360008301526125e5816122b2565b9050919050565b60006020820190508181036000830152612605816122d5565b9050919050565b60006020820190508181036000830152612625816122f8565b9050919050565b600060208201905081810360008301526126458161231b565b9050919050565b600060208201905081810360008301526126658161233e565b9050919050565b6000602082019050818103600083015261268581612361565b9050919050565b600060208201905081810360008301526126a581612384565b9050919050565b600060208201905081810360008301526126c5816123a7565b9050919050565b600060208201905081810360008301526126e5816123ca565b9050919050565b60006020820190508181036000830152612705816123ed565b9050919050565b60006020820190506127216000830184612410565b92915050565b6000612731612742565b905061273d82826129e3565b919050565b6000604051905090565b600067ffffffffffffffff82111561276757612766612ad2565b5b61277082612b01565b9050602081019050919050565b600067ffffffffffffffff82111561279857612797612ad2565b5b6127a182612b01565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60006127f182612965565b91506127fc83612965565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561283157612830612a45565b5b828201905092915050565b600061284782612965565b915061285283612965565b92508261286257612861612a74565b5b828204905092915050565b600061287882612965565b915061288383612965565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156128bc576128bb612a45565b5b828202905092915050565b60006128d282612965565b91506128dd83612965565b9250828210156128f0576128ef612a45565b5b828203905092915050565b600061290682612945565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561299c578082015181840152602081019050612981565b838111156129ab576000848401525b50505050565b600060028204905060018216806129c957607f821691505b602082108114156129dd576129dc612aa3565b5b50919050565b6129ec82612b01565b810181811067ffffffffffffffff82111715612a0b57612a0a612ad2565b5b80604052505050565b6000612a1f82612965565b9150612a2a83612965565b925082612a3a57612a39612a74565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4d696e7420776f756c6420657863656564206d617820737570706c79206f662060008201527f4e46547300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b7f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000602082015250565b612fc2816128fb565b8114612fcd57600080fd5b50565b612fd98161290d565b8114612fe457600080fd5b50565b612ff081612919565b8114612ffb57600080fd5b50565b61300781612965565b811461301257600080fd5b5056fea26469706673582212203e98a37607e6f4ba2ee05fb298e14627e6dcd3f016987ae1ff4cb22d4badb3ad64736f6c63430008040033";
