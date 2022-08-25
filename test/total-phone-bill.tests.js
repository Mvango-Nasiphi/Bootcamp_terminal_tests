import assert from "assert";
var totalPhoneBill = require('../total-phone-bill').default;

describe('Total phone bill function', function () {
    it('calculates the total bill for the data provided.', function () {

        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });

});