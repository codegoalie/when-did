import React, { Component } from "react";
import ReactDOM from "react-dom";

import Dummy from "../presentational/Dummy.jsx";

class AppContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="app">
        <Dummy text="Hello, world!" />
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
