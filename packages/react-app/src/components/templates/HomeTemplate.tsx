import React from "react";

import { ethers } from "ethers";
import { MintButton } from "./MintButton";
import { MintButtonFlow } from "./MintButtonFlow";
import { MintButtonTezos } from "./MintButtonTezos";
import { MintButtonSui } from "./MintButtonSui";
// import { ComingSoonButton } from "./ComingSoonButton";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const HomeTemplate: React.FC = () => {
  const max = 39;

  return (
    <>
      <div className="main text-white bg-black">
        <div className="p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {/* <ComingSoonButton label="Ethereum" max={max} /> */}
            <MintButton
              chainId={1}
              label="Ethereum"
              max={max}
              chainParams={{ chainId: "0x1" }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/6ae5bd1d600f40048725736711ef4acb")
              }
              explorerUrlPrefix="https://etherscan.io/tx/"
              openseaUrl="https://opensea.io/collection/sakutaro-poem"
              externalUrl="https://etherscan.io/address/0xa87abf6854207075e65d16cf86a8ece1216ea973#code"
            />
            {/* <MintButton
              chainId={4}
              label="Rinkeby"
              max={max}
              chainParams={{ chainId: "0x4" }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/6ae5bd1d600f40048725736711ef4acb")
              }
              explorerUrlPrefix="https://rinkeby.etherscan.io/tx/"
              openseaUrl="https://testnets.opensea.io/collection/xxxxxxxx" // TODO:
            /> */}

            {/* <ComingSoonButton label="Polygon" max={max} /> */}
            <MintButton
              chainId={137}
              label="Polygon"
              max={max}
              chainParams={{
                chainId: "0x89",
                chainName: "Matic Network",
                nativeCurrency: {
                  name: "Matic",
                  symbol: "Matic",
                  decimals: 18,
                },
                rpcUrls: ["https://rpc-mainnet.matic.network/"],
                blockExplorerUrls: ["https://polygonscan.com/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://polygon-mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9"
                )
              }
              explorerUrlPrefix="https://polygonscan.com/tx/"
              openseaUrl="https://opensea.io/collection/sakutaro-poem-polygon"
              externalUrl="https://polygonscan.com/address/0xa87abf6854207075e65d16cf86a8ece1216ea973#code"
            />
            {/* <MintButton
              chainId={80001}
              label="Mumbai"
              max={max}
              chainParams={{
                chainId: "0x13881",
                chainName: "Matic Mumbai-Testnet",
                nativeCurrency: {
                  name: "Matic",
                  symbol: "Matic",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://rpc-mumbai.matic.today",
                  "https://matic-mumbai.chainstacklabs.com",
                  "https://rpc-mumbai.maticvigil.com",
                  "https://matic-testnet-archive-rpc.bwarelabs.com",
                ],
                blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://polygon-mumbai.infura.io/v3/7495501b681645b0b80f955d4139add9"
                )
              }
              explorerUrlPrefix="https://mumbai.polygonscan.com/tx/"
              openseaUrl="https://opensea.io/collection/xxxxxxxx" // TODO:
            /> */}

            {/* <ComingSoonButton label="BSC" max={max} /> */}
            <MintButton
              chainId={56}
              label="BSC"
              max={max}
              chainParams={{
                chainId: "0x38",
                chainName: "BSC",
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://bsc-dataseed.binance.org",
                  "https://bsc-dataseed1.defibit.io",
                  "https://bsc-dataseed1.ninicoin.io",
                ],
                blockExplorerUrls: ["https://bscscan.com/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org")}
              explorerUrlPrefix="https://bscscan.com/tx/"
              openseaUrl="https://opensea.io/ja/collection/sakutaro-poem-bnb"
              externalUrl="https://bscscan.com/address/0xa87abf6854207075e65d16cf86a8ece1216ea973#code"
            />
            {/* <MintButton
              chainId={97}
              label="BSC Testnet"
              max={max}
              chainParams={{
                chainId: "0x61",
                chainName: "BSC Testnet",
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                rpcUrls: [
                  "https://data-seed-prebsc-1-s1.binance.org:8545/",
                  "https://data-seed-prebsc-2-s1.binance.org:8545/",
                  "https://data-seed-prebsc-1-s2.binance.org:8545/",
                  "https://data-seed-prebsc-2-s2.binance.org:8545/",
                  "https://data-seed-prebsc-1-s3.binance.org:8545/",
                  "https://data-seed-prebsc-2-s3.binance.org:8545/",
                ],
                blockExplorerUrls: ["https://testnet.bscscan.com/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/")}
              explorerUrlPrefix="https://testnet.bscscan.com/tx/"
            /> */}

            {/* <ComingSoonButton label="Arbitrum One" max={max} /> */}
            <MintButton
              chainId={42161}
              label="Arbitrum One"
              max={max}
              chainParams={{
                chainId: "0xa4b1",
                chainName: "Arbitrum One",
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                blockExplorerUrls: ["https://explorer.arbitrum.io/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://arbitrum-mainnet.infura.io/v3/6ae5bd1d600f40048725736711ef4acb"
                )
              }
              explorerUrlPrefix="https://explorer.arbitrum.io/tx/"
              openseaUrl="https://opensea.io/collection/sakutaro-poem-arbitrum"
              externalUrl="https://explorer.arbitrum.io/address/0xa87abf6854207075e65d16cf86a8ece1216ea973"
            />
            {/* <MintButton
              chainId={421611}
              label="Arbitrum Testnet"
              max={max}
              chainParams={{
                chainId: "0x66eeb",
                chainName: "Arbitrum Testnet",
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
                blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://arbitrum-rinkeby.infura.io/v3/6ae5bd1d600f40048725736711ef4acb"
                )
              }
              explorerUrlPrefix="https://rinkeby-explorer.arbitrum.io/tx/"
            /> */}

            {/* <ComingSoonButton label="Optimistic Ethereum" max={max} /> */}
            <MintButton
              chainId={10}
              label="Optimistic Ethereum"
              max={max}
              chainParams={{
                chainId: "0xa",
                chainName: "Optimistic Ethereum",
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                rpcUrls: ["https://mainnet.optimism.io"],
                blockExplorerUrls: ["https://optimistic.etherscan.io/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://optimism-mainnet.infura.io/v3/6ae5bd1d600f40048725736711ef4acb"
                )
              }
              explorerUrlPrefix="https://optimistic.etherscan.io/tx/"
              openseaUrl="https://opensea.io/collection/sakutaro-poem-optimism"
              externalUrl="https://optimistic.etherscan.io/address/0xa87abf6854207075e65d16cf86a8ece1216ea973#code"
            />

            {/* <ComingSoonButton label="Avalanche C-Chain" max={max} /> */}
            <MintButton
              chainId={43114}
              label="Avalanche C-Chain"
              max={max}
              chainParams={{
                chainId: "0xa86a",
                chainName: "Avalanche C-Chain",
                nativeCurrency: {
                  name: "AVAX",
                  symbol: "AVAX",
                  decimals: 18,
                },
                rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://snowtrace.io/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://api.avax.network/ext/bc/C/rpc")}
              explorerUrlPrefix="https://snowtrace.io/tx/"
              openseaUrl="https://opensea.io/collection/sakutaro-poem-avalanche"
              externalUrl="https://snowtrace.io/address/0xa87abf6854207075e65d16cf86a8ece1216ea973#code"
            />
            {/* <MintButton
              chainId={43113}
              label="Avalanche FUJI C-Chain"
              max={max}
              chainParams={{
                chainId: "0xa869",
                chainName: "Avalanche FUJI C-Chain",
                nativeCurrency: {
                  name: "AVAX",
                  symbol: "AVAX",
                  decimals: 18,
                },
                rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://testnet.snowtrace.io/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://api.avax-test.network/ext/bc/C/rpc")}
              explorerUrlPrefix="https://testnet.snowtrace.io/tx/"
            /> */}

            {/* <ComingSoonButton label="Shiden" max={max} /> */}
            <MintButton
              chainId={336}
              label="Shiden"
              max={max}
              chainParams={{
                chainId: "0x150",
                chainName: "Shiden",
                nativeCurrency: {
                  name: "SDN",
                  symbol: "SDN",
                  decimals: 18,
                },
                rpcUrls: ["https://shiden.api.onfinality.io/public", "https://rpc.shiden.astar.network:8545"],
                blockExplorerUrls: ["https://blockscout.com/shiden/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://shiden.api.onfinality.io/public")}
              explorerUrlPrefix="https://blockscout.com/shiden/tx/"
              externalUrl="https://blockscout.com/shiden/address/0xA87AbF6854207075e65D16cF86a8ece1216eA973/contracts"
            />
            {/* <MintButton
              chainId={81}
              label="Shibuya"
              max={max}
              chainParams={{
                chainId: "0x51",
                chainName: "Shibuya",
                nativeCurrency: {
                  name: "SBY",
                  symbol: "SBY",
                  decimals: 18,
                },
                rpcUrls: ["https://rpc.shibuya.astar.network:8545"],
                blockExplorerUrls: ["https://shibuya.subscan.io/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://rpc.shibuya.astar.network:8545")}
              explorerUrlPrefix="https://shibuya.subscan.io/tx/"
            /> */}

            <MintButton
              chainId={592}
              label="Astar"
              max={max}
              chainParams={{
                chainId: "0x250",
                chainName: "Astar",
                nativeCurrency: {
                  name: "ASTR",
                  symbol: "ASTR",
                  decimals: 18,
                },
                rpcUrls: ["https://rpc.astar.network:8545", "https://astar.api.onfinality.io/public"],
                blockExplorerUrls: ["https://blockscout.com/astar/"],
              }}
              jsonRpcProvider={new ethers.providers.JsonRpcProvider("https://astar.api.onfinality.io/public")}
              explorerUrlPrefix="https://blockscout.com/astar/tx/"
              externalUrl="https://blockscout.com/astar/address/0xA87AbF6854207075e65D16cF86a8ece1216eA973/contracts"
            />

            {/* <MintButtonFlow
              label="Flow"
              network="testnet"
              isReplica={false}
              max={max}
              explorerUrlPrefix="https://testnet.flowscan.org/transaction/"
              externalUrl="https://testnet.flowscan.org/contract/A.0ba61bc9eb0b44c8.SakutaroPoem/overview"
            />

            <MintButtonFlow
              label="Flow（Replica version）"
              network="testnet"
              isReplica={true}
              max={10000}
              explorerUrlPrefix="https://testnet.flowscan.org/transaction/"
              externalUrl="https://testnet.flowscan.org/contract/A.0ba61bc9eb0b44c8.SakutaroPoemReplica/overview"
            /> */}

            <MintButtonFlow
              label="Flow"
              network="mainnet"
              isReplica={false}
              max={max}
              explorerUrlPrefix="https://flowscan.org/transaction/"
              otherMarketUrl="https://matrixmarket.xyz/collection/mainnet_flow-A.e46c2c24053641e2.SakutaroPoem"
              externalUrl="https://flowscan.org/contract/A.e46c2c24053641e2.SakutaroPoem/overview"
            />

            {/* <MintButtonFlow
              label="Flow（Replica version）"
              network="mainnet"
              isReplica={true}
              max={10000}
              explorerUrlPrefix="https://flowscan.org/transaction/"
              externalUrl="https://flowscan.org/contract/A.e46c2c24053641e2.SakutaroPoemReplica/overview"
            /> */}

            {/* <MintButtonTezos
              label="Tezos"
              network="testnet"
              max={max}
              explorerUrlPrefix="https://ghostnet.tzkt.io/"
              externalUrl="https://ghostnet.tzkt.io/KT1TaMMiut2k8PMSNfNk3Dq99Y9gmeb3Uymg/tokens"
            /> */}

            <MintButtonTezos
              label="Tezos"
              network="mainnet"
              max={max}
              explorerUrlPrefix="https://tzkt.io/"
              otherMarketUrl="https://rarible.com/sakutaro-poem-tezos/"
              externalUrl="https://tzkt.io/KT1XPhLUDWuxvUkjraT73TcLGHjUPiUmbCvx/tokens"
            />

            {/* <MintButtonSui
              label="Sui Devnet"
              network="devnet"
              max={max}
              explorerUrlPrefix="https://explorer.sui.io/"
              otherMarketUrl=""
              externalUrl="https://suiexplorer.com/object/0x82bd7c22a07b14bdb05227a0b7e2c767bb983f4adcbf8b76a1be80fbec793578?module=sakutaro_poem&network=devnet"
            /> */}

            <MintButtonSui
              label="Sui"
              network="mainnet"
              max={max}
              explorerUrlPrefix="https://explorer.sui.io/"
              otherMarketUrl=""
              externalUrl="https://suiexplorer.com/object/0x5b7964cf132015d66a79cfa248789204389e7fa7af0b8c4cb75a6b03c5877ea1?module=sakutaro_poem"
            />

            {/* <ComingSoonButton label="Solana" max={max} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
