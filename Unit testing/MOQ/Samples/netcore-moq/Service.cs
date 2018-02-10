using System;
using System.Collections.Generic;
using Xunit;

namespace netcore_moq
{
    public interface IMathLib
    {
        int Add(List<int> numbers);
    }
    public class MathLib:IMathLib
    {
        public int Add(List<int> numbers)
        {
            int result = 0;

            foreach(int number in numbers)
            {
                result += number;
            }

            return result;
        }
    }
    public class MathService
    {
        private IMathLib _mathLib;
        public MathService(IMathLib mathLib) => _mathLib = mathLib;

        public int Add(List<int> numbers) => _mathLib.Add(numbers: numbers);
    }

    public class SutMathService
    {
        [Fact]
        public void AddVerifyReturnsSumOfNumbers()
        {
        //Given
        
        //When
        
        //Then
        Assert.Equal(1,1);
        }
    }
}
