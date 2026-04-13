import express from "express";
import { environment } from "./config.js";

const app = express();

app.listen(environment.PORT, () => {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`);
    console.log(`conectado a ${environment.DATABASE}`);
});