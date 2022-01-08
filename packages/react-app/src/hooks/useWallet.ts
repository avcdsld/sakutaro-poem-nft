import { useWeb3React } from "@web3-react/core";
import { injectedConnector } from "../lib/web3";

export const useWallet = () => {
  const context = useWeb3React();

  const { activate, account, library } = context;

  const connectWallet = () => {
    activate(injectedConnector);
  };

  return [connectWallet, account, library];
};
