using System;
using System.Collections.Generic;
using NUnit.Framework;

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

    [TestFixture]
    public class SutMathService
    {
        [Test]
        public void AddVerifyReturnsSumOfNumbers()
        {
        //Given
        
        //When
        
        //Then
        Assert.AreEqual(1,1);
        }
    }
}
