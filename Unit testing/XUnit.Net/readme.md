# xUnit.Net

Is a free, open-source, community-focused unit testing tool for .NET framework.

## Example of a test

```csharp
using System;
using Xunit;

namespace ExampleSutAndTests
{
    public class MathLib
    {
        public int Add(int n1, int n2)
        {
            return n1 + n2;
        }
    }

    public class SutMathLib
    {
        [Fact]
        public void AddShouldReturnSumOfNumbers
        {
            //Arrange
            var _mathLib = new MathLib();
            var expectedSum = 4;
            //Act
            var actualSum = _mathLib.Add(2,2);
            //Assert
            Assert.Equal(actualSum, expectedSum)

        }
    }
}
```

Running tests.

Before starting to run tests, verify [dotnet code cli is installed in the computer](https://www.microsoft.com/net/learn/get-started/windows)

```bash
dotnet test
```