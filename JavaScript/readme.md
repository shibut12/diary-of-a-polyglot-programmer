# JavaScript

Is a PrototypeOriented programming language. It is interpreted and dynamically typed

## Objects

### Key concepts

#### this

`this` refers to the object that the code is being executed. By default, it is the `Global` object. In a browser it is the `window` object.

#### new

`new` creates an empty JavaScript object. in the below example it is used to create instance of functions.

```js
function Cat(){
    this.name = 'Fluffy';
    this.color = 'White';
}

var cat = new Cat();
console.log(cat.name); //resolve to Fluffy
```

#### Constructors and parameters

Used to create named objects.

```js
function Cat(name, color){
    this.name = name;
    this.color = color;
}

var cat = new Cat('Fluffy', 'brown');
console.log(cat.name + ' is ' + cat.color); // resolves to Fluffy is brown
```

#### Object.create

`new` uses `Object.create` behind the scene to create an instance of the Cat object.

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

#### class - added in ECMAScript 6

Allows to program in a OOPS programming style.

```js
class Cat{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    speak(){
        console.log('meow');
    }
}

var lucy = new Cat('Lucy', 'White');
lucy.speak(); //Resolves to meow
```

### Objects, properties and Property attributes

#### dot `.` notation

Allows to create, change or access named property from an object.

```js
var cat = {
    name: 'Fluffy',
    color: 'White'
}

console.log(cat.name); // Resolve to Fluffy
```

#### Bracket notation []

Allows to create and access named properties from an object. It is similar to dot `.` notation. The use case for this notation is you can create properties with name enter by user or a json payload.

```js
var cat = {
    name: 'Fluffy',
    color: 'White'
}

cat['eye-color'] = 'blue';
console.log(cat['eye-color']); // Resolve to blue
```

#### OwnPropertyDescriptor

Every property has a property descriptor.

```js
var cat = {
    name: 'Fluffy',
    color: 'White'
}

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

//Generates following json
//{"value":"Fluffy","writable":true,"enumerable":true,"configurable":true}
```

##### Writable property

It allows to change the name of property from its initial value.

To make a property non-writable, use `Object.defineProperty`.

```js
Object.defineProperty(object-name, 'name', {writable: false});
```

```js
var cat = {
    name: 'Fluffy',
    color: 'White'
}

cat.name = 'floof'; // will update the name property from Fluffy to floof

cat; // will print {name: "floof", color: "White"}

Object.defineProperty(cat, 'name', {writable: false}); // sets the name property of cat object non writable

cat.name = 'Fluffy';  // will not change the name property

cat; // will print {name: "floof", color: "White"}

console.log(Object.getOwnPropertyDescriptor(cat, 'name'));

//Generates following json
//{value: "floof", writable: false, enumerable: true, configurable: true}
```