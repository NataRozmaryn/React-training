import React, { } from 'react';
import Button from '../Button';

const DigitalBtn = ({values,onClick}) => {
  return (
        // @ts-ignore
        <Button values={values} onClick={onClick} />      
  );
}
export default DigitalBtn;