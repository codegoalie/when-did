import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";

import App from "../presentational/App.jsx";

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: []
    };

    this.reportFeeding = this.reportFeeding.bind(this);
  }

  reportFeeding(startedAt, timerTime) {
    this.setState({
      history: [
        ...this.state.history,
        {
          kind: "feeding",
          timerTime: timerTime,
          startedAt: startedAt
        }
      ]
    });
  }

  render() {
    return (
      <div id="app">
        <Container p={2}>
          <App
            reportFeeding={this.reportFeeding}
            history={this.state.history}
          />
        </Container>
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
