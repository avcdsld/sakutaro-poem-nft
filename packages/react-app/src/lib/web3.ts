import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";
import externalContracts from "../contracts/external_contracts";
import { networkId, rpc } from "./env";

export const injectedConnector = new InjectedConnector({});

const getAbis = () => {
  const contractAddress = externalContracts[networkId].contracts.nft.address;
  const contractAbi = externalContracts[networkId].contracts.nft.abi;
  return {
    contractAddress,
    contractAbi,
  };
};

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(rpc);

const getContract = (abi: any, address: string, signer?: ethers.Signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getNFTContract = (signer?: ethers.Signer) => {
  const { contractAddress, contractAbi } = getAbis();
  return getContract(contractAbi, contractAddress, signer);
};
