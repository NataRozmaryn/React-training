class BasicOperation {
    #evaluateCb;
    #expressionCb;
    #expression;
    #result;
    #operation;

    get _evaluateCb () {
        return this.#evaluateCb;
    }

    get expressionCb () {
        return this.#expressionCb;
    }

    get operation () {
        return this.#operation;
    }

    get expression () {
        return this.#expression;
    }

    get result () {
        return this.#result;
    }

    constructor (operation, evaluateCb, expressionCb) {
        this.#operation = operation;
        this.#evaluateCb = evaluateCb;
        this.#expressionCb = expressionCb;
    }
    evaluate = (vars) => {
        this.#expression = this.#expressionCb(this.#operation, vars);
        this.#result = this.#evaluateCb(vars);
        return this.#result;
    };

}

export default BasicOperation;