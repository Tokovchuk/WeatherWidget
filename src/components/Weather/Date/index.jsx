import React from 'react';
import PropTypes from "prop-types";

const CurrentDate = (props) => {
  return (
    <div>
      <span>{props.date}</span>
    </div>
  );
};

CurrentDate.propTypes = {
 date: PropTypes.string.isRequired
};

export default CurrentDate;