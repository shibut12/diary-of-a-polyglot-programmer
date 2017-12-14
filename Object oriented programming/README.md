# Object oriented programming
Is a programming model  organized around _data_ or _objects_ rather than _actions_ and _logic_. Programming challenge was seen as how to write the logic; not how to define the data. The object oriented programming looks at _objects_ that we need to manipulate instead of _logic_ that manipulate _objects_.
In object oriented programming we come-up with data (data type / objects) first then we decide the function that manipulate those object.

## Statically typed and dynamically typed 
_Type_ means data type. A __Statically typed programming languages__ are those languages in which variables need not to be defined before they used. __Dynamically typed programming languages__ are those languages in which variables must necessarily be defined before they are used. 

Static
* Java
* C#
* C++

Dynamic
* Javascript
* Python
* Ruby

## Class
Is a definition of a datatype. Each class defines it _data type_ by members. A Class is a blueprint for creating data. The data that a class holds are called __Object/Instance__.
### Members
Members comes in two basic kinds.
* Fields - Are the data members, is is the data that makes up the type.
* Methods - A function that associated with that class. These are the operation that acting upon fields or data.

# Principles of object oriented programming
## 1. Encapsulation
The fields of an _object/instance_ should only be read or written by the methods of the instances of that class.
### Why encapsulation?
If we follow _Encapsulation_, the code will be neatly, cleanly and modularised. This allow us to make changes, add features, and fix bugs. When you failed to adhere to this principle, data read & written from all different place from the code. The result is what we call, __Spaghetti code__, which is extremely difficult to understand therefore extremely difficult to fix and modify.
## How to use Encapsulation?
Implemented using __access modifiers__ , Access modifier allows you to control the visibility of Class/Object/Instance members (Fields & Methods). When implementing Encapsulation _Fields_ should kept __Private__ and _methods_ should be either __public__ or __private__.

### Public 
Visible to everyone.
### Private
Visible only to methods of own type.
## 2. Inheritance
Some datatype or some classes may overlap, which means datatype or functions found in one class may be repeating in another one as well. When a programming language has __Inheritance__, it allows to formalize these relationships. For example, if there is a class called _Animal_ which implements the data nd behavior of an animal, and if you are creating a class for _Mammal_ you can inherit the common nature of all animals into Mammals class.
* Super class / Base class - The original class that defined the fundamentals.
* Parent - Is a direct immediate ancestor 
* Child - Is a direct immediate descendant 

E.g
1. Super class: Animal - Has legs, Has Eyes, Does eat
2. Mammal : Animal- Has hair, Warm blooded, Has legs, Has Eyes, Does eat
3. Cat : Mammal   - Does meow, Can land in all four legs, Has hair, Warm blooded, Has legs, Has Eyes, Does eat
### WHY?
* Code reusability
* Can focus on adding new functionality without worrying about fixing all the duplicate code
### is-a vs has-a (Think before using inheritance)
In a proper inheritance relationship, the child classes are considered as more specific version of parent class. 

_Eg_ 
1. A cat __is-a__ kind of Mammal. (candidate for inheritance)
2. A Cat __has-a__ leg. (not a candidate for inheritance)
### Multiple inheritance
Some programming languages allows inheriting from multiple classes. _Java_ and __C#__ doesn't allow multiple inheritance.
### Circular inheritance
No language allows to have _circular_inheritance. 
### Overriding
_Overriding_ means, redefine an inherited method.

_Eg_, 
1. Super class: Vehicle > Has wheels, Moves, Does Break, Hoes Honk
2. Car: Vehicle > __Redefine Has wheels__ to __Has four wheels__, Moves, Does Break, Hoes Honk
#### Sealed
Sealed ensure that none of child classes cannot override a method defined by parent class.

_Eg_, 
1. Super class: Vehicle > Has wheels, Moves, Does Break, Hoes Honk
2. Car: Vehicle > __Redefine Has wheels__ to __Has four wheels__ and set to _sealed_, Moves, Does Break, Hoes Honk
3. Honda Car: Vehicle > __Has four wheels__ (_cannot change number of wheels)_, Moves, Does Break, Hoes Honk, has Honda logo

## Constructor
is the first function that triggered when an instance of class is created. Usually this function is used for setting up an instance at its creation.

##Interface.
You may have two different types in two different classes which are unrelated but shared some common functions, those methods are called _interface_. Ensure that all the classes implementing interface will have function implemented in based on their data.

_Eg_
* Interface IAction> Move, Stop
* Cat:IAction: Meow, has four legs, _Move, Stop_
* Car:IAction: Honk, has four wheels, _Move, Stop_
* Robot:IAction: Talk weird, Roll over, _Move, Stop_

## Abstract class
A class that not meant to be instantiated. Theses classes are meant to be _base class_ for other classes.
1. __Abstract class__: Animal - Has legs, Has Eyes, Does eat
2. Mammal : Animal- Has hair, Warm blooded, Has legs, Has Eyes, Does eat
3. Cat : Mammal   - Does meow, Can land in all four legs, Has hair, Warm blooded, Has legs, Has Eyes, Does eat

## Prototypical inheritance
Is Object oriented programming without classes. It produce child instances from parent instances. You have no formal notion of classes. There are only a bunch of object that are linked to each other. It is up to the developer to consider the objects as class.