'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

    chai.should();

    describe('sinon tests', function() {
        var student;

        beforeEach(function(){
            student = {
                dropClass: function(classId, cb){
                    //do stuff
                    cb();
                }
            };
        })

        describe('student.drop class', function(){
            it('should call the callback', function(){
                // var called = false;
                // function callback(){
                //     called = true;
                // };
                var spy = sinon.spy(); // this line is same as creating a call back function.
                student.dropClass(1, spy);
                spy.called.should.be.true; // same as expect(called).to.be.true;
            });
        });
    });