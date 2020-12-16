import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --test: red;
    --test2: blue;
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: monospace;
      font-size: 12px;
  }
  button {
    background: none; border: none;
      outline: none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
