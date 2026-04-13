import express from "express";
import { environment } from "./config.js";
import { handleError, login } from "./customError.js";

const app = express();

app.use(express.json());

app.post('/api/user/login', async (req, res, next) => {
    const { user, password } = req.body;

    // ATRAPAREMOS LOS ERRORES
    try {
        const data = login(user, password);
        res.json(data);
    } catch (error) {
        // PROPAGAMOS EL ERROR AL PROXIMO MIDDLEWARE
        next(error);
    }
});

// USAMOS UN MIDDLEWARE AL FINAL DE LA CADENA DE RUTAS PARA GESTIONAR ERRORES
app.use(handleError);

app.listen(environment.PORT, () => {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`);
});