import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { MotherNurse } from "mdi-material-ui";

import TimerDisplay from "./TimerDisplay.jsx";

const localeDateStringOptions = {
  hour: "numeric",
  minute: "numeric"
};

const FeedingHistoryItem = ({ kind, startedAt, timerTime }) => {
  const startedAtString = new Date(startedAt).toLocaleTimeString(
    "en-US",
    localeDateStringOptions
  );
  return (
    <ListItem title={kind}>
      <ListItemAvatar>
        <Avatar><MotherNurse /></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={startedAtString}
        secondary={<TimerDisplay timerTime={timerTime} />}
      />
    </ListItem>
  );
};

FeedingHistoryItem.propTypes = {
  kind: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired,
  timerTime: PropTypes.number.isRequired
};

export default FeedingHistoryItem;
