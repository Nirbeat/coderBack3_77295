import assert from "assert";
import { dividir } from "../src/services/operation.services.js";

describe("test de division", function () {
    it("debe dar error al dividir por cero", function () {
        assert.throws(() => dividir(3, 0));
    });
});
