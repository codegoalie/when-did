import React from "react";
import PropTypes from "prop-types";

const Dummy = ({ text }) => <div className="dummy">{text}</div>;

Dummy.propTypes = {
  text: PropTypes.string.isRequired
};

export default Dummy;
