import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";
import store from "./store/configureStore";
import * as alerts from "./store/alerts.js";

// store.dispatch(
//   alerts.alertAdded({
//     title: "Hello",
//     body: "This is a test for the alert message display",
//     isCritical: true,
//     location: "Memphis, TN",
//   })
// );

// store.dispatch(
//   alerts.alertAdded({
//     title: "Test Alert 7",
//     body: "This is a test for the alert message display, i need to write a good bit of text, so this is just junk",
//     isCritical: true,
//     location: "Starkville, MS",
//   })
// );

// store.dispatch(
//   alerts.alertAdded({
//     title: "Test Alert 100",
//     body: "This is test 3, it is taking place in Starkville, MS",
//     isCritical: true,
//     location: "Starkville, MS",
//   })
// );

// store.dispatch(
//   alerts.alertAdded({
//     title: "Test Alert Weather",
//     body: "This test is taking place from West Point!",
//     isCritical: true,
//     location: "West Point, MS",
//   })
// );

// store.dispatch(
//   alerts.alertDeleted({ id: "95495e42-7a5d-456c-8983-c717fcf54744" })
// );

console.log(store.getState());

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
