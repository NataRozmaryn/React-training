import BasicOperation from "./basicOperation";

class BinaryOperation extends BasicOperation {

    constructor (operation, evaluateCb, expressionCb) {
        super(operation, (vars) => evaluateCb(parseFloat(vars[0]), parseFloat(vars[1])),
         expressionCb ? expressionCb : (operation, vars) => vars[0] + operation + vars[1]);
    }
}

export default BinaryOperation;