import React, { } from 'react';
import Button from '../Button';

const OperationBtn = ({values, onClick}, key) => {
  return (
    // @ts-ignore
    <Button key={key} values={values} onClick={onClick} />
  );
}

export default OperationBtn;