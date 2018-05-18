'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

    chai.should();

describe('Unit tests for Sinon stubs', function(){
    var student, schedule;

        beforeEach(function(){
            student = {
                dropClass: function(classId, cb){
                    //do stuff
                    if(!!cb.dropClass){
                        cb.dropClass();
                    }
                    else
                    {
                        cb();
                    }
                },
                addClass: function(){
                    if(!schedule.classIsFull()){
                        //do stuff
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            };

            schedule = {
                dropClass: function(){
                    console.log('class dropped');
                },
                classIsFull: function(){
                    return true;
                }
            }
        });

    it('Should call a stubbed method', function(){
        var stub = sinon.stub(schedule);
        student.dropClass(1, stub.dropClass);
        
        stub.dropClass.called.should.be.true;
    });
    it('Should return true when the class is not full', function(){
        var stub = sinon.stub(schedule);
        stub.classIsFull.returns(false);

        var returnVal = student.addClass(stub);
        returnVal.should.to.be.true;
    });
});