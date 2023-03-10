import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CeloProvider, Alfajores, NetworkNames } from "@celo/react-celo";
import "@celo/react-celo/lib/styles.css";
import { SupportedProviders } from "@celo/react-celo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CeloProvider
    dapp
    connectModal={{
      // This options changes the title of the modal and can be either a string or a react element
      title: <span>Connect your Wallet</span>,
      providersOptions: {
        // This option hides specific wallets from the default list
        // hideFromDefaults: [
        //   SupportedProviders.MetaMask,
        //   SupportedProviders.PrivateKey,
        //   SupportedProviders.CeloExtensionWallet,
        //   SupportedProviders.Valora,
        // ],

        // This option hides all default wallets
        // hideFromDefaults: true,

        // This option toggles on and off the searchbar
        searchable: true,
      },
    }}
    networks={[Alfajores]}
      network={{
        name: NetworkNames.Alfajores,
        rpcUrl: 'https://alfajores-forno.celo-testnet.org',
        graphQl: 'https://alfajores-blockscout.celo-testnet.org/graphiql',
        explorer: 'https://alfajores-blockscout.celo-testnet.org',
        chainId: 44787,
      }}
  >
    <React.StrictMode>
      <App />
      {/* </CeloProvider> */}
    </React.StrictMode>
  </CeloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
