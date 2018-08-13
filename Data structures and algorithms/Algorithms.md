# Algorithms

## Big O notation

Defines how time scales with respect to some input variables.

E.g:1# Lets say a pigeon can carry a usb stick 10 miles in 2 minutes and internet can send data 1 Mb of data in 2 minutes. The pigeon would still take 2 minutes to carry 10Mb of data over 10 miles but internet would take 20 minutes to transfer 10Mb of data. In this case, pigeon has __Big O(1)__ because the time does not increase in proportion to size of the data increases.

E.g:2# Consider following functions

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