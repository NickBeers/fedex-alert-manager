import React, { Component } from "react";
import LeftMenuBar from "./components/left-menu-bar/left-menu-bar.component";
import { Provider } from "react-redux";
import store from "./store/configureStore";

import "./App.css";

window.React = React;

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <LeftMenuBar />
        </Provider>
      </div>
    );
  }
}
