import React, { } from 'react';

const DisplayField = ({value, style}) => {
  console.log(style);
  return (
      <input className={style} type="text" id="result" value={value} readOnly/>
  );
}

export default DisplayField;