import OperationBtn from "./components/OperationBtn";
import DigitalBtn from "./components/DigitalBtn";
import Separator from "./components/Separator";
import { OperationButtons } from "./processor/calcProcessor";

const NumbersButtons = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    ZERO: 0,
};

export const DisplayStyles = {
    VARIABLES: "variables",
    RESULT: "result",
    CLEAR: ""
};

const BasicButtons = [
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
];

const AfterButtons = [
    [OperationBtn, 
    [OperationButtons.sqrt, OperationButtons.pow,
        OperationButtons.log2, OperationButtons.factorial]], [Separator]
];

const BeforeButtons = [
    [OperationBtn, [OperationButtons.history, OperationButtons.engineering, OperationButtons.cancel]],
    [Separator]
];
export const CalculatorButtons = [
    ...BeforeButtons,
    ...BasicButtons
];
export const engineeringCalculatorButtons = [
    ...BeforeButtons,
    ...AfterButtons,
    ...BasicButtons,
];