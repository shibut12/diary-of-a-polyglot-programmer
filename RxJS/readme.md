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
Subscribing to an observable is like calling a function, providing callbacks where the data will be delivered to. You can subscribe to an observable using the `subscribe` method.
```js
observable.subscribe(x=>console.log(x));
```
A `subscribe` call is simply a way to start an _Observable execution_ and deliver values or events to an observer of that execution.
* Executing
The code inside `Observable.create(function subscribe(observer){/*..*/})` represents an _Observable execution_, a lazy computation that only that only happens for each Observer that subscribes. The execution produces multiple values over time, either synchronously or asynchronously.

There are three types of values an Observable execution can deliver.
    * _Next_ notification: sends a value
    * _Error_ notification: sends a JavaScript error on exception
    * _Complete_ notification: does not send a value

In an observable execution, zero to infinite Next notification may be delivered, If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.

```js
var observable = Rx.Observable.create(function subscribe(observer){
    try{
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
        observer.next(4) // -> this will not be sent as it violates the contract
    }
    catch(err){
        observer.error(err);
    }
});
```

* Disposing
When you call `subscribe`, you get a `subscription` back, which represents the ongoing execution. Just call `unsubscribe()` to cancel the execution

```js
var observable = Rx.Observable.create9function subscribe(observer){
    //keep track of interval resource
    var intervalID = setInterval(() => {
        observer.next('hi');
    }, 1000);

    // Provide a way to cancel & dispose the interval resource
    return function unsubscribe(){
        clearInterval(intervalID);
    }
});

var unsubscribe = subscribe({next: (x) => console.log(x)});

//later
unsubscribe();
```