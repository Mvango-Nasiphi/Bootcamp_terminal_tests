import assert from 'assert';
import greet from '../greet.js';

describe('My greet function', function(){
    it('takes your name as a parameter and returns a greeting message', function(){

        assert.equal('Hello, Bob', greet('Bob'));

        assert.equal('Hello, Sam', greet('Sam'));

    });

});
