export function operacionCompleja() {
    let result = 0;

    for (let i = 0; i < 5e9; i++) {
        result++;
    }
    return result;
}

// IMPLEMENTAR ESCUCHA DEL PROCESO PRINCIPAL
process.on("message", (message) => {
    // console.log(message);
    const result = operacionCompleja();

    // // SE ENVÍA AL PROCESO PADRE EL RESULTADO
    process.send(result);
});
