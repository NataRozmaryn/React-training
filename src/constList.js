import OperationBtn from "./components/OperationBtn";
import DigitalBtn from "./components/DigitalBtn";
import Separator from "./components/Separator";

export const OperationButtons = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    cancel: "C",
    dot: ".",
    evaluate: "="
};

export const CalculatorButtons = 
[
    [OperationBtn, OperationButtons.cancel],
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