export class CustomError extends Error {
    constructor({ message, cause, name, code }) {
        super(message, { cause });
        this.name = name;
        this.code = code;
    }
}