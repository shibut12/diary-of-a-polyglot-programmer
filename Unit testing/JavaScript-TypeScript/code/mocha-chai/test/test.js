'use strict';

var chai = require('chai'),
expect = chai.expect;

chai.should();

function isEven(num){
    return num % 2 === 0;
}

describe('Unit tests', function(){
    it('Should return true when number is even', function(){
        isEven(4).should.be.true;
    });

    it('Should return false when number is odd', function(){
        isEven(3).should.be.false;
    })
});

function add(num1, num2){
    return num1+num2;
}

describe('add without setup/teardown', function(){

    var num;

    beforeEach(function(){
        num = 5;
    });
    
    afterEach(function(){
        //can be run as teardown
    })

    it('Should be ten when adding 5 to 5', function(){
        num = add(num, 5);
        num.should.be.equal(10);
    })

    // it.skip will skip the test
    it.skip('Should be twelve when adding 7 & 5', function(){
        add(num, 7).should.equal(12);
    })
     // it.skip will skip the test
     xit('Should be thirteen when adding 8 & 5', function(){
        add(num, 7).should.equal(13);
    })
})