import { useMemo } from "react";

import { getNFTContract } from "../lib/web3";
import useActiveWeb3React from "./useActiveWeb3";

export const useNFT = (chainId: number) => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getNFTContract(chainId, library?.getSigner()), [library, chainId]);
};
