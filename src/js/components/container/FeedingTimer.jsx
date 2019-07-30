import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

import TimerDisplay from "../presentational/TimerDisplay.jsx";

class FeedinTimer extends Component {
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
    this.props.reportFeeding(this.state.timerStart, this.state.timerTime);
  }

  render() {
    const { timerOn, timerTime } = this.state;
    return (
      <React.Fragment>
        {timerOn
          ? <Button
              onClick={this.stopTimer}
              variant="contained"
              color="secondary"
            >
              Stop Timer
            </Button>
          : <Button
              onClick={this.startTimer}
              variant="contained"
              color="primary"
            >
              Start Timer
            </Button>}
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
