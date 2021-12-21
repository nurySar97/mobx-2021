import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "mobx-react";

const { todo } = store;

ReactDOM.render(
  <React.StrictMode>
    <Provider todo={todo}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
