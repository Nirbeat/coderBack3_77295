// DATOS CORRECTOS
// user = "user"
// password = "password"

// DESARROLLAR LA FUNCIÓN DE LOGIN SEGÚN LO PEDIDO, PERO
// LUEGO DE DEFINIR LOS TEST
function login(user, password) {
    if (!password) {
        console.log("No se ha proporcionado un password");
        return -1;
    }
    if (!user) {
        console.log("No se ha proporcionado un usuario");
        return -2;
    }
    if (password != "password") {
        console.log("Contraseña incorrecta");
        return 1;
    }
    if (user != "user") {
        console.log("Usuario incorrecto");
        return 2;
    }
    if (user == "user" && password == "password") {
        console.log("Logueado exitosamente");
        return 0;
    }
}
// DEFINIR VARIABLES DE TESTS A PASAR Y PASADOS
let testsPasados = 0;
const testsTotales = 5;
// EVALUAR TODOS LOS CASOS:
// Si se pasa un password vacío, la función debe consologuear
// (“No se ha proporcionado un password”) y retornar codigo -1
const test1 = login("user", "");
if (test1 == -1) {
    console.log("test 1 pasado");
    testsPasados += 1;
} else {
    console.log("test 1 falló");
}
// Si se pasa un usuario vacío, la función debe consologuear
// (“No se ha proporcionado un usuario”) y retornar codigo -2
const test2 = login("", "password");
if (test2 == -2) {
    console.log("test 2 pasado");
    testsPasados += 1;
} else {
    console.log("test 2 falló");
}
// Si se pasa un password incorrecto, consologuear (“Contraseña incorrecta”) y
// retornar codigo 1
const test3 = login("user", "asdasdasd");
if (test3 == 1) {
    console.log("test 3 pasado");
    testsPasados += 1;
} else {
    console.log("test 3 falló");
}
// Si se pasa un usuario incorrecto, consologuear (“Credenciales incorrectas”) y
// retornar codigo 2
const test4 = login("asdasdasd", "password");
if (test3 == 1) {
    console.log("test 4 pasado");
    testsPasados += 1;
} else {
    console.log("test 4 falló");
}
// Si el usuario y contraseña coinciden, consologuear (“logueado”) y
// retornar codigo 0
const test5 = login("user", "password");
if (test5 == 0) {
    console.log("test 5 pasado");
    testsPasados += 1;
} else {
    console.log("test 5 falló");
}
// NOTIFICAR CUANTOS TEST HAN PASADO
if (testsPasados == testsTotales) {
    console.log("se han pasado todos los test");
}
else {
    console.log(`se han pasado ${testsPasados} de ${testsTotales}`);
}
