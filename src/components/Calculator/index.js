import React, {useState, useEffect} from 'react';
import DisplayField from '../DisplayField';
import { CalculatorButtons } from '../../constList';

import CalcProcessor from '../../calcProcessor';
import ButtonsGrid from '../ButtonsGrid';
import DigitalBtn from '../DigitalBtn';
import OperationBtn from '../OperationBtn';

const Calculator = () => {
    const [output, setOutput] = useState("");

    useEffect (() => {
        console.log(output);
    });

    const onButtonClick = (buttonType, buttonValue) => {
        switch (buttonType) {
            case DigitalBtn:    
            CalcProcessor.processDigit(buttonValue);
            break;
            case OperationBtn:    
            CalcProcessor.processOperation(buttonValue);
            break;
            default:
            break;
        }
        setOutput(CalcProcessor.output);
    }

    return (
    <form id='calc-contain'>
        <DisplayField value={output}/>
        <ButtonsGrid buttons={CalculatorButtons} onClick={onButtonClick}/>
    </form> 
   );
}

export default Calculator;