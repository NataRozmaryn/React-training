import React, { } from 'react';

const Button = ({values, onClick}, key) => {
  let buttons = Array.isArray(values) ? values : [values];
  return (
    buttons.map((button, index) => {
      return <input type="button" key={key+"btn"+index} value={button} onClick={() => onClick(button)}/>
    })
  );
}

export default Button;