const { default: BasicOperation } = require("./basicOperation");

class UnaryOperation extends BasicOperation {
    constructor (operation, evaluateCb, expressionCb) {
        super(operation, (vars) => evaluateCb(parseFloat(vars[0])),
         expressionCb ? expressionCb : (operation, vars) => operation + "(" + vars[0] + ")");
    }
}

export default UnaryOperation;