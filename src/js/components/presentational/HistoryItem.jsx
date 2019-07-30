import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import { MotherNurse, Sleep, AccountQuestion } from "mdi-material-ui";

const HistoryItem = ({ kind }) => {
  return (
    <ListItem title={kind}>
      <ListItemAvatar>
        <Avatar><AccountQuestion /></Avatar>
      </ListItemAvatar>
      <ListItemText primary={`Unknown history kind -- ${kind}`} />
    </ListItem>
  );
};

HistoryItem.propTypes = {
  kind: PropTypes.string.isRequired
};

export default HistoryItem;
