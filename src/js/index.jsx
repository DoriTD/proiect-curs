import ReactDOM from "react-dom";
import React from "react";
import App from "./app.jsx";
import data from "./products";
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App data={data} />, document.getElementById("app"));
});