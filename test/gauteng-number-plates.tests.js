import assert from "assert";
var isFromGauteng = require('../gauteng-number-plates').default;

describe('Gauteng number plates function', function () {
    it('returns true if a registration number is for Gauteng otherwise returns false.', function () {

        assert.equal(isFromGauteng('DR 45 LR GP'), true);

        assert.equal(isFromGauteng('CJ 123 908'), false);

    });

});