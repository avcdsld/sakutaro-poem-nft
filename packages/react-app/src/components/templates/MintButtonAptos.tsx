import React from "react";

import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faImage, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "react-hooks-use-modal";
import { Provider, Network } from "aptos";
import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

export const MintButtonAptos: React.FC<{
  label: string;
  max: number;
  network: string;
  explorerUrlPrefix: string;
  otherMarketUrl?: string;
  externalUrl?: string;
}> = (props) => {
  const provider = new Provider(props.network === "mainnet" ? Network.MAINNET : Network.DEVNET);
  const { account, connected, signAndSubmitTransaction } = useWallet();
  const [showConnectModal, setShowConnectModal] = React.useState(false);
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txId, setTxId] = React.useState("");
  const [Modal, open] = useModal("root", { preventScroll: true });
  const [svgBase64, setSvgBase64] = React.useState("");

  const sakutaroPoemModuleAddress =
    props.network === "mainnet"
      ? "0x718f20ae37f309e0aa59fcbe38eb731b73f01aa1459a01d1e157f347c3c6db6d"
      : "0xc567f3711009f9d00a42b2e0852ddbd27a3492be74f3fef67eb5affda34dddfd";

  const mint = async () => {
    try {
      setLoading(true);

      const payload = {
        type: "entry_function_payload",
        function: `${sakutaroPoemModuleAddress}::sakutaro_poem::mint`,
        type_arguments: [],
        arguments: [],
      };
      const response = await signAndSubmitTransaction(payload);
      await provider.waitForTransaction(response.hash);
      console.log("success", response);
      setTxId(response.hash);

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

      const tokens = await provider.getOwnedTokens(account?.address);
      const tokensProperties = tokens.current_token_ownerships_v2
        .filter((token) => {
          const collection = token.current_token_data?.current_collection;
          return (
            collection &&
            collection.collection_name === "Sakutaro Poem" &&
            collection.creator_address === sakutaroPoemModuleAddress
          );
        })
        .map((token) => token.current_token_data?.token_properties);
      if (tokensProperties.length === 0) {
        console.log("there is no nft");
        return;
      }

      const svgBase64 = tokensProperties[0].poem_svg_base64;
      console.log(svgBase64);
      setSvgBase64(svgBase64);
      open();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const loadTotalNumber = async () => {
    try {
      if (!provider) {
        return;
      }
      const moduleDataResource = await provider.getAccountResource(
        sakutaroPoemModuleAddress,
        `${sakutaroPoemModuleAddress}::sakutaro_poem::ModuleData`
      );
      console.log(moduleDataResource);
      const totalNumber = moduleDataResource.data["token_minting_events"].counter;
      setTotalNumber(totalNumber);
    } catch (e) {
      console.log(e);
      setTotalNumber("-");
    }
  };

  React.useEffect(() => {
    loadTotalNumber();
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
              <div style={{ display: "none" }}>
                <WalletSelector isModalOpen={showConnectModal} setModalOpen={setShowConnectModal} />
              </div>
              {!connected ? (
                <Button onClick={() => setShowConnectModal(true)} color="red" rounded={true}>
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
                      <a
                        href={props.explorerUrlPrefix + "txn/" + txId + `?network=${props.network}`}
                        target="_blank"
                        rel="noreferrer"
                      >
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
