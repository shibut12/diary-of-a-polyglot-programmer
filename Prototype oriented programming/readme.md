# Prototype oriented programming

Is a style of _object oriented programming_, in which __Inheritance__ (behavior reuse) is performed via a process of reusing objects via delegation that serve as _prototypes_. This method is also known as _prototypal programming_, _Prototype-based programming_, _prototype-oriented_, _classless_, or _instance based programming_.

Prototype object oriented programming uses generalized objects, which can then be cloned and extended. For example, a _fruit_ object would represent the properties and functionality of a fruit in general. A _bBanana_ object would be cloned from the fruit object, and would also be extended to include general properties to banana. each individual _Banana_ object would be cloned from the generic _banana_ object. Compare to _class-based_ paradigm, where a _fruit_ class would have to be extended by a _Banana_ class.

First prototype-oriented language was _self_, developed ion the mid 1980s. Some current prototype-oriented languages are.

* JavaScript and other ECMAScript implementations such as JScript and ActionScript
* Lua
* Cecil
* NewtonScript
* Lo
* Loke
* MOO
* REBOL
* Lissac
* AHK

## Design and implementation

Objects are _mutable_ in JavaScript, the instances of objects can be augmented by giving them new fields and methods. These then act as prototypes of even newer objects. Many prototype-oriented languages encourages the alteration of prototypes during run-time. Almost all prototype-oriented languages are based on _interpreted_ and _dynamically types_ languages.

## Object construction

There are no _explicit classes_ in prototype-based languages. Objects inherit directly from other objects through a prototype property. The prototype property is called `prototype` in _Self_ and _JavaScript_. There are two methods of contructing new objects

1. Object creation
2. Cloning through an existing object

### Examples

#### Create

```js
//Object creation using the literal
//Object notation {}

//Object #1
var foo = {name: 'foo', one: 1, two: 2};

//Object #2
var bar = {two: 'two', three: 3};

console.log(bat.three);// Resolve to 3

//Object.setPrototypeOf() is introduced in ECMAScript2015

bar = Object.create(foo); //bar is an instance of foo

// Verification.
console.log(bar.one);  // Resolve to 1
console.log(bar.two);  // Resolve to 2
console.log(bat.three);// undefined error
console.log(bar.name); // Resolve to foo
```

#### Cloning

```js
//Example of true prototypical inheritance style

//Object creation using the literal
//Object notation {}

//Object #1
var foo = {name: 'foo', one: 1, two: 2};

//Object #2
var bar = {two: 'two', three: 3};

//Object.setPrototypeOf() is introduced in ECMAScript2015

Object.setPrototypeOf(bar, foo); //foo is now prototype of bar

// Verification.
console.log(bar.one);  // Resolve to 1
console.log(bar.two);  // Resolve to two instead of 2
console.log(bat.three);// Resolve to 3
console.log(bar.name); // Resolve to foo
```