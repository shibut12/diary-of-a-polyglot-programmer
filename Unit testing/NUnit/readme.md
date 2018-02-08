# Unit testing with NUnit

## Code snippets

### Asserts
* Verify if the value is equal to a literal
```csharp
var actualValue = someFunction("input parameters");
Assert.AreEqual("expected value", actualValue);
```
* Verify if the value is equal to a veriable
```csharp
var actualValue = someFunction("input parameters");
var expectedValue = "expected value";
Assert.AreEqual(expectedValue, actualValue);
```
* Verify if actual value is an instance of Type
```csharp
var actualValue = someFunction("input parameters");
Assert.IsInstanceOf<SomeType>(actualValue);
```
* Verify if actual value is boolean
```csharp
var actualValue = someFunction("input parameters");
Assert.IsTrue(actualValue);
Assert.IsFalse(actualValue);
```