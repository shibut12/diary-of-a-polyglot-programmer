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

This ensures that a derived class does no taffect the behavior of the parent class, in other words that a derived class must be substitutable for its class.

## I - ISP: Interface Segregation Principle

## D - DIP: Dependency Inversion Principle