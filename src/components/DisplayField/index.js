import React, { } from 'react';

const DisplayField = ({value}) => {
  return (
      <input type="text" id="result" value={value} readOnly/>
  );
}

export default DisplayField;