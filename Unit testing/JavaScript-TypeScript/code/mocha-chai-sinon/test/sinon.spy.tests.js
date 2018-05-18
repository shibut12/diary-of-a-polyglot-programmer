'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

    chai.should();

    describe('sinon tests', function() {
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
                }
            };

            schedule = {
                dropClass: function(){
                    console.log('class dropped');
                }
            }
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

            it('should call the callback and log to the console', function(){
                function onClassDropped(){
                    console.log('onClassDropped was called');
                };

                var spy = sinon.spy(onClassDropped); // Creates a mocked object of onClassDropped, it still call the function (will log data on console)
                
                student.dropClass(1, spy);

                spy.called.should.be.true;
            });

            it('should call the callback even if it\'s a method of an object', function(){
                sinon.spy(schedule, 'dropClass');
                student.dropClass(1, schedule);
                schedule.dropClass.called.should.be.true;
            });


        });
    });