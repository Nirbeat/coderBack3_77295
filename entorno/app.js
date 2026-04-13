import express from "express";
import { entorno } from "./config.js";

const app = express();

app.listen(entorno.PORT, ()=>{
    console.log(`aplicacion corriendo en ${entorno.PORT}`)
});
