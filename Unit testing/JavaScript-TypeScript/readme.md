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

### Hooks

Hooks are used to set up pre-conditions and cleanup code after tests. ANy hook can have an optional description as well.

```js
describe('Hooks', function(){
    describe('Hooks with no description', function(){
        before(function(){
            // Runs before all tests in this block
        });

        after(function(){
            // Runs after all tests in the block
        });

        beforeEach(function(){
            // Runs before every test in the block
        });

        afterEach(function(){
            // Runs after every tests in the block
        });

        it('unit test 1', function(){
            true.should.be.true;
        });

        // other tests
    });
    describe('Hooks with description', function(){

        before('Description of before hook', function(){
            // Runs before all tests in this block
        });

        after('Description of after hook', function(){
            // Runs after all tests in the block
        });

        beforeEach('Description of beforeEach hook', function(){
            // Runs before every test in the block
        });

        afterEach('Description of afterEach hook', function(){
            // Runs after every tests in the block
        });

        it('unit test 1', function(){
            true.should.be.true;
        });

        // other tests
    });
});
describe('Hooks', function(){
    before(function(){
        // Runs before all tests in this block
    });

    before('Description of before hook', function(){
        // Runs before all tests in this block
    });

    after(function(){
        // Runs after all tests in the block
    });

    after('Description of after hook', function(){
        // Runs after all tests in the block
    });

    beforeEach(function(){
        // Runs before every test in the block
    });

    beforeEach('Description of beforeEach hook', function(){
        // Runs before every test in the block
    });

    afterEach(function(){
        // Runs after every tests in the block
    });

    afterEach('Description of afterEach hook', function(){
        // Runs after every tests in the block
    });

    it('unit test 1', function(){
        true.should.be.true;
    });

    // other tests
});
```

### Inclusive tests

The `.skip()` can be used to skip a test or an entire test suite, anything that is _skipped_ will be marked as __pending__.

```js
describe('Skipping tests', function(){
    it.skip('test is not ready yet', function(){
        true.should.be.true;
    });
    it('true should be true', function(){
        true.should.be.true;
    });
});
```

### Retry tests

`.retries(n)` can be used to retry failed tests up to __n__ times. This feature is designed to handle _end-to-end_ tests, where the resources cannot be mocked/stubbed.

```js
describe('Retries', function(){
    // Retry all tests in this suite up to 4 times
    this.retries(4);

    beforeEach(function(){
        browser.get('https://www.codewithdot.net.com');
    });

    it('Should succeed on the 3rd try', function(){
        //Specify this test to only retry up to 2 times
        this.retries(2);

        expect($('.foo').isDisplayed()).eventually.to.be.true;
    });
});
```

### Run same test for a set of values

The `.forEach` can be used to _iterate_ over a set of values and run same test code for a range of values.

```js
var chai = require('chai'),
    expect = chai.expect;

chai.should();

function Add(number1, number2){
    return number1 + number2;
}

describe('Test add function for a set of values', function(){
    var testValues = [
        {number1: 1, number2: 1, expected: 2},
        {number1: 2, number2: 2, expected: 4},
        {number1: 700, number2: 300, expected: 1000}
    ];

    testValues.forEach(function(test){
        it('Add function should return ' +
            test.expected +
            ' when passed ' +
            test.number1 +
            ' and ' +
            test.number2, function(){
                (Add(test.number1, test.number2)).should.equal(test.expected);
        });
    });
});
```

### Timeouts

`timeout(n)` can be used to apply timeout for a entire test suite or a specific test. This can be used on __hooks_ as well.

```js
describe('a suite of tests', function() {
  this.timeout(500);

  it('should take less than 500ms', function(done){
    setTimeout(done, 300);
  });

  it('should take less than 500ms as well', function(done){
    setTimeout(done, 250);
  });
})
```

### Reporters

Reporters display test report to screen. Reporters can be specified by passing as command line argument while invoking `mocha` to start tests.

Example

```bash
    mocha test/ --reporter dot
```

#### SPEC

Is the default reporter for _Mocha_, The spec reporter outputs a hierarchical view nested just as the test cases are.

### Dot Matrix

Represents test time in the test took to run in dot `.`, successful tests in a green comma `,` and failed tests in red exclamation `!` mark.

```bash
> mocha test/ --reporter dot



  ,.......,,

  7 passing (15ms)
  3 pending

```

### NYAN

A colorful test reporter.

```bash
> mocha test/ --reporter nyan

 7   -_-_-_-_-_-_,------,
 0   -_-_-_-_-_-_|   /\_/\
 3   -_-_-_-_-_-^|__( o .o)
     -_-_-_-_-_-  ""  ""

  7 passing (67ms)
  3 pending
```

#### TAP

Generates report for _TAP ( Test anything protocol)_ [link](https://en.wikipedia.org/wiki/Test_Anything_Protocol).

```bash
> mocha test/ --reporter TAP

1..10
ok 1 Inclusive tests This test is not ready yet # SKIP -
ok 2 Inclusive tests True should be true
ok 3 Test add function for a set of values Add function should return 2 when passed 1 and 1
ok 4 Test add function for a set of values Add function should return 4 when passed 2 and 2
ok 5 Test add function for a set of values Add function should return 1000 when passed 700 and 300
ok 6 Unit tests Should return true when number is even
ok 7 Unit tests Should return false when number is odd
ok 8 add without setup/teardown Should be ten when adding 5 to 5
ok 9 add without setup/teardown Should be twelve when adding 7 & 5 # SKIP -
ok 10 add without setup/teardown Should be thirteen when adding 8 & 5 # SKIP -
# tests 7
# pass 7
# fail 0
```

#### Landing a.k.a Landing strip

Simulate a plane landing strip in unicode.

```bash
> mocha test/ --reporter landing


  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  ⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅⋅✈
  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  7 passing (119ms)
  3 pending
```

#### List

Displays report in a list

```bash
mocha test/ --reporter list
```

#### Progress

Displays report in a progress bar

```bash
mocha test/ --reporter progress
```

#### JSON

Displays report in a JSON

```bash
mocha test/ --reporter json
```

#### MIN

Displays minimal summary of the tests.

```bash
mocha test/ --reporter min
```

#### DOC

Displays an HTML doc for test report.

```bash
mocha test/ --reporter doc
```

#### xunit

Displays a xunit compatible xml report for test report.

```bash
mocha test/ --reporter xunit
```

#### markdown

Displays test report in markdown

```bash
mocha test/ --reporter markdown
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