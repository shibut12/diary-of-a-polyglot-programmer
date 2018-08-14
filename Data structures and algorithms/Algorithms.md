# Algorithms

## Index

* [Big O](#big-o-notation-algorithmic-efficiency)

## Big O notation  - Algorithmic efficiency

Measured by `O(a)`

__BigO__ notation is used in _Computer Science_ to describe the performance or complexity of an algorithm. Defines how time scales with respect to some input variables.

### O(1)

_O(1)_ describes an algorithm that will always execute in same time (or space) regardless of the size of the input.

```csharp
bool IsFirstElementNull(IList<string> elements){
    return elements[0] == null;
}
```

### O(N)

_O(N)_ describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

```csharp
bool ContainsValue(IList<string> elements, string value){
    foreach(var element in elements){
        if(element == value) return true;
    }

    return false;
}
```

### O(N^2)

_O(N^2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with _algorithms_ that involve nested iterations over the data set. Deeper nested iterations will result in _O(N^3)_, _O(N^4)_ etc.

### O(2^N)

_O(2^N)_ denotes an algorithm whose growth doubles with each addition to the input data set. The growth curve of an _O(2^N)_ function is exponential, starting off very shallow, then rising meteorically. An example if an O(2^N) function is the recursive calculation of Fibonacci Numbers.

E.g:1# Lets say a pigeon can carry a usb stick 10 miles in 2 minutes and internet can send data 1 Mb of data in 2 minutes. The pigeon would still take 2 minutes to carry 10Mb of data over 10 miles but internet would take 20 minutes to transfer 10Mb of data. In this case, pigeon has __Big O(1)__ because the time does not increase in proportion to size of the data increases.

E.g:2# Consider following functions, the first code does not have a significant impact on the performance as the size of input grow, but the the second example reduce the performance as the size of the input array grow.

``` csharp
boolean Contains(array, x){
    foreach(var element in array){
        if(element == x)
            return true;
    }
    return false;
}

void PrintPairs(array){
    foreach(var x in array){
        foreach(var y in array{
            print(x, y);
        })
    }
}
```

### Important rules of BigO

#### 1. Different steps gets added

Lets say the following code has BigO score as it says in the comments. You can then add these two get

```csharp
void function1(inputArray);{
    var step1Output = doStep1(inputArray); // O(a)
    doStep2(step1Output); // O(b)
}  // O(a) + O(b)
```

#### 2. Drop constants

Consider following two function, both of these are performing the same operation slightly different way. When calculating they both have `O(n)`, because the constants are dropped, we are looking for a rough linear estimation.

```csharp
void MinMax1(inputArray){
    int min, max = null;
    foreach(var e in inputArray){
        min = MIN(e, min);
    }
    foreach(var e in inputArray){
        max = MAX(e, max);
    }
}

void MinMax2(inputArray){
    int min, max = null;
    foreach(var e in inputArray){
        min = MIN(e, min);
        max = MAX(e, max);
    }
}
```

#### 3. Different inputs should use different variables

Consider following example. This example has a BigO of `O(a*b)` not _O(N^2)_, because there are two inputs _arrayA_ and _arrayB_, they both should be denoted as `a` and `b`. The total _BigO_ is _O(a*b)_.

```csharp
int intersectionSize(arrayA, arrayB){
    int count =0;
    for(int a in arrayA){
        for(int b in arrayB){
            if(a==b)
            count++;
        }
    }
    return count;
}
```

#### 3. Drop non-dominate terms

If _left_ and _right_ are equivalent (see rule 2) , then center is too. Consider following example.

```csharp
void WalkTheArray(array){
    int max = null;
    foreach(int a in array){
        max = MAX(a, max);
    } // Takes O(n)
    Console.WriteLine(max);

    foreach(int a in array){
        foreach(int b in array){
            Console.WriteLine($"{a} {b}");
        }
    } // Takes O(n^2)
} // O(n^2) <= O(n+n^2) <= O(n^2+n^2)
```