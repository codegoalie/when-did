import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";

const localeDateStringOptions = {
  hour: "numeric",
  minute: "numeric"
};

const HistoryItem = ({ kind, startedAt }) => {
  const startedAtString = new Date(startedAt).toLocaleTimeString(
    "en-US",
    localeDateStringOptions
  );
  return <ListItem>{kind} - {startedAtString}</ListItem>;
};

HistoryItem.propTypes = {
  kind: PropTypes.string.isRequired,
  startedAt: PropTypes.number.isRequired
};

export default HistoryItem;
