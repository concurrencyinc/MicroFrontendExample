import React from "react";
import ReactDOM from "react-dom";
import CartView from "./features/CartView";

window.renderApp = () => {
  const domElement =
    document.getElementById("react-app") ||
    document.querySelector("#react-app");

  if (domElement) {
    ReactDOM.render(<CartView />, domElement);
  }
};