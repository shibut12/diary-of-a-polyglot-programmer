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

## Observer
An observer is a consumer of values delivered by an observable. Observers are simply a set of call backs, one for each type of notification delivered by the Observable ( `next`, `error`, and `complete`).

A typical example for observer
```js
var observer = {
    next: x=> console.log('Observer got next value:' + x),
    error: err => console.log('Observer got an error:' + err),
    complete: () => console.log('Observer got a complete notification'),
};
```
To use the observer, provide it to the `subscribe` of an `Observable`.
```js
observable.subscribe(observer);
```

Observes are just objects with three callbacks, one for each type of notification that an observable may deliver.

More simplified example
```js
observable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
```

## Subscription
A subscription essentially just has an `unsuscribe()` function to release resources or cancel Observable execution.
```js
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();
```

## Subject
A subject is like an observable, but can multi cast to many observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

* Every subject is an Observable

Given a subject you can `subscribe` to it, providing an Observer, which will start receiving values normally. Internally to the subject, `subscribe` does not invoke a new execution that delivers values. It simply registers the given Observer in a list of Observers, similarly to how `addListener` usually works in other libraries and languages.
* Every subject is an Observer

It is an Object with the methods `next(v)`, `error(err)`, and `complete()`. To feed a new value to the subject, just call next(theValue), it will be multicasted to the observers registered to listen to the subject.

```js
var subject = new Rx.subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

subject.next(1);
subject.next(2);
```
will output following
```shell
observerA: 1
observerB: 1
observerA: 2
observerB: 2
```

Since subject is an observer, you can also provide a subject as the argument to subscribe of any Observable, like below.
```js
var subject = new Rx.subject();

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1,2,3]);
observable.subscribe(subject);
```
will output following
```shell
observerA: 1
observerB: 1
observerA: 2
observerA: 2
observerB: 3
observerA: 3
```

### Multicasted Observables
A multicasted Observable uses a subject under the hood to make multiple observer see the same observable execution.

```js
var source = Rx.Observable.from([1, 2, 3]);
var subject = new Rx.Subject();
var multicasted = source.multicast(subject);

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
multicasted.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
```

### Behavior Subject
* One of the variant of subject is Behavior Subject.
* behavior subjects are useful for representing "values over time". For instance, an event stream of birthdays is a Subject, but the stream of a person's age would be a BehaviorSubject.

Example: The behavior subject is initialized with value 0, the first observer receives it when it subscribes. The second observer receives the value 2 even though it subscribed after the value 2 was sent.
```js
var subject = new Rx.BehaviorSubject(0);
subject.subscribe({
    next: (v) => console.log('ObserverA: ' + v)
});

subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('ObserverB: ' + v)
});

subject.next(3);
```

Output
```shell
observerA: 0
observerA: 1
observerA: 2
observerB: 2
observerA: 3
observerB: 3
```

### Replay Subject
A replay subject records multiple values from the Observable execution and replays them to new subscribers. Replay subject is similar to behavior subject but it can also record a part of the Observable execution.

* When creating a Replay subject, you can specify how many values to replay.

```js
var subject = new Rx.ReplaySubject(3) // buffer 3 values for new subscribers

subject.subscribe({
    next: (v) => console.log('ObserverA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('ObserverB: ' + v)
});

subject.next(5);
```

Generates following output
```shell
observerA: 1
observerA: 2
observerA: 3
observerA: 4
observerB: 2
observerB: 3
observerB: 4
observerA: 5
observerB: 5
```
### AsyncSubject
The AsyncSubject is a variant where only the value of the Observable execution is sent to its observers, and only when the execution completes.

```js
var subject = new Rx.AsyncSubject();
subject.subscribe({
    next: (v) => console.log('ObserverA: ' + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (v) => console.log('ObserverB: ' + v)
});

subject.next(5);
subject.complete();
```

Generates following output
```shell
observerA: 5
observerB: 5
```

## Operators
Operators are methods on the Observable type such as `.map()`, `.filter()`, `.merge()` etc. When they called they do not change the existing Observable instance. Instead, they return a new `Observable`, whose subscription logic is based on the first Observable.

### Instance operator
Instance operators are functions that use the `this` keyword to infer what is the input Observable.

```js
Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
  var input = this;
  return Rx.Observable.create(function subscribe(observer) {
    input.subscribe({
      next: (v) => observer.next(10 * v),
      error: (err) => observer.error(err),
      complete: () => observer.complete()
    });
  });
}

var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();
observable.subscribe(x => console.log(x));
```

## Static Operator
Static operators are pure functions attached to the Observable class, and usually are used to create Observables from scratch.

```js
var observable = Rx.Observable.interval(1000 /* number of milliseconds */);
```

## Scheduler
A Scheduler lets you define in what execution context will an Observable deliver notifications to its Observer.

* A Scheduler is a data structure.
* A Scheduler is an execution context.
* A Scheduler has a (virtual) clock.