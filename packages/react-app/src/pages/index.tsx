import "../styles/globals.css";

import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

import { IndexPage } from "../components/templates/IndexPage";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const fn = function () {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <IndexPage />
    </Web3ReactProvider>
  );
};

export default fn;
