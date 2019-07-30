import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { MotherNurse, Sleep, AccountQuestion } from "mdi-material-ui";

import TimerDisplay from "./TimerDisplay.jsx";

const localeDateStringOptions = {
  hour: "numeric",
  minute: "numeric"
};

const HistoryItem = ({ kind, startedAt, timerTime }) => {
  const startedAtString = new Date(startedAt).toLocaleTimeString(
    "en-US",
    localeDateStringOptions
  );
  return (
    <ListItem title={kind}>
      <ListItemAvatar>
        <Avatar>{iconFor(kind)}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={startedAtString}
        secondary={<TimerDisplay timerTime={timerTime} />}
      />
    </ListItem>
  );
};

HistoryItem.propTypes = {
  kind: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired
};

export default HistoryItem;

function iconFor(kind) {
  switch (kind) {
    case "feeding":
      return <MotherNurse />;
    default:
      return <AccountQuestion />;
  }
}
