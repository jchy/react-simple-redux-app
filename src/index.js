import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { store } from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
