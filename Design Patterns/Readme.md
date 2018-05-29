# Pattern & Design Patterns

A _Pattern_ is a way of doing something, a way of pursuing an intent, a technique.

A _design pattern_ is a way to pursue an intent, that uses classes and their methods in an object-oriented language.

Are solutions to software design problems that you find again and again in real-world application development. Patterns are about reusable designs and interactions.

The 23 Gang Of Four (GoF) patterns are generally considered the foundation for all other patterns. They are categorized as __Creational__, __Structural__ and __Behavioral__.

## Classification based on intent

| Intent            |  Patterns                                                                 |
|------------------:| :-----------------------------------------------------------------------: |
| Interfaces        | Adapter, Facade, Composite, Bridge                                        |
| Responsibility    | Singleton, Observer, Mediator, Proxy, Chain of responsibility, Flyweight  |
| Construction      | Builder, Factory method, Abstract Factory, Prototype, Memento             |
| Operations        | Template method, State, Strategy, Command, Interpreter                    |
| Extensions        | Decorator, Iterator, Visitor                                              |


## Creational Patterns

### Abstract Factory

Creates an instance of several families of classes.

### Builder

Separates object construction from its representation.

### Factory Method

Creates an instance of several derived classes.

### Prototype

A fully initialized instance to be copied or cloned.

### Singleton

A class of which only a single instance can exist.

## Structural Patterns

### Adapter

Match interfaces if different classes.

### Bridge

Separates an object's interface from its implementation.

### Composite

A tree structure of simple and composite objects

### Decorator

Add responsibilities to objects dynamically.

### Facade

A single class that represents an entire subsystem.

### Flyweight

A fine-grained instance used for efficient sharing.

### Proxy

An object representing another object.

## Behavioral Patterns

### Chain of Responsibility

A way of passing a request between a chain of objects.

### Command

Encapsulate a command request as an object.

### Interpreter

A way to include language elements of a collection.

### Iterator

Sequentially access elements of a collection.

### Mediator

Defines simplified communication between classes.

### Memonto

Capture and restore an object's internal state.

### Observer

A way of notifying change to a number of classes.

### State

Alter an object's behavior when its state changes.

### Strategy

Encapsulate an algorithm inside a class.

### Template method

Defer the exact steps of an algorithm to a subclass.

### Visitor

Defines a new operation to a class without change