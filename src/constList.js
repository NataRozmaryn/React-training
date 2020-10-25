import OperationBtn from "./components/OperationBtn";
import DigitalBtn from "./components/DigitalBtn";
import Separator from "./components/Separator";
import { OperationButtons } from "./calcProcessor";

export const CalculatorButtons = 
[
    [OperationBtn, [OperationButtons.history, OperationButtons.engineering, OperationButtons.cancel]],
    [Separator],
    [DigitalBtn, [1,2,3]],
    [OperationBtn, OperationButtons.divide],
    [Separator],
    [DigitalBtn, [4,5,6]],
    [OperationBtn, OperationButtons.subtract],
    [Separator],
    [DigitalBtn, [7,8,9]],
    [OperationBtn, OperationButtons.add],
    [Separator],
    [OperationBtn, OperationButtons.dot],
    [DigitalBtn, [0]],
    [OperationBtn, [OperationButtons.evaluate, OperationButtons.multiply]],
]
export const engineeringCalculatorButtons = [...CalculatorButtons];
engineeringCalculatorButtons.splice(
    2,0,[OperationBtn, 
        [OperationButtons.sqrt, OperationButtons.pow,
            OperationButtons.log2, OperationButtons.factorial]], [Separator]
    );
engineeringCalculatorButtons.splice(
    0,1,[OperationBtn, [OperationButtons.history, OperationButtons.basic, OperationButtons.cancel]]);