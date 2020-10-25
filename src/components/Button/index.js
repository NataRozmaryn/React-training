import React, { } from 'react';

const Button = ({values, onClick}) => {
  let buttons = Array.isArray(values) ? values : [values];
  return (
    buttons.map((button) => {
      return <input type="button" key={button} value={button} onClick={() => onClick(button)}/>
    })
  );
}

export default Button;