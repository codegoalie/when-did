import React, { Component } from "react";
import PropTypes from "prop-types";

import TimerDisplay from "../presentational/TimerDisplay.jsx";
import TimerButtons from "../presentational/TimerButtons.jsx";

class FeedinTimer extends Component {
  constructor() {
    super();

    this.state = { timerOn: false, timerTime: 0, timerFirstStart: 0 };

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.saveTime = this.saveTime.bind(this);
  }

  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
      timerFirstStart: this.state.timerFirstStart === 0
        ? Date.now()
        : this.state.timerFirstStart
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  }

  pauseTimer() {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  }

  saveTime() {
    this.pauseTimer();
    this.props.reportFeeding(this.state.timerFirstStart, this.state.timerTime);
    this.setState({ timerFirstStart: 0, timerTime: 0 });
  }

  render() {
    const { timerOn, timerTime, timerFirstStart } = this.state;
    return (
      <React.Fragment>
        <TimerButtons
          running={timerOn}
          showSaveButton={timerFirstStart !== 0}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          saveTime={this.saveTime}
        />
        <br />
        <TimerDisplay timerTime={timerTime} />
      </React.Fragment>
    );
  }
}

FeedinTimer.propTypes = {
  reportFeeding: PropTypes.func
};

FeedinTimer.defaultProps = {
  reportFeeding: () => {}
};

export default FeedinTimer;
