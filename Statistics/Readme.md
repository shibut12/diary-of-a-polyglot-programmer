# Statistics

* [Linear regression](#linear-regression)

## Linear Regression

`y = mx + b`

```text
y = how far up
x = how far along
m = slope
b = the intercept
```

### Calculate m (slope)

`m = (N * SUM(X*Y) - (SUM(x) * SUM(y))) / (N*SUM(x^2) * SUM(x)^2)`

### Calculate b (intercept)

`b = (SUM(y) - m * SUM(x)) / N`

### CSharp code

_Problem_

A group of five students enrolls in Statistics immediately after taking a Math aptitude test. Each student's Math aptitude test score, _x_, and Statistics course grade, _y_, can be expressed as the following list of  points:

```text
95 85
85 95
80 70
70 65
60 70
```

If a student scored _80_ an  on the Math aptitude test, what grade would we expect them to achieve in Statistics? Determine the equation of the best-fit line using the least squares method, then compute and print the value of _y_ when _x = 80_


```csharp
using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        List<int> aptitudeScore = new List<int>();
        List<int> statisticsScore = new List<int>();
        int N = 5;
        float sumX = 0;
        float sumY = 0;
        float sumX2 = 0;
        float sumXY = 0;

        for(int i=0; i<N; i++){
            string[] tmpArray = Console.ReadLine().Split(' ');
            int x = Convert.ToInt32(tmpArray[0]);
            int y = Convert.ToInt32(tmpArray[1]);
            sumX += x;
            sumY += y;
            sumX2 += (x*x);
            sumXY += (x*y);
        }

        float nSumXY = N*sumXY;
        float sumXSumY = sumX*sumY;
        float nSumX2 = N * sumX2;
        float sumX22 = sumX * sumX;

        float m = (nSumXY - sumXSumY)/(nSumX2 - sumX22);

        float b = ((sumY) - (m * sumX))/N;

        int X = 80;
        float Y = (m*X)+b;
        Console.WriteLine($"y {Math.Round((double)Y, 3)}");
    }
}
```

```text
# Input
95 85
85 95
80 70
70 65
60 70

# Output
78.288
```