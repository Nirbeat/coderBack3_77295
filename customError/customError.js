//DICCIONARIO DE OBJETOS DE ERRORES DE LOGIN (CON OBJETOS)
const ErrorDictionary = {
    EMPTY_PASSWORD: {
        cause: "Password vacío",
        message: "Se esperaba una cadena de texto, se recibió undefined",
        code: -1,
        name: "EMPTY_PASSWORD"
    },
    EMPTY_USER: {
        cause: "Usuario vacío",
        message: "Se esperaba una cadena de texto, se recibió undefined",
        code: -2,
        name: "EMPTY_USER"
    },
    WRONG_PASSWORD: {
        cause: "Credenciales inválidas",
        message: "El password ingresado no es válido",
        code: 1,
        name: "WRONG_PASSWORD"
    },
    WRONG_USER: {
        cause: "Credenciales inválidas",
        message: "El usuario no existe",
        code: 2,
        name: "WRONG_USER"
    }
}
//CLASE DE ERRORES PERSONALIZADOS (CON HERENCIA)
//LA VENTAJA DE HACERLO ASI ES QUE PUEDEN PASARSE OBJETOS CON LA CANTIDAD DE
// PROPIEDADES QUE NECESITEN (CODIGOS DE RESPUESTA, POR EJEMPLO)
class CustomError extends Error {
    constructor({ cause, message, code, name }) {
        super(message, { cause });
        this.code = code;
        this.name = name;
    }
}

//TRAER FUNCION DE LOGIN Y EJECUTAR LOS ERRORES PERSONALIZADOS
export function login(user, password) {
    if (!password) {
        throw new CustomError(ErrorDictionary.EMPTY_PASSWORD);
    }
    if (!user) {
        throw new CustomError(ErrorDictionary.EMPTY_USER);
    }
    if (password != "password") {
        throw new CustomError(ErrorDictionary.WRONG_PASSWORD);

    }
    if (user != "user") {
        throw new CustomError(ErrorDictionary.WRONG_USER);

    }
    if (user == "user" && password == "password") {
        console.log("Logueado exitosamente");
        return 0;
    }
}

// MIDDLEWARE PARA MANEJAR ERRORES
export function handleError(err, req, res, next) {
    if (err.code == 1) {
        console.log("enviar mail al usuario para avisarle");
    }
}