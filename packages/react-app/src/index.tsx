import App from "./App";
import { createRoot } from "react-dom/client";
import { WalletProvider } from "@suiet/wallet-kit";
import { AptosWalletAdapterProvider, NetworkName } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";
import { BloctoWallet } from "@blocto/aptos-wallet-adapter-plugin";
import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";
import { Buffer } from "buffer";
import "@suiet/wallet-kit/style.css";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import "./styles/tailwind.css";
import "./styles/globals.css";

// @ts-ignore
window.Buffer = Buffer;

const wallets = [
  new PetraWallet(),
  new MartianWallet(),
  new RiseWallet(),
  new PontemWallet(),
  new TrustWallet(),
  new FewchaWallet(),
  new MSafeWalletAdapter(),
  new NightlyWallet(),
  // Blocto supports Testnet/Mainnet for now.
  new BloctoWallet({
      network: NetworkName.Mainnet,
      bloctoAppId: "7b051c0d-b0d8-44fb-8b3a-7c7004a451b8", // https://developers.blocto.app
  }),
  new WelldoneWallet(),
];

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <AptosWalletAdapterProvider plugins={wallets} autoConnect={false} onError={(error) => { console.log("error", error); }}>
    <WalletProvider autoConnect={false}>
      <App />
    </WalletProvider>
  </AptosWalletAdapterProvider>
);
