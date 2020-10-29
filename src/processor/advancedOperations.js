import BinaryOperation from "./binaryOperation";
import { OperationButtons } from "./calcProcessor";

export class PowOperation extends BinaryOperation {
    constructor () {
        super(OperationButtons.pow, (x,y) => Math.pow(x, y),
            (operation, vars) => operation+"(" + vars[0] + ", " + vars[1] + ")");
    }
}
