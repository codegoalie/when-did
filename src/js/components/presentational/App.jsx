import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FeedingTimer from "../container/FeedingTimer.jsx";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <FeedingTimer />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h2>History</h2>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default App;
