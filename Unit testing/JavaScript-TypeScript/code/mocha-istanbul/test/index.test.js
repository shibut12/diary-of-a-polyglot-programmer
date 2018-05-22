var chai = require('chai'),
    expect = chai.expect;

chai.should();

var sutIndex = require('../index');

describe('Tests for index.js', function(){
    it('GetStudent function should exist', function(){
        (sutIndex.GetStudent).should.be.a('function');
    });
});