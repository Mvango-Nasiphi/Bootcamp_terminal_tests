import assert from "assert";
var greet = require('../greet').default;

describe('My greet function', function(){
    it('takes your name as a parameter and returns a greeting message' , function(){

        assert.equal(greet('Bob'), 'Hello, Bob');

        assert.equal(greet('Sam'), 'Hello, Sam');

    });

});
