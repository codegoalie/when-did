import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";

import App from "../presentational/App.jsx";

class AppContainer extends Component {
  render() {
    return (
      <div id="app">
        <Container p={2}>
          <App />
        </Container>
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
