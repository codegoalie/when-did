import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { EmoticonPoop } from "mdi-material-ui";

const localeDateStringOptions = {
  hour: "numeric",
  minute: "numeric"
};

const DiaperHistoryItem = ({ kind, startedAt, contents }) => {
  const startedAtString = new Date(startedAt).toLocaleTimeString(
    "en-US",
    localeDateStringOptions
  );
  return (
    <ListItem title={kind}>
      <ListItemAvatar>
        <Avatar><EmoticonPoop /></Avatar>
      </ListItemAvatar>
      <ListItemText primary={startedAtString} secondary={contents} />
    </ListItem>
  );
};

DiaperHistoryItem.propTypes = {
  kind: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired,
  contents: PropTypes.string.isRequired
};

export default DiaperHistoryItem;
