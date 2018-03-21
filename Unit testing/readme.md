# Unit testing

Is a _software testing_ method by which individual units of _source code_, sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures, are tested to determine they fit for use.

## Advantage

The goal of unit testing is to isolate each part of the program and show that the individual parts are covered. Unit tests provides a strict, written contract that each piece of code must satisfy. Following are the few benefits of unit tests.

* Easy to verify all individual units as many or frequent with a click of a button
* Find problems early
* Facilitates change
* Simplifies integration
* Documentation
* Design

## Disadvantages

* Unit testing is not Integration testing
* Platform differences
* More code to maintain

## xUnit the OG

_xUnit_ is the collective name for several unit testing frameworks that derive their structure and functionality from _smalltalk's SUnit_. SUnit is built with a structured object oriented style.

[List of xUnit test frameworks](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks)

### Architecture

All xUnit frameworks share the following basic component architecture or with some varied implementation basics.

#### Test runner

Is a computer program that runs tests implemented using __xUnit__ framework and reports the test results.

#### Test case

Is the most elemental class. All unit tests are inherited from here.

#### Test fixtures

Is a set of preconditions or state needed to run a test.

#### Test suites

Is a set of tests that all share the same fixture. The order of the tests shouldn't matter.

#### Test execution

Running a test suit.

#### Setup

Is a function which performs the act of setting up the pre-conditions before a `Test` or a `Test suite` _execution_.

#### TearDown

Is a function which performs the act of cleaning up at the end of a _test case execution_ or a _test suite execution_.

#### Assertions

Is a function or a macro that verifies the _behavior or state_ of the _unit under test_. Usually an assertion expresses a logical condition that is true for results expected in a correctly running _system under test_. Failure of an assertion typically throws an exception, which aborting the execution of the current test.

## Scope of this document

* Unit testing .Net code
  * Unit testing using NUnit
  * Unit testing using xUnit.Net
  * Mocking objects using MOQ
* Unit testing Javascript, Typescript
  * Unit testing using Jasmine
  * Run tests using karma
  * Run Integration UI tests using Jasmine & PhantomJS