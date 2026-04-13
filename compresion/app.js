import e from "express";
import { environment } from "./config.js";
// IMPORTAR COMPRESSION
import compression from "express-compression";
const app = e();


// APLICAR COMPRESSION A TODA LA APLICACION
// EL OBJETO BROTLI LO QUE HACE ES HABILITAR EL ALGORITMO BROTLI
// POR DEFECTO EL ALGORITMO ES GZIP
app.use(compression({
    brotli: {
        enabled: true,
        zlib: { level: 6 }
    }
}));
app.get('/stringmuylarga', async (req, res) => {
    let cadena = "soy una string que se va a repetir hasta el infinito";

    for (let i = 0; i < 5e6; i++) {
        cadena += "o";
    }
    res.send(cadena);
})

app.listen(environment.PORT, () => {
    console.log(`aplicacion corriendo en puerto ${environment.PORT}`);
})
