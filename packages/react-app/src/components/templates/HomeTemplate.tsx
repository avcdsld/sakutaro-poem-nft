import React from "react";

import { ethers } from "ethers";
import { MintButton } from "./MintButton";
import { ComingSoonButton } from "./ComingSoonButton";

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
              openseaUrl="https://opensea.io/collection/xxxxxxxx" // TODO:
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

            <ComingSoonButton label="Polygon" max={max} />
            {/* <MintButton
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
              explorerUrlPrefix="https://polygonscan.com/tx/"
              openseaUrl="https://opensea.io/collection/xxxxxxxx" // TODO:
            /> */}

            <MintButton
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
            />

            <ComingSoonButton label="BSC" max={max} />
            {/* <MintButton
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
            /> */}
            <MintButton
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
            />

            <ComingSoonButton label="Arbitrum One" max={max} />
            {/* <MintButton
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
            /> */}
            <MintButton
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
            />

            <ComingSoonButton label="Shiden" max={max} />
            {/* <MintButton
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
            /> */}
            <MintButton
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
            />

            <ComingSoonButton label="Optimism" max={max} />
            {/* <MintButton
              chainId={10}
              label="Optimism"
              max={max}
              chainParams={{
                chainId: "0xa",
                chainName: "Optimism",
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
            /> */}

            <ComingSoonButton label="Avalanche C-Chain" max={max} />
            {/* <MintButton
              chainId={43114}
              label="Avalanche Mainnet C-Chain"
              max={max}
              chainParams={{
                chainId: "0xa86a",
                chainName: "Avalanche Mainnet C-Chain",
                nativeCurrency: {
                  name: "AVAX",
                  symbol: "AVAX",
                  decimals: 18,
                },
                rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                blockExplorerUrls: ["https://snowtrace.io/"],
              }}
              jsonRpcProvider={
                new ethers.providers.JsonRpcProvider(
                  "https://api.avax.network/ext/bc/C/rpc"
                )
              }
              explorerUrlPrefix="https://snowtrace.io/tx/"
            /> */}
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

            <ComingSoonButton label="Solana" max={max} />
            <ComingSoonButton label="Flow" max={max} />
          </div>
        </div>
      </div>
    </>
  );
};
