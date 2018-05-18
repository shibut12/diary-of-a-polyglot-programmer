'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

chai.should();

describe('Unit tests for Sinon Mocks', function(){
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

    it('mock schedule', function(){
        var mock = sinon.mock(schedule);
        var expectation = mock.expects('classIsFull').once();

        student.addClass(schedule);
        
        expectation.verify();
    });
});