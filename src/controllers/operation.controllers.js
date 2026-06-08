import { dividir } from "../services/operation.services.js";

export function divide(req, res, next) {
    try {
        const { divisor, dividendo } = req.params;
        const resultado = dividir(dividendo, divisor);
        res.status(200).json(resultado);
    } catch (error) {
        next(error);
    }
}

export function errorResponse(req, res, next) {
    try {
        res.send("ocurrio una operacion inválida")
    } catch (error) {
        res.send("ocurrio un error inesperado")
    }
}