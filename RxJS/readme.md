# Reactive programming with RxJS
RxJS is a  __reactive programming__ library for Javascript using observables. 

## scope
* Install and configure development environment
* setup a compiler and module bundler
* Create an observable
* Process events and make Http requests

__Reactive programming__ combines existing design patterns and functional programming concepts to give a wonderful flexible approach to asynchronous programming.

## Observables
In reactiveX an observer _subscribes_ to an _observable_. Then that observer reacts to whatever item sequence of items the _Observer emits_. This pattern facilitates concurrent operations because it does not need to block while waiting for the observable to emit objects. but instead it creates a sentry in the form of an observer that stands ready to react appropriately at whatever time the future time the observable does so.

### Establishing observables
In an ordinary method call which is not a asynchronous. flow is something like below.
* Call a method
* Store return value from that method in a variable.
* Use that variable and its new value to do something useful
```js
returnVal = someMethod(parameter1, parameter2);
```

In asynchronous model the flow is like below.
* Define a _method_ that does something useful with the return value from _asynchronous call_ (This method is part of observer)
* Define that _asynchronous call_ itself as an _observable_
* Attach that _observer_ to that observable by _subscribing to it_
* Go on with your business whenever the call returns, the observer's method will begin to operate on its return value or values

I.e
```js
var myOnNext = { it -> /* do something useful with it*/ };
var myObservable  = someObservable(itsParameters);
myObservable.subscribe(myOnNext);
```

### onNext, onCompleted, and onError
* __Subscribe__
The subscribe method is how you connect an observer to an observable. Observer implements some subset of following methods
    * onNext
        An _observable_ calls this method whenever observer _emits_ an item. This method takes as a parameter the item emitted by the observable.
    * onError
        An Observable calls this method to indicate that it has failed to generate the expected data or has encountered some other error. It will not make further calls to onNext or onCompleted. The _onError_ method takes as its parameter an indication of what caused the error.
    * onCompleted
        An observable calls this method after it has called onNext for the final time, if it has not encountered any errors.

By definition _onNext_ gets called to when items pushed, _onComplete_ , and _onError_ gets called to notify a state.

A more completed _subscribe_ will look like following
```js
var myOnNext = { it -> /* do something useful with it*/ };
var myError = { throwable -> /* error handling mechanism */ };
var myComplete = { /* cleanup after final response */ };
var myObservable  = someObservable(itsParameters);

myObservable.subscribe(myOnNext, myError, myComplete);
```
* __Unsubscribing__
_Unsubscribe_ method is called when _observer_ is no longer interested in any of the observable it is currently subscribed to.
* __Chaining operators__
Most operators operate on an _observable_ and return an _Observable_. This allows you to apply these operators one after the other in a chain. Each operator in the chain modifies the _Observable_ that results from the operation of the previous operator.

```js
var foo = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
});

foo.subscribe(function (x) {
  console.log(x);
});
foo.subscribe(function (y) {
  console.log(y);
});

//output
"Hello"
42
"Hello"
42
```
### Anatomy of Observable
* Creating
```js
var observable = Rx.Observable.create(function subscribe(observer){
    var id = setInterval(()=>{
        observer.next('hi')
    }, 1000);
});
```
* Subscribing
* Executing
* Disposing
