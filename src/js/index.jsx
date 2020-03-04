import ReactDOM from "react-dom";
import React from "react";
import App from "./app.jsx";
import data from "./products";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
document.addEventListener("DOMContentLoaded", function() {
  var firebaseConfig = {
    apiKey: "AIzaSyCD9rKtqqynmTDaS1TDasph_CAMpT77rcU",
    authDomain: "furniture-site-dori.firebaseapp.com",
    databaseURL: "https://furniture-site-dori.firebaseio.com",
    projectId: "furniture-site-dori",
    storageBucket: "furniture-site-dori.appspot.com",
    messagingSenderId: "97562800340",
    appId: "1:97562800340:web:8b7002352869e6c2f8cb41",
    measurementId: "G-BTCLNNV2XQ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  ReactDOM.render(
    <App data={data} fire={fire} />,
    document.getElementById("app")
  );
});
