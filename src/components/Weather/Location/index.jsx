import React from 'react';

const Location = (props) => {
  return (
    <div>
      <span>{props.city}, {props.country}</span>
    </div>
  );
};

export default Location;