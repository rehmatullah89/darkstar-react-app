import React from 'react';

const index = ({ children, bgColor, classes }) => {
  return (
    <div className={`${bgColor} ${classes.height} ${classes}`}>{children}</div>
  );
};

export default index;
