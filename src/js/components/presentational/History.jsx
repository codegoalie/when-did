import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";

import HistoryItem from "./HistoryItem.jsx";

const History = ({ items }) => {
  const listItems = items.map(item => (
    <HistoryItem key={item.kind + item.startedAt} {...item} />
  ));
  return <List>{listItems}</List>;
};

History.propTypes = {
  items: PropTypes.array.isRequired
};

export default History;
