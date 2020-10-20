
class CalculatorProcessor {
    #variables = ["",""];
    #operation = "";
    #curVariable = 0;
    #expression = "";

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
        this.#expression = this.#variables[0]+this.#operation+this.#variables[1];
    }

    processOperation(operation) {
        switch (operation) {
            case '+':
            case '-':
            case '*':
            case '/':
                this.#operation = operation;
                this.#curVariable = 1;
                break;
            case '.':
                if (this.#variables[this.#curVariable].indexOf(operation) === -1)
                    this.processDigit(operation)
                break;
            case "C":
                this.reset();
                break;
            case '=':
                let res;
                // eslint-disable-next-line no-eval
                res = eval(this.#expression);
                // fix .00000001 in floating number operations
                res = Math.floor(res * 100000)/100000;
                this.reset();
                this.#expression = res.toString();
                this.#variables[0] = this.#expression;
                break;
            default:
                break;
        }
        this.updateExpression();
    }
    get output() {
        return this.#expression;
    }
}

const CalcProcessor = new CalculatorProcessor();

export default CalcProcessor;