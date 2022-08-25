import assert from "assert";
var isFromLimpopo = require('../vehicle-reg-number').default;

describe('Vehicle registration numbers function', function () {
    it('identify the origin of vehicle registration numbers.', function () {

        assert.equal(isFromBellville('CY 123'), true);
        
        assert.equal(isFromBellville('CJ 123'), false);

    });

});