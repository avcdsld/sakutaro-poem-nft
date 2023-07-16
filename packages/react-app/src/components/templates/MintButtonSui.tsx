import React from "react";

import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faImage, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "react-hooks-use-modal";
import { Connection, JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { ConnectModal, useWallet } from "@suiet/wallet-kit";

export const MintButtonSui: React.FC<{
  label: string;
  max: number;
  network: string;
  explorerUrlPrefix: string;
  otherMarketUrl?: string;
  externalUrl?: string;
}> = (props) => {
  const provider = new JsonRpcProvider(props.network === 'mainnet' ?
    new Connection({ fullnode: 'https://rpc.mainnet.sui.io/' }) : undefined);
  const { connected, account, signAndExecuteTransactionBlock } = useWallet();
  const [showConnectModal, setShowConnectModal] = React.useState(false);
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txId, setTxId] = React.useState("");
  const [Modal, open] = useModal("root", { preventScroll: true });
  const [svgBase64, setSvgBase64] = React.useState("");

  const sakutaroPoemPackageID = props.network === "mainnet" ?
    "0x5b7964cf132015d66a79cfa248789204389e7fa7af0b8c4cb75a6b03c5877ea1" :
    "0x82bd7c22a07b14bdb05227a0b7e2c767bb983f4adcbf8b76a1be80fbec793578";
  const sakutaroPoemSupplyID = props.network === "mainnet" ?
    "0xdf35ed2fcc90bc1b1281e43461c9cc0ccad7456d8e9646e6d5de09076e8e5156" :
    "0x61697201431897d30fa1e083f3168ed1a8cb0d7e7b76d82a7154b07cc4863f5c";

  const mint = async () => {
    try {
      setLoading(true);

      const tx = new TransactionBlock();
      tx.moveCall({
        target: `${sakutaroPoemPackageID}::sakutaro_poem::mint`,
        arguments: [tx.pure(sakutaroPoemSupplyID)],
      });
      const input: any = { transactionBlock: tx }
      const resData = await signAndExecuteTransactionBlock(input);
      console.log('success', resData);
      setTxId(resData.digest);

      setLoading(false);
    } catch (e: any) {
      console.log(e);
      alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      setLoading(false);
    }
  };

  const viewSvg = async () => {
    try {
      if (account?.address == null) {
        return;
      }
      const structType = `${sakutaroPoemPackageID}::sakutaro_poem::SakutaroPoem`;
      const objects = await provider.getOwnedObjects({
        owner: account?.address,
        filter: {
          StructType: structType
        },
        options: {
          showType: true,
          showContent: true,
          showDisplay: true,
        }
      })
      console.log(objects);
      if (!objects || !objects.data || objects.data.length === 0) {
        return;
      }

      const svgBase64 = objects.data[0].data?.display?.data!['animation_url'];
      console.log(svgBase64);
      setSvgBase64(svgBase64);
      open();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const loadLastTokenId = async () => {
    try {
      if (!provider) {
        return;
      }
      const object = await provider.getObject({
        id: sakutaroPoemSupplyID,
        options: {
          showType: true,
          showContent: true,
        }
      })
      console.log(object, object.data?.content!);
      const content: any = object.data?.content;
      const totalNumber = content.fields['total_supply'];
      setTotalNumber(totalNumber);
    } catch (e) {
      setTotalNumber('-');
    }
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
              Sold Out
            </Text>
          </div>
        ) : (
          <>
            <div className="m-auto p-4">
              {!connected ? (
                <ConnectModal
                  open={showConnectModal}
                  onOpenChange={(open) => setShowConnectModal(open)}
                >
                  <Button color="red" rounded={true}>
                    Connect Wallet
                  </Button>
                </ConnectModal>
              ) : (
                <Button onClick={mint} color="red" rounded={true} disabled={isLoading}>
                  {isLoading ? "sending.." : "Mint"}
                </Button>
              )}
              {txId ? (
                <>
                  <div className="mt-5">
                    {props.explorerUrlPrefix ? (
                      <a href={props.explorerUrlPrefix + '/txblock/' + txId + `?module=sakutaro_poem&network=${props.network}`} target="_blank" rel="noreferrer">
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
          {!!account ? (
            <span onClick={viewSvg} className="mt-1" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon className="ml-2" icon={faImage} color="white" />
            </span>
          ) : null}
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
