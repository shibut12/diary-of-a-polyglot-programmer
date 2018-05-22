'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

describe('Inclusive tests', function(){
    it.skip('This test is not ready yet', function(){
        false.should.be.false;
    });

    it('True should be true', function(){
        true.should.be.true;
    })
});