import "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer/AppContainer";
const APP_CONTAINER_SELECTOR = "app-container";

ReactDOM.render(
  <AppContainer />,
  document.getElementById(APP_CONTAINER_SELECTOR)
);
