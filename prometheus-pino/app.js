import express, { json } from "express";
import { environment } from "./config.js";
import { login } from "./login.js";
import { loginErrorHandler } from "./customError.js";
import logger from "./pino.js";
import { register, loginSuccessCounter, loginFailureCounter } from "./prometheus.js";

const app = express();

app.use(json());

// Endpoint para métricas de Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.post('/api/user/login', async (req, res, next) => {
    const { user, password } = req.body;
    try {
        const data = login(user, password);

        // Incrementar métrica de éxito
        loginSuccessCounter.inc();

        logger.info(`Login exitoso: ${JSON.stringify({ user })}`);
        res.json({ message: "Login successful", data });
    } catch (error) {
        // Incrementar métrica de fallo
        loginFailureCounter.inc();

        logger.error(`Error al iniciar sesión: user=${user}. Motivo: ${error.message}`);
        next(error);
    }
});

// Middleware de manejo de errores
app.use(loginErrorHandler);

app.listen(environment.PORT, () => {
    logger.info(`aplicacion corriendo en puerto ${environment.PORT}`);
});
