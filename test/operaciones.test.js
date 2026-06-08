import assert from "assert";
import { dividir } from "../src/services/operation.services.js";

describe("testeo de servicios de operacion", function () {
    it("debería devolver error si se divide por cero", function () {
        assert.throws(() => dividir(4, 0));
    });
})