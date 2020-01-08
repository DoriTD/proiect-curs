import ReactDOM from "react-dom";
import React from "react";
import App from "./app.jsx";
import data from "./products";
document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <App
      baseUrl={
        process.env.NODE_ENV == "production" ? "/proiect-curs/src/" : "/"
      }
      data={data}
    />,
    document.getElementById("app")
  );
});
