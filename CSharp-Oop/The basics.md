# .Net

## Advantages of .Net
* Object oriented programming
* Good design
* Language idependance
* Efficient data access with ADO.Net
* Code sharing using .Net

## Common language runtime
* .Net's runtime execution environemnt
* Code running under CLR is called managed code
### Advantages
* Platform independance - Code is cimpiled in IL
* Performance improvement - JIT compiler takes the code that is relevant to the current execution plan and compile it into machine lang.
* Language interoperability - Languages that are compiled to IL, can share code from other languages in the CLR/IL
## Intermediate Language (IL)
* C# code will be converted into IL before it executed.
## Carbage collection
* The _Garbage collector_ is .Net's answer to memory management
* .Net  Runtime depends on Garbage collector by default
* Removes the dependancy on programmers to take care of memory management (less bugs in production)

### Force garbage collector to free unused space
```csharp
System.GC.Collect();
```
* It is recommended not to use `GC.Collect()`.
* Use `using(){}` block instead
   * it will call `Dispose` after the scope is done
    ```csharp
    publc void GetDataFromWeb()
    {
        using(HttpClient client = new HttpCient())
        {
            //..
        }
    }
    ```
### IDispossible
* Provides a mechanism that allows users of a class to control when resources are freed but requires discipline to ensure that `Dispose()` is called.
```csharp
public class ResourceHandler:IDispossible
{
    private bool isDisposed = false;
    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }
    public stream GetFile()
    {
        //...
    }
}

//other class
void LogData()
{
    using(ResourceHandler handler = new ResourceHandler())
    {
        var file = handler.GetFile();
    }//Handler will be autoatically disposed by .Net after this line
}
```

## Pre-defined data types
* Two types

### 1. Value types
* Store data on Stack
* Good for storing smaller amout of data
   * sbyte
   * int
   * short
   * long
   * float
   * double
   * char
### 2. Reference types
* Store data on managed HEAP
* Ideal for storing large amount of data
   * string

## Stack and Heap
* Both are stored in RAM
### STACK
* Stack is for static memory allocation
* Data is stored in Last in First out (LIFO) fashion
* Each thread gets their stack
* Data is stored directly into the memory
* Data access is faster with Stack
### HEAP
* Heap is for dynamic memory allocation
* No enforced pattern for memory allocation

---
## Namespaces
* Provide a method for organising related classes and types.
```charp
namespace Customer
{
    public class order
    {
        //....
    }
}
namespace Manager
{
    pulbic class EmployeeManagement
    {
        //...
    }
}
```
## using statement
* Allows to refer classes from other namespaces in the current class
```csharp
using System;
using Customer.Orders;
```
## Classes
* Templates for creating objects
* Contains data (Fields) and methods( functions)
* Allows to create parameters less constructors
* Stored on Heap
* Is a reference type
## Structs
[Link to source code](https://github.com/shibut12/Notes/tree/master/CSharp-Oop/Code/charp-structs)

* Similar to classes Structs offer a great way to encapsulate objects in the program.
* Contains data (Fields) and methods( functions)
* Structs Store data on __Managed HEAP__ 
* Structs does support _Interfaces_ 
* Structs does not support parameterless constructor
* Structs does not support inheriting from other classes
## Partial Classes/ Structs or Interface
* The `partial` keyword allows to separate __Classes, Interfaces or Structs__ into multiple files. 
* COmpiler will merge the files into one while compiling
* Attributes from borht classes will be copied to the final class

_Code_
```csharp
//BigClass1.cs
partial class TheBigClass
{
    public void MethodOne()
    {
        //..
    }
}

//BigClass2.cs
partial class TheBigClass
{
    public void MethodTwo()
    {
        //....
    }
}

//Compiled class
partial class TheBigClass
{
    public void MethodOne()
    {
        //...
    }
    public void MethodTwo()
    {
        //...
    }
}
```

## Static classes
* If a class contains only static methods and properties the class can become a static class.
* Static classes cannot be instantiatd.

---
# Inheritance
* Two types
## 1. Implementaiton inheritance
* A type derives from its base type, taking all members and function from Base type to derived type.
* If the base type mentioned a specific funciton is _virtual_, then the derived class can _override_ its implementation.
* If the base type mentioend a specific funtion as _sealed_, then the derived class cannot override  implementation of that function.
## 2. Interface inheritance
* Means that a type inherits only the signatures if the function but does not inherit any implementations.
* Most useful to manadate a speciifc type must provide specific functionalities
## Multiple inheritance
* Multiple implementaiton inheritance is not allowed in C#.
## Virtual Methods
* By declaing a base class function as `virtual`, you allow the function to be overriden in any derived class.


_Code_
```csharp
//Animal.cs
public class Animal
{
    public virtual int GetNumberOfLegs()
    {
        return 2;
    }
}

//ForLeggedAnimal.cs
public class FourLeggedAnimal : Animal
{
    public override sealed int GetNumberOfLegs()
    {
        return 4;
    }
}
```

### Calling base funcitons
* Base funtions can be called by using `base.<function(parameter)>`
   * Eg, 
   ```csharp
   class CustomerAccount
   {
       public virtual decimal CalculatePrice()
       {
           //...
       }
   }

   class GoldAccount
   {
       public override decimal CalculatePrice()
       {
           return base.CalculatePrice() * 0.20M;
       }
   }
   ```

   ---
   ## Abstract classes
* Cannot be instantiated. 
* Meant to be a base class.
* Can contain functions, fields and implementaitons.
* Functions marked `abstract` must be overridden by derived classes.
* Derived class can set the fucntion to be sealed to stop overriding the function in the children classes.

```csharp
//Animal.cs
public abstract class Animal
{
    public abstarct int GetNumberOfLegs();
}

//ForLeggedAnimal.cs
public class FourLeggedAnimal : Animal
{
    public override sealed int GetNumberOfLegs()
    {
        return 4;
    }
}

//Cat.cs
public Cat : FourLeggedAnimal
{
    //this will fail
    public override int GetNumberOfLegs()
    {
        return 6; 
    }
}
```
## Interfaces
* Provides a contract stated in terms of .Net

```csharp
public interface IDisposible
{
    void Dispossible();
}
```
* The types inheritng an interface must provide implementaiton for the function signatures in the interface.
---
## Access modifiers
* Allows to control the visibility of fields and funcitons and types.
* Public: Visible to any code
* Private: Visible to the types that defined the element
* Protected: Visible to the Class that defined and the types that are inheriting the defined type.
* Internal: Visible to the types in the containing assembly
* Protectde Internal: Visible to the types in the Containing assembly and the types that are inheriting from defined type.
![access modifiers](https://www.codeproject.com/KB/cs/CsharpAccessModifiers/IllustrateAccessInCsharp2.png)

---
## Delegates and Events
* Delegates exisits for situation in which you want to pass methods around to other methods.
* For example setting a call back method.

_Code_
```csharp
//declaring
private delegate string GetAString();

static void main()
{
    int x = 40;
    GetAString firstStringMethod = new GetAString(x.ToString());
    Console.WriteLine("String is " + firstStringMethos());
}
```
---
## Exception handling
* If exceptions are not caught in any exception handling code, it will be handles by .Net run time.
* If error is caught, it must be trwon to preserve the stack trace
* If exception occurred in finally, it will be handled by to parent exception handler of .Net framework
```csharp
try
{
    //Run a block of code under a sandbox
}
catch(type1 ex)
{
    //if the exception type1 occurs, it will be handles here
}
catch(Type2 ex)
{
    //if the exception type2 occured, it will be handles here
}
finally
{
    //Gets triggerred after
        //Try block if no errros occured
        //Catch block after the exception handling is done
}
```