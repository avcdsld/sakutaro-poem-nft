import React from "react";

import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faImage, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "react-hooks-use-modal";
import * as fcl from "@onflow/fcl";

export const MintButtonFlow: React.FC<{
  label: string;
  max: number;
  network: string;
  isReplica: boolean;
  explorerUrlPrefix: string;
  otherMarketUrl?: string;
  externalUrl?: string;
}> = (props) => {
  const [account, setAccount] = React.useState(null);
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txId, setTxId] = React.useState(null);
  const [Modal, open] = useModal("root", { preventScroll: true });
  const [svgBase64, setSvgBase64] = React.useState("");

  const connectWallet = async () => {
    try {
      fcl.config({
        "accessNode.api":
          props.network === "mainnet" ? "https://rest-mainnet.onflow.org" : "https://rest-testnet.onflow.org",
        "discovery.wallet":
          props.network === "mainnet"
            ? "https://fcl-discovery.onflow.org/authn"
            : "https://fcl-discovery.onflow.org/testnet/authn",
        "app.detail.title": "Sakutaro Poem",
        "app.detail.icon": "https://sakutaro.on.fleek.co/favicon.ico",
        "fcl.network": props.network || "testnet",
      });

      fcl.unauthenticate();
      await fcl.authenticate();
      fcl.currentUser().subscribe((currentUser: any) => setAccount({ ...currentUser }));
    } catch (e: any) {}
  };

  const nonFungibleTokenAddress = props.network === "mainnet" ? "0x1d7e57aa55817448" : "0x631e88ae7f1d7c20";
  const isReplica = props.isReplica;
  const sakutaroPoemAddress = props.network === "mainnet" ? "0xe46c2c24053641e2" : "0x17c72fcc2d6d3a7f";

  const mint = async () => {
    try {
      setLoading(true);

      const txCode = !isReplica
        ? `\
import NonFungibleToken from ${nonFungibleTokenAddress}
import SakutaroPoem from ${sakutaroPoemAddress}

transaction() {
    prepare(signer: AuthAccount) {
        if signer.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) == nil {
            signer.save(<- SakutaroPoem.createEmptyCollection(), to: SakutaroPoem.CollectionStoragePath)
            signer.link<&{NonFungibleToken.CollectionPublic, SakutaroPoem.SakutaroPoemCollectionPublic}>(
                SakutaroPoem.CollectionPublicPath,
                target: SakutaroPoem.CollectionStoragePath
            )
        }
        let nft <- SakutaroPoem.mintNFT()
        let collectionRef = signer.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) ?? panic("Not Found")
        if collectionRef.getIDs().length > 0 {
            panic("Only one can be minted")
        }
        collectionRef.deposit(token: <- nft)
    }
}`
        : `\
import NonFungibleToken from ${nonFungibleTokenAddress}
import SakutaroPoemReplica from ${sakutaroPoemAddress}

transaction() {
    prepare(signer: AuthAccount) {
        if signer.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) == nil {
            signer.save(<- SakutaroPoemReplica.createEmptyCollection(), to: SakutaroPoemReplica.CollectionStoragePath)
            signer.link<&{NonFungibleToken.CollectionPublic, SakutaroPoemReplica.SakutaroPoemReplicaCollectionPublic}>(
                SakutaroPoemReplica.CollectionPublicPath,
                target: SakutaroPoemReplica.CollectionStoragePath
            )
        }
        let nft <- SakutaroPoemReplica.mintNFT()
        let collectionRef = signer.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) ?? panic("Not Found")
        if collectionRef.getIDs().length > 0 {
            panic("Only one can be minted")
        }
        collectionRef.deposit(token: <- nft)
    }
}`;
      console.log(txCode);
      const tx = await fcl.send([
        fcl.transaction(txCode),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.payer(fcl.authz),
        fcl.limit(9999),
      ]);

      setTxId(tx.transactionId);
      alert("NFT mining has been started!");

      const unsub = fcl.tx(tx).subscribe((currentTransaction) => {
        console.log(currentTransaction);
        if (fcl.tx.isSealed(currentTransaction)) {
          console.log("Transaction is Sealed");
          unsub();
        }
      });

      setLoading(false);
    } catch (e: any) {
      console.log(e);
      alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      setLoading(false);
    }
  };

  const viewSvg = async () => {
    try {
      const svgAsBase64 = await fcl.query({
        cadence: !isReplica
          ? `\
import NonFungibleToken from ${nonFungibleTokenAddress}
import SakutaroPoem from ${sakutaroPoemAddress}

pub fun main(): String {
  let collectionRef = getAccount(${account!["addr"]})
      .getCapability(SakutaroPoem.CollectionPublicPath)
      .borrow<&{SakutaroPoem.SakutaroPoemCollectionPublic}>()
  if collectionRef == nil {
      return ""
  }
  let ids = collectionRef!.getIDs()
  if ids.length == 0 {
      return ""
  }

  let nft = collectionRef!.borrowPoem(id: ids[0])!
  let metadata = nft.resolveView(Type<SakutaroPoem.SakutaroPoemMetadataView>())!
  let poem = metadata as! SakutaroPoem.SakutaroPoemMetadataView

  return poem.svgBase64 ?? ""
}`
          : `\
import NonFungibleToken from ${nonFungibleTokenAddress}
import SakutaroPoem from ${sakutaroPoemAddress}

pub fun main(): String {
  let collectionRef = getAccount(${account!["addr"]})
      .getCapability(SakutaroPoem.CollectionPublicPath)
      .borrow<&{SakutaroPoem.SakutaroPoemCollectionPublic}>()
  if collectionRef == nil {
      return ""
  }
  let ids = collectionRef!.getIDs()
  if ids.length == 0 {
      return ""
  }

  let nft = collectionRef!.borrowPoem(id: ids[0])!
  let metadata = nft.resolveView(Type<SakutaroPoem.SakutaroPoemMetadataView>())!
  let poem = metadata as! SakutaroPoem.SakutaroPoemMetadataView

  return poem.svgBase64 ?? ""
}`,
      });
      console.log(svgAsBase64);
      setSvgBase64(svgAsBase64);
      open();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  React.useEffect(() => {
    fcl
      .config()
      .put(
        "accessNode.api",
        props.network === "mainnet" ? "https://rest-mainnet.onflow.org" : "https://rest-testnet.onflow.org"
      );
    fcl
      .query({
        cadence: !isReplica
          ? `\
import SakutaroPoem from ${sakutaroPoemAddress}

pub fun main(): UInt64 {
    return SakutaroPoem.totalSupply
}`
          : `\
import SakutaroPoemReplica from ${sakutaroPoemAddress}

pub fun main(): UInt64 {
    return SakutaroPoemReplica.totalSupply
}`,
      })
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
          {/* {props.openseaUrl ? (
            <a href={props.openseaUrl} target="_blank" rel="noreferrer">
              <img className="ml-2 mr-1" width="20px" src="/assets/opensea-logo.png" alt="View on OpenSea" />
            </a>
          ) : null} */}
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
