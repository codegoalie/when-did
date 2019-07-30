import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FeedingTimer from "../container/FeedingTimer.jsx";
import History from "../presentational/History.jsx";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = ({ reportFeeding, history }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <FeedingTimer reportFeeding={reportFeeding} />
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
  history: PropTypes.array.isRequired
};

export default App;
