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

`Spy` allows to create spy on the implementation of a dependency. `Spy` is really useful in the use cases like verifying a specific function is called. The disadvantage of spy is that it will call the real underlying implementation. __SPY__ are not true mocks.

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

### Mocks

### Spy calls

### Fake timers

### Fake XHR and server

### JSON-P

### Assertions

### Matchers

### Sandboxes

### Utils