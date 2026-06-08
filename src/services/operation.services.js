import { CustomError } from "../error/CustomError.js"
import { OperationErrorDictionary } from "../error/operations.error.js"

export function dividir(dividendo, divisor) {
    if (divisor == 0) throw new CustomError(OperationErrorDictionary.ZERO_DIVISION_ERROR);
    return dividendo / divisor;
}