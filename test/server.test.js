import assert from "assert";
import supertest from "supertest";

const requester = supertest("http://localhost:3000");

describe("test del server", async function () {

    it("debe devolver codigo 200 si 'divisor' es distinto a cero", async function () {

        const { statusCode } = await requester.get("/4/2");
        assert.equal(statusCode, 200, "el servidor responde " + statusCode);
    });
})