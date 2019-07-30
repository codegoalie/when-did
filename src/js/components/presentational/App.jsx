import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FeedingTimer from "../container/FeedingTimer.jsx";
import DiaperRecorder from "../presentational/DiaperRecorder.jsx";
import History from "../presentational/History.jsx";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = ({ history, reportFeeding, reportDiaper }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <FeedingTimer reportFeeding={reportFeeding} />
          <hr />
          <DiaperRecorder reportDiaper={reportDiaper} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h2>History</h2>
          <History items={history} />
        </Paper>
      </Grid>
    </Grid>
  );
};

App.propTypes = {
  reportFeeding: PropTypes.func.isRequired,
  reportDiaper: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired
};

export default App;
