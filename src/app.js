import e from "express";
import { dividir } from "./services/operation.services.js";
import { environment } from "./config/environment.js";

const app = e();

app.listen(environment.PORT, () => {
    console.log("server up on " + 3000);
});

app.get("/:dividendo/:divisor", (req, res, next) => {
    try {
        const { dividendo, divisor } = req.params;
        const resultado = dividir(dividendo, divisor);
        res.status(200).json({ resultado });
    } catch (error) {
        next(error);
    }
});