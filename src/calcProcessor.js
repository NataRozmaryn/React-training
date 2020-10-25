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

class CalculatorProcessor {
    #variables = ["",""];
    #operation = "";
    #curVariable = 0;
    #expression = "";
    #history = [];

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
        if(this.#operation === "pow") {
            this.#expression = "pow(" + this.#variables[0] + ", " + this.#variables[1] + ")";
        } else {
            this.#expression = this.#variables[0] + this.#operation + this.#variables[1];
        }
    }
    factorial(n) {
        return (n !== 1) ? n * this.factorial(n - 1) : 1;
    }

    processUnaryOperation(operation, operationCb) {
        let histExpression;
        let x = parseFloat(this.#variables[0]);
        if (this.#curVariable === 1) {
            this.processOperation('=');
        }
        histExpression = operation+'('+this.#variables[0]+')';
        this.#variables[0] = operationCb(x).toString();
        this.#history.push([this.#variables[0], histExpression]);
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
                this.processUnaryOperation(operation, (x) => Math.sqrt(x));
                break;
            case OperationButtons.log2:
                this.processUnaryOperation(operation, (x) => Math.log2(x));
                break;
            case OperationButtons.factorial: 
                this.processUnaryOperation(operation, (x) => this.factorial(x));
                break;
            case OperationButtons.cancel:
                this.reset();
                break;
            case OperationButtons.evaluate:
                if (this.#curVariable === 1 && this.#variables[1] !== '') {
                    let res;
                    let histExpression;
                    if(this.#operation === "pow") {
                        res = Math.pow(parseFloat(this.#variables[0]), parseFloat(this.#variables[1]));
                        histExpression = "pow(" + this.#variables[0] + ", " + this.#variables[1] + ")";
                    } else {
                        // eslint-disable-next-line no-eval
                        res = eval(this.#expression);
                        histExpression = this.#variables[0] + this.#operation + this.#variables[1];
                    }
                    // fix .00000001 in floating number operations
                    res = Math.floor(res * 100000)/100000;
                    this.#history.push([res, histExpression]);
                    this.reset();
                    this.#expression = res.toString(); 
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
    clearHistory() {
        this.#history = [];
    }
}

const CalcProcessor = new CalculatorProcessor();

export default CalcProcessor;