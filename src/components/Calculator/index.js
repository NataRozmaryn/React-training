import React, {Component} from 'react';
import DisplayField from '../DisplayField';
import { CalculatorButtons, engineeringCalculatorButtons, DisplayStyles } from '../../constList';

import CalcProcessor, { OperationButtons } from '../../processor/calcProcessor';
import ButtonsGrid from '../ButtonsGrid';
import DigitalBtn from '../DigitalBtn';
import OperationBtn from '../OperationBtn';
import History from '../History';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
            openHistory: 0,
            moreOption: 0,
            calcBtns: CalculatorButtons,
            class: '',
            history:[],
            displayStyle:'',
        }
    }  

    onButtonClick = (buttonType, buttonValue) => {
        let res, memory;
        switch (buttonType) {
            case DigitalBtn:    
                CalcProcessor.processDigit(buttonValue);
                break;
            case OperationBtn:
                switch(buttonValue)
                {
                    case OperationButtons.history:
                        this.setState({openHistory: 1});
                        break;
                    case OperationButtons.basic:
                    case OperationButtons.engineering:
                        let btns;
                        this.setState({moreOption: !this.state.moreOption}, () => {
                            btns = this.state.moreOption ? engineeringCalculatorButtons : CalculatorButtons;
                            this.setState({calcBtns: btns});
                        });
                        break;
                    default:
                        CalcProcessor.processOperation(buttonValue);
                        break;
                }
            break;
            default:
                break;
        }

        let displayStyle;
        switch(buttonValue) {
            case OperationButtons.evaluate:
                displayStyle = DisplayStyles.RESULT;
                break;
            case OperationButtons.cancel:
                displayStyle = DisplayStyles.CLEAR;
                break;    
            default:
                displayStyle = DisplayStyles.VARIABLES;
                break;
        }
        this.setState({displayStyle: displayStyle});
        res = CalcProcessor.output;
        memory = CalcProcessor.history;
        this.setState({output: res});
        this.setState({history: memory});
    }
    onHistSelect = (val) => {
        this.setState({output: val, openHistory: 0});
    }
    clearHistory = () => {
        this.setState({history: CalcProcessor.history, openHistory: 0});
    }
    render() {
        const output = this.state.output;
        const openHistory = this.state.openHistory;
        const calcBtns = this.state.calcBtns;
        const style = this.state.displayStyle;
        const history = this.state.history;
        return (
        <form id='calc-contain'>
            <DisplayField value={output} style={style}/>
            {openHistory ? <History history={history} onClick={this.onHistSelect} onClear={this.clearHistory}/> :
            <ButtonsGrid buttons={calcBtns} onClick={this.onButtonClick}/>}   
        </form> 
    );
    }
}

export default Calculator;