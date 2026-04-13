import express from "express";
// IMPORTAR OPERACION COMPLEJA
import { operacionCompleja } from "./operacionCompleja.js";
// IMPORTAR FORK
import { fork } from "child_process";

const app = express();

app.get('/operacion-compleja', async (req, res) => {
    // // PROBAR PRIMERO LA OPERACION COMPLEJA PARA VER BLOQUEO
    // res.json({ result: operacionCompleja() })
    // //PROBAR LUEGO LA CREACION DE UN PROCESO HIJO
    // //EL MÉTODO FORK INICIA UN PROCESO CON RAÍZ EN EL FICHERO
    // //ESPECIFICADO
    const child = fork("./operacionCompleja.js");
    // // SE ENVÍA UN MENSAJE AL HIJO PARA QUE INICIE
    child.send("ejecutar la operacion compleja");
    // // SE ESTABLECE UNA ESCUCHA DE LA EMISION DE UN MENSAJE DESDE 
    // // EL PROCESO HIJO, DONDE SE RECIBE EL RESULTADO
    child.on("message", (result) => {
        res.json({ result });
    });

});

// ENDPOINT QUE USAREMOS PARA VER EL BLOQUEO
app.get('/saludo', async (req, res) => {
    res.send('hola');
});

app.listen(3000, () => console.log('server up'));