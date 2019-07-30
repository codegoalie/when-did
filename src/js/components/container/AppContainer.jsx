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
    this.reportDiaper = this.reportDiaper.bind(this);
    this.recordHistory = this.recordHistory.bind(this);
  }

  recordHistory(newItem) {
    this.setState({
      history: [...this.state.history, newItem]
    });
  }

  reportFeeding(startedAt, timerTime) {
    this.recordHistory({
      kind: "feeding",
      timerTime: timerTime,
      startedAt: startedAt
    });
  }

  reportDiaper(changedAt, contents) {
    this.recordHistory({
      kind: "diaper",
      changedAt: changedAt,
      contents: contents
    });
  }

  render() {
    return (
      <div id="app">
        <Container p={2}>
          <App
            reportFeeding={this.reportFeeding}
            history={this.state.history}
            reportDiaper={this.reportDiaper}
          />
        </Container>
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
