import { Command } from 'commander';
import { config } from 'dotenv';

// CREAR PROGRAMA CON COMMANDER PARA EJECUTAR .env EN DISTINTOS ENTORNOS
// UNA VEZ CONFIGURADO, CREAR OBJETO DE VARIABLES Y EXPORTARLO
const program = new Command();

program
    .option("-m, --mode <mode>", "modo de trabajo");

program.parse();

const argumentos = program.opts();

// EL METODO CONFIG ADMITE UN OBJETO DE CONFIGURACION QUE ESTABLECE 
// LA PROPIEDAD PATH COMO LA RUTA DONDE ESTA EL ARCHIVO QUE SE QUIERE 
// LEER

console.log(argumentos)
if (argumentos.mode == "development") config({ path: ".env.dev" });
if (argumentos.mode == "production") config({ path: ".env.prod" });

// // EL OBJETO DE VARIABLES DE ENTORNO SE CREARÁ CON LOS VALORES QUE
// // HAYA LEVANTADO EL PROGRAMA DE ACUERDO A LOS VALORES DE LOS
// // ARGUMENTOS QUE RECIBE COMMANDER
export const environment = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE_URL
}