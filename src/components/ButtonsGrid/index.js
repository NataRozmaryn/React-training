import React, { } from 'react';

const ButtonsGrid = ({buttons, onClick}) => {
  const buttonClick = (button, value) => {
    onClick(button, value);
  }
  return (
    buttons.map((button, index) => {
        return React.createElement(button[0], {
            key: index,
            values: button[1],
            onClick: (value) => buttonClick(button[0], value)
        });
    })
  );
}

export default ButtonsGrid;