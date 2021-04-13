import * as serviceWorker from "./serviceWorker";
import { store } from "@redux/redux-store";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();