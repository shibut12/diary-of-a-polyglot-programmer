# MOQ
Developed from scratch to take full advantage of .net 3.5 (linq expression trees) & c# features (lambda expressions)
* Supported frameworks
    * .Net 3.5 and higher
    * Silverlight

* Installation
    * Install by downloading dll file [moq on github](https://github.com/Moq/moq4)
    * Install from nuget
        * Nuget package manager
        ```posh
        Install-Package Moq -Version 4.8.1
        ```
        * NET CLI
        ```posh 
        dotnet add package Moq --version 4.8.1
        ```
## Good
* Complete control over mock object functionality
* No need to learn mocking frameworks
* As complexity increases, so do mock objects
## Bad
* Each mock object adds more code
* As complezxity grows so do mock objects
## Ugly
* Brittleness when code under test, interface, or interaction logic changes

## Coding
1. Creating a mock
```csharp
var mockedSystemUnderTest = new Mock<ISystemUnderTest>();
```
2. Setup a behavior in a mocked class
```chasrp
mockedSystemUnderTest.Setup(fn => fn.SomeFunction(It.IsAny<string>())).Returns(true);
```
3. verify a function is called
```csharp
mockedSystemUnderTest.Verify(fn=>fn.SomeFunction(It.IsAny<string>()), Times.Once);
```