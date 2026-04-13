//CREAMOS FUNCION listNumbers CON N ARGUMENTOS
//SI SE PASA ARGUMENTO NO NUMERICO, DA ERROR POR CONSOLA MOSTRANDO 
//EL TIPO DE DATO DE LOS ARGUMENTOS
//ESCAPAR DEL PROCESO CON -4
//OBTENER CODIGO DE ESCAPE CON UN LISTENER Y MENSAJE POR CONSOLA =>
//"Proceso finalizado por argumentación inválida en una función"

function listNumbers(...numbers) {
    const types = numbers.every((number) => {
        return typeof number === "number";
    })

    if (!types) {
        process.exit(-4);
    }
}

process.on("exit", (exitCode) => {
    console.log(exitCode);
});

// // ESCUCHAR EL EVENTO EXIT Y EJECUTAR LOS MENSAJES CORRESPONDIENTES
// // SEGÚN EL CÓDIGO DEL MENSAJE

process.on('exit', exitCode => {
    // console.log(exitCode)
    if (exitCode == -4) {
        console.log("Proceso finalizado por argumentación inválida en una función");
    }
    if (exitCode == 0) {
        console.log("Proceso finalizado correctamente");
    }
});

listNumbers(1, 2, 3, 4, false);

//------------------------------------------------------------------------------------------------------------------
// //VERSION CON UNCAUGHTEXCEPTION
// function listNumbers(...numbers) {
//     const types = numbers.every((arg) => {
//         return typeof arg === "number"
//     })

//     if (!types) {
//         const typesArr = numbers.map(args => typeof args);
//         throw new Error("invalid arguments", { cause: typesArr });
//     }
// }

// process.on('uncaughtException', exception => {
//     process.exitCode = -4;
// })

// process.on('exit', exitCode => {
//     if (exitCode == -4) {
//         console.log({
//             message: "Proceso finalizado por argumentación inválida en una función",
//             exitCode
//         });
//     }
// });

// listNumbers(1, 2, 6);