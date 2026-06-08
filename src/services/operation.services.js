export function dividir(dividendo, divisor) {
    if (divisor == 0) throw new Error("no se puede dividir por cero");
    return dividendo / divisor;
}