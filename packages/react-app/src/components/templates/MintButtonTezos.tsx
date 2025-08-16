import React from "react";

import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "react-hooks-use-modal";
import { TezosToolkit } from "@taquito/taquito";
import { Tzip12Module } from "@taquito/tzip12";
// import { tzip12 } from "@taquito/tzip12";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { BigNumber } from "bignumber.js";
// const svg64 = require("svg64");

export const MintButtonTezos: React.FC<{
  label: string;
  max: number;
  network: string;
  explorerUrlPrefix: string;
  otherMarketUrl?: string;
  externalUrl?: string;
}> = (props) => {
  const [account, setAccount] = React.useState<null | { address: string }>(null);
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txId, setTxId] = React.useState("");
  const [Modal] = useModal("root", { preventScroll: true });
  const [svgBase64] = React.useState("");

  const Tezos = new TezosToolkit(
    // rpc nodes: https://tezostaquito.io/docs/rpc_nodes
    props.network === "mainnet" ? "	https://rpc.tzbeta.net/" : "https://ghostnet.ecadinfra.com"
  );
  Tezos.addExtension(new Tzip12Module());
  const wallet = new BeaconWallet({ name: "Sakutaro Poem NFT" });
  Tezos.setWalletProvider(wallet);

  const connectWallet = async () => {
    try {
      const activeAccount = await wallet.client.getActiveAccount();
      if (activeAccount) {
        console.log("Already connected:", activeAccount.address);
        setAccount({ address: activeAccount.address });
      } else {
        const permissions = await wallet.client.requestPermissions({
          network: {
            type: props.network === "mainnet" ? NetworkType.MAINNET : NetworkType.GHOSTNET,
          },
        });
        console.log("New connection:", permissions.address);
        setAccount({ address: permissions.address });
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  const sakutaroPoemAddress =
    props.network === "mainnet" ? "KT1XPhLUDWuxvUkjraT73TcLGHjUPiUmbCvx" : "KT1TaMMiut2k8PMSNfNk3Dq99Y9gmeb3Uymg";

  const mint = async () => {
    try {
      setLoading(true);

      const contract = await Tezos.wallet.at(sakutaroPoemAddress);
      const result = await contract.methods.mint().send();

      // const result = await contract.methods
      //   .transfer([
      //     {
      //       from_: account?.address,
      //       txs: [
      //         {
      //           to_: "tz1YeK4YvnKfkGo63rnjGBCSiugvX1SnPApX",
      //           token_id: 0,
      //           amount: 1,
      //         },
      //       ],
      //     },
      //   ])
      //   .send();

      console.log(result.opHash);
      setTxId(result.opHash);

      setLoading(false);
    } catch (e: any) {
      console.log(e);
      alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      setLoading(false);
    }
  };

  // TODO:
  // const viewSvg = async () => {
  //   try {
  //     const contract = await Tezos.wallet.at(sakutaroPoemAddress, tzip12);
  //     const tokenMetadata = await contract.tzip12().getTokenMetadata(0);
  //     const svg = tokenMetadata["svg"];
  //     const svgBase64 = svg64(svg);
  //     console.log(svgBase64);
  //     setSvgBase64(svgBase64);
  //     open();
  //   } catch (e) {
  //     console.log(e);
  //     alert(e);
  //   }
  // };

  const loadLastTokenId = async () => {
    const contract = await Tezos.wallet.at(sakutaroPoemAddress);
    const storage: { last_token_id: BigNumber } = await contract.storage();
    setTotalNumber(storage.last_token_id.toString());
  };

  React.useEffect(() => {
    loadLastTokenId();
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
              All minted
            </Text>
          </div>
        ) : (
          <>
            <div className="m-auto p-4">
              {!account ? (
                <Button onClick={connectWallet} color="red" rounded={true}>
                  Connect Wallet
                </Button>
              ) : (
                <Button onClick={mint} color="red" rounded={true} disabled={isLoading}>
                  {isLoading ? "sending.." : "Mint"}
                </Button>
              )}
              {txId ? (
                <>
                  <div className="mt-5">
                    {props.explorerUrlPrefix ? (
                      <a href={props.explorerUrlPrefix + txId} target="_blank" rel="noreferrer">
                        <Text align="center" className="underline" color="white">
                          View Tx
                        </Text>
                      </a>
                    ) : (
                      <Text align="center" className="underline" color="white">
                        {txId}
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
          {props.otherMarketUrl ? (
            <a href={props.otherMarketUrl} target="_blank" rel="noreferrer" className="mt-0">
              <FontAwesomeIcon className="ml-2" icon={faStoreAlt} color="white" />
            </a>
          ) : null}
          {props.externalUrl ? (
            <a href={props.externalUrl} target="_blank" rel="noreferrer" className="mt-1">
              <FontAwesomeIcon className="ml-2" icon={faLink} color="white" />
            </a>
          ) : null}
          {/* {!!account ? (
            <span onClick={viewSvg} className="mt-1" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon className="ml-2" icon={faImage} color="white" />
            </span>
          ) : null} */}
        </div>
      </div>

      <Modal>
        <div>
          <img alt="poem" src={svgBase64} />
        </div>
      </Modal>
    </>
  );
};
