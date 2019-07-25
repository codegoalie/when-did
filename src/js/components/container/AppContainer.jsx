import React, { Component } from "react";
import ReactDOM from "react-dom";

import FeedingTimer from "../presentational/FeedingTimer.jsx";

class AppContainer extends Component {
  constructor() {
    super();

    this.state = { timerOn: false, timerTime: 0 };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  }

  render() {
    const { timerOn, timerTime } = this.state;
    return (
      <div id="app">
        {timerOn ? (
          <button onClick={this.stopTimer}>Stop Timer</button>
        ) : (
          <button onClick={this.startTimer}>Start Timer</button>
        )}
        <FeedingTimer timerTime={timerTime} />
      </div>
    );
  }
}

export default AppContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
