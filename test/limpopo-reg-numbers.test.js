import assert from "assert";
import isFromLimpopo from "../limpopo-reg-numbers.js";

describe('Limpopo registration numbers function', function () {
    it('returns true if a registration number is for Limpopo otherwise returns false.', function () {

        assert.equal(isFromLimpopo('KTR 990 L'), true);

        assert.equal(isFromLimpopo('W 990 N'), false);

    });

});