import React, { Component } from "react";

import "./App.css";

import LeftMenuBar from "./components/left-menu-bar/left-menu-bar.component";
import { Provider } from "react-redux";
import store from "./store/configureStore";

window.React = React;

export default class App extends Component {
  constructor(props) {
    super(props);
  }

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
