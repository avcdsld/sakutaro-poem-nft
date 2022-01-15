import React from "react";

import { useWallet } from "../../hooks/useWallet";
import { useNFT } from "../../hooks/useContract";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { getNFTContract } from "../../lib/web3";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const MintButton: React.FC<{
  chainId: number;
  label: string;
  max: number;
  chainParams: any;
  jsonRpcProvider: any;
  explorerUrlPrefix?: string;
  openseaUrl?: string;
}> = (props) => {
  const [connectWallet, account, chainId] = useWallet();
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txHash, setTxHash] = React.useState(null);
  const nftContractWithSigner = useNFT(props.chainId);

  const connectWalletAndSwitchNetwork = async () => {
    await connectWallet();
    if (window.ethereum) {
      try {
        const chainId = props.chainParams.chainId;
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId }] });
      } catch (e: any) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        if (e.code === 4902) {
          window.ethereum.request({ method: "wallet_addEthereumChain", params: [props.chainParams] });
        }
      }
    }
  };

  const mint = async () => {
    try {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId !== props.chainParams.chainId) {
          alert("Switch your network to " + props.chainParams.chainName);
          return;
        }
      }

      setLoading(true);
      const tx = await nftContractWithSigner.mint(account, {});
      setTxHash(tx.hash);
      alert("NFT mining has been started!");
      await tx.wait();
      setLoading(false);
    } catch (e: any) {
      if (e.code !== 4001) {
        alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      }
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const nftContract = getNFTContract(props.chainId, props.jsonRpcProvider);
    nftContract
      .totalSupply()
      .then((supply: number) => {
        setTotalNumber(supply.toString());
      })
      .catch((e: any) => {
        console.log(e);
      });
  });

  return (
    <>
      <div>
        <Text align="center" color="white" weight="bold">
          {props.label}
        </Text>

        {Number(totalNumber) >= Number(props.max) ? (
          <div className="m-auto p-4">
            <Text align="center" color="light-gray" className="mt-3 mb-3">
              Sold Out
            </Text>
          </div>
        ) : (
          <>
            <div className="m-auto p-4">
              {chainId !== props.chainId ? (
                <Button onClick={connectWalletAndSwitchNetwork} color="red" rounded={true}>
                  Connect Wallet
                </Button>
              ) : (
                <Button onClick={mint} color="red" rounded={true} disabled={isLoading}>
                  {isLoading ? "sending.." : "Mint"}
                </Button>
              )}
              {txHash ? (
                <>
                  <div className="mt-5">
                    {props.explorerUrlPrefix ? (
                      <a href={props.explorerUrlPrefix + txHash} target="_blank" rel="noreferrer">
                        <Text align="center" className="underline" color="white">
                          View Tx
                        </Text>
                      </a>
                    ) : (
                      <Text align="center" className="underline" color="white">
                        {txHash}
                      </Text>
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}

        <div style={{ textAlign: "center", fontSize: "0.9em" }} className="flex items-center justify-center mb-10">
          <Text align="center" color="white">
            {totalNumber} / {props.max} minted
          </Text>
          {props.openseaUrl ? (
            <a href={props.openseaUrl} target="_blank" rel="noreferrer">
              <img className="ml-2" width="20px" src="/assets/opensea-logo.png" alt="View on OpenSea" />
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};
