import assert from "assert";
import isFromCapeTown from "../isFromCapeTown.js";

describe('Cape town registration numbers function', function () {
    it('returns true if a registration number is for Cape Town otherwise returns false.', function () {

        assert.equal(isFromCapeTown('CA 123 908'), true);

        assert.equal(isFromCapeTown('CJ 123 908'), false);

    });

});