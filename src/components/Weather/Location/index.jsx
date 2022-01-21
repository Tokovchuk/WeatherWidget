import React from 'react';
import PropTypes from "prop-types";

const Location = (props) => {
  return (
    <div>
      <span>{props.city}, {props.country}</span>
    </div>
  );
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
}

export default Location;