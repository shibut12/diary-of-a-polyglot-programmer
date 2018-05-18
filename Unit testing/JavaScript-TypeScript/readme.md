# Unit testing JavaScript or TypeScript

## Scope

* Mocha - A JavaScript test framework. [https://mochajs.org/](https://mochajs.org/)
* ChaiJS - An Assertion library. [http://www.chaijs.com/](http://www.chaijs.com/)
* SinonJS - Standalone test spies, stubs and mocks for JavaScript. [http://sinonjs.org](http://sinonjs.org)

## MochaJS

### Installation

```shell
# install globally
npm install --global mocha
# install into the project and save into package json
npm install --save-dev mocha
```

### Getting started

```shell
mkdir mocha-test
cd mocha-test

npm init # accepts all defaults

npm install mocha --saveDev

touch test.js
```

Add following code into test.js

```js
var assert = require('assert');
describe('Array', function(){
    describe('#IndexOf()', function(){
        it('Should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        })
    });
});
```

Run tests with MochaJS

```shell
npm test
```

## ChaiJS

Chai is a BDD/TDD assertion library for node and JavaScript. Mocha is the preferred TestRunner for ChaiJS.

### Assertion styles

#### Assert

#### Expect

#### Should

### Configuration

## SinonJS

__Sinon__ is a JavaScript library which allows to isolate the code that we are testing. Sinon `v5.0.7` is written in _ES5.1` and requires no transpiler or polyfills on Node.js LTS versions.

### Fakes

### Spies

`Spys` are a way to watch singly function. `Spy` allows to create spy on the implementation of a dependency. `Spy` is really useful in the use cases like verifying a specific function is called. The disadvantage of spy is that it will call the real underlying implementation. __SPY__ are not true mocks.

#### Creating a simple SPY

```js
var spy = sinon.spy(); // Create a spy
//Act
SystemUnderTest.SomeFunction(spy);
//Assert
spy.called.should.be.true;
```

#### Creating spy of a specific function

```js
function dependency(){
    console.log('Dependency was called');
};

var spy = sinon.spy(onClassDropped); //Creates a spy

//Act
student.dropClass(1, spy);

//Assert
spy.called.should.be.true;
```

#### Creating a spy of an Object

```js
schedule = {
    dropClass: function(){
        console.log('class dropped');
    }
}

it('should call the callback even if it\'s a method of an object', function(){
    sinon.spy(schedule, 'dropClass');
    student.dropClass(1, schedule);
    schedule.dropClass.called.should.be.true;
});
```

### Stubs

`Stubs` are a way to watch an entire object. When a stub is being created, it walks through  each an every property of the given object and replace it with a spy. Because of this when a spy is passed in an argument, it never calls the underlying implementation of the object. Stubs can be used to setup values to test edge scenarios without impacting the real implementation.

#### Simple stubs

```js
it('Should call a stubbed method', function(){
    var stub = sinon.stub(schedule);
    student.dropClass(1, stub.dropClass);

    stub.dropClass.called.should.be.true;
});
```

#### Setup values using stub

```js
it('Should return true when the class is not full', function(){
    var stub = sinon.stub(schedule);
    stub.classIsFull.returns(false);

    var returnVal = student.addClass(stub);
    returnVal.should.to.be.true;
});
```

### Mocks

WIth mock, you can setup expectations before the code runs. For example, you can say, a certain function must be called a specific number of times, and at the end you verify all using a single `verify`. This is really useful when verifying multiple calls.

```js
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
```

### Spy calls

### Fake timers

### Fake XHR and server

### JSON-P

### Assertions

### Matchers

### Sandboxes

### Utils