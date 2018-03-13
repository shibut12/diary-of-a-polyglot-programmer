# SOLID Principles

SOLID are five basic principles for handling improving software architecture, and avoid spaghetti code.

Solid Stands for

* S - Single Responsibility Principle
* O - Open Closed Principle
* L - Liskov Substitution Principle
* I - Interface Segregation Principle
* D - Dependency Inversion Principle

## S - SRP: Single Responsibility Principle

Every module or  a class in a program should have only one responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. All its services should be narrowly aligned with that responsibility.

Robert C martin expresses this principle as "A class should have only one reason to change".

## O - OCP: Open Closed Principle
A Class is open for extension but close for modification, meaning; Classes must be designed in such a way that a class can be added when a new requirement is generated, this class should be extended while modifying using inheritance.

## L - LSP: Liskov Substitution Principle
You should be able to use any derived class instead of a parent class and have it behave in the same manner without modification.

This ensures that a derived class does no affect the behavior of the parent class, in other words that a derived class must be substitutable for its class.

## I - ISP: Interface Segregation Principle

Clients should not be forced to implement interfaces that they dont use. Instead of a single interface defining many methods, multiple small interfaces should be considered.

## D - DIP: Dependency Inversion Principle

High level modules / classes should not be depend on low-level modules/classes. Both should depend on abstractions. Abstractions should not depend upon details. Details should depend upon abstractions.

A high level module/class that has dependency on low-level modules/classes or some other class and knows a lot about the other class it interacts with is said to be tightly couped. When a class knows explicitly about the design and implementation of another class, it raises risk that changes to one class will break the other class, so we must keep theses high-level and low-level modules/class loosely coupled as much as we can. To do that, we need to make both of them dependent on abstractions instead of knowing each other. 