import BinaryOperation from "./binaryOperation";
import UnaryOperation from "./unaryOperation";
import { PowOperation } from "./advancedOperations";

export const OperationButtons = {
    add: "+",
    subtract: "-",
    multiply: "*",
    divide: "/",
    cancel: "C",
    dot: ".",
    evaluate: "=",
    history: "hist",
    engineering: "more",
    basic: "less",
    sqrt: "sqrt",
    pow: "pow",
    log2: "log2",
    factorial: "n!"
};

export const ArithmeticOperation = {
    [OperationButtons.add]: new BinaryOperation(OperationButtons.add, (x,y) => x + y),
    [OperationButtons.subtract]: new BinaryOperation(OperationButtons.subtract, (x,y) => x - y),
    [OperationButtons.multiply]: new BinaryOperation(OperationButtons.multiply, (x,y) => x * y),
    [OperationButtons.divide]: new BinaryOperation(OperationButtons.divide, (x,y) => x / y),
    [OperationButtons.pow]: new PowOperation(),
    [OperationButtons.sqrt]: new UnaryOperation(OperationButtons.sqrt, (x) => Math.sqrt(x)),
    [OperationButtons.log2]: new UnaryOperation(OperationButtons.log2, (x) => Math.log2(x)),
    [OperationButtons.factorial]: new UnaryOperation(OperationButtons.factorial, (x) => CalculatorProcessor.factorial(x)),
};

class ProcessorHistory {
    #history = [];

    add = (operation) => this.#history.push([operation.result, operation.expression]);
    clear = () => this.#history = [];
    length = () => this.#history.length;
    item = (index) => this.#history[index];
    map = (callbackfn, thisArg) => this.#history.map(callbackfn, thisArg);
}

class CalculatorProcessor {
    #variables = ["",""];
    #operation = "";
    #curVariable = 0;
    #expression = "";
    #history = new ProcessorHistory();

    processDigit(value) {
        this.#variables[this.#curVariable] += value.toString();
        this.updateExpression();
    }

    reset() {
        this.#expression = "";
        this.#curVariable = 0;
        this.#variables = ["",""];
        this.#operation = "";
    }

    updateExpression() {        
        if(this.#operation) {
            this.#expression = ArithmeticOperation[this.#operation].expressionCb(this.#operation, this.#variables);
        } else {
            this.#expression = this.#variables[0];
        }
    }
    static factorial(n) {
        return (n !== 1) ? n * this.factorial(n - 1) : 1;
    }

    processUnaryOperation(operation) {        
        if (this.#curVariable === 1) {
            this.processOperation(OperationButtons.evaluate);
        }

        let arithmeticOperation = ArithmeticOperation[operation];
        this.#variables[0] = arithmeticOperation.evaluate(this.#variables).toString();
        this.#history.add(arithmeticOperation);
    }

    processOperation(operation) {        
        switch (operation) {
            case OperationButtons.add:
            case OperationButtons.subtract:
            case OperationButtons.multiply:
            case OperationButtons.divide:
            case OperationButtons.pow:
                this.#operation = operation;
                this.#curVariable = 1;
                break;
            case OperationButtons.dot:
                if (this.#variables[this.#curVariable].indexOf(operation) === -1)
                    this.processDigit(operation)
                break;
            case OperationButtons.sqrt:
            case OperationButtons.log2:
            case OperationButtons.factorial: 
                this.processUnaryOperation(operation);
                break;
            case OperationButtons.cancel:
                this.reset();
                break;
            case OperationButtons.evaluate:
                if (this.#curVariable === 1 && this.#variables[1] !== '') {
                    let arithmeticOperation =  ArithmeticOperation[this.#operation];
                    arithmeticOperation.evaluate(this.#variables);
                    this.#history.add(arithmeticOperation);

                    this.reset();
                    this.#expression = arithmeticOperation.result.toString(); 
                    this.#variables[0] = this.#expression;
                } else {
                    this.#operation = '';
                    this.#curVariable = 0;
                }
                break;
            default:
                break;
        }
        this.updateExpression();
    }
    get output() {
        return this.#expression;
    }
    get history() {
        return this.#history;
    }
}

const CalcProcessor = new CalculatorProcessor();

export default CalcProcessor;