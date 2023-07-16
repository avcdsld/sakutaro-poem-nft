import App from "./App";
import { createRoot } from 'react-dom/client';
import { WalletProvider } from "@suiet/wallet-kit";
import { Buffer } from "buffer";
import "@suiet/wallet-kit/style.css";
import "./styles/tailwind.css";
import "./styles/globals.css";

// @ts-ignore
window.Buffer = Buffer;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <WalletProvider autoConnect={false}>
    <App />
  </WalletProvider>
);
