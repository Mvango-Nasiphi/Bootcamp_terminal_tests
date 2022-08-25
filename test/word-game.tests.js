import assert from "assert";
import longestWord from "../word-game";

describe('The longest word function', function () {
    it('Finds the longest word in the sentence.', function () {

        assert.equal('shipyard', longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
        assert.equal('barked', longestWord('The yellow dog barked loud'), "longestWord failing...");

    });

});


import assert from "assert";
import shortestWord from "../word-game";

describe('The shortest word function', function () {
    it('Finds the shortest word in the sentence.', function () {

        assert.equal('the', shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
        assert.equal('up', shortestWord('The dog barked loudly at the cat up the tree'), "shortestWord failing...");

    });

});



import assert from "assert";
import wordLengths from "../word-game";

describe('The word length function', function () {
    it('Sum the length of each word in a sentence', function () {

        assert.equal(32, wordLengths('The dog jumped over the shipyard fence'), "wordLengths is failing...");
        assert.equal(18, wordLengths('The dog barked loudly'), "wordLengths failing...");

    });

});


