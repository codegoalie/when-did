import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

const TimerButtons = ({
  running,
  showSaveButton,
  startTimer,
  pauseTimer,
  saveTime
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {running
        ? <Button
            onClick={pauseTimer}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Pause Feeding
          </Button>
        : <Button
            onClick={startTimer}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {showSaveButton ? "Keep" : "Start"} Feeding
          </Button>}
      {showSaveButton
        ? <Button
            onClick={saveTime}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Save Feeding
          </Button>
        : null}
    </React.Fragment>
  );
};

TimerButtons.propTypes = {
  running: PropTypes.bool,
  showSaveButton: PropTypes.bool,
  startTimer: PropTypes.func,
  pauseTimer: PropTypes.func,
  saveTime: PropTypes.func
};

TimerButtons.defaultProps = {
  running: false,
  showSaveButton: false,
  startTimer: () => {},
  pauseTimer: () => {},
  saveTime: () => {}
};

export default TimerButtons;
