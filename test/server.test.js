import assert from "assert";
import supertest from "supertest";

const requester = supertest("http://localhost:3000");

describe("testeo del server", function () {
    it("el servidor deberia responder con un status de 200 si la operacion es correcta", async function () {
        const { statusCode } = await requester.get("/operaciones/division/4/2");
        assert.equal(statusCode, 200, "el servidor respondió con " + statusCode)
    })
    it("el servidor deberia redireccionar a /operation-error si se efectua una operacion inválida", async function () {
        const { redirect } = await requester.get("/operaciones/division/4/0");
        assert.equal(redirect, true, "no redirige");
    })
})