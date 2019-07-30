import React from "react";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";

import HistoryItem from "./HistoryItem.jsx";
import FeedingHistoryItem from "./FeedingHistoryItem.jsx";
import DiaperHistoryItem from "./DiaperHistoryItem.jsx";

const History = ({ items }) => {
  const listItems = items.map(item => {
    switch (item.kind) {
      case "feeding":
        return (
          <FeedingHistoryItem key={item.kind + item.startedAt} {...item} />
        );
      case "diaper":
        return <DiaperHistoryItem key={item.kind + item.startedAt} {...item} />;
      default:
        return <HistoryItem key={item.kind + item.startedAt} {...item} />;
    }
  });
  return <List>{listItems}</List>;
};

History.propTypes = {
  items: PropTypes.array.isRequired
};

export default History;
