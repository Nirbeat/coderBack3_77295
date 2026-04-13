import { Command } from 'commander';

const program = new Command();

// // COMMANDER YA NOS DA LA FLAG -h O --help PARA VER COMANDOS
// // Y FLAGS DISPONIBLES EN EL PROGRAMA
// program
//     .option("-d", "Variable para debug", false)
//     .option("-p, --port <port>", "puerto de escucha", 8080)
//     .option("--mode <mode>", "modo de trabajo", "desarrollo")
//     .requiredOption("-u <user>", "usuario en uso del programa", "mensaje de error por falta de argumento")
//     .option("-l, --l [letters...]", "multiples cadenas de texto", []);

// // SIN EL PARSE NO ANDA COMMANDER
// program.parse();
// // CON ESTE METODO SE ACCEDE A LOS OBJETOS
// console.log(program.opts());

// -----------------------------------------------------------------------------------------------
// EJEMPLO DE COMO FUNCIONA GIT COMMIT USANDO SUBCOMANDOS, FLAGS Y ACTION 
program
    .command("commit")
    .description("agrega los cambios a la version")
    .option("-m <message>", "mensaje del commit")
    .option("-a", "agrega todos los cambios")
    .action((options) => {
        if (options.a) {
            console.log("Agregando todos los cambios");
        }
        if (options.m) {
            console.log("Agregando cambios con mensaje: " + options.m);
        }
    });

program.parse();