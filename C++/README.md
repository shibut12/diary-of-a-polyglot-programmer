# C++

## Data types

### Vector

Elements are stored contiguously, elements can be access not only through iterators, but also using offsets to regular pointer to elements. This mean that a pointer to an element of a vector may be passed to any function that expects a pointer to an array.

#### Modifiers

* Clear - clear the contents
* Insert - inserts elements
* Erase - erase elements
* Push_back - adds an element to the end
* pop_back - removes last element
* resize - changes number of elements stored
* swap - swaps the content

#### Iterators

* begin / cbegin - returns an iterator to the beginning
* end / cend - returns an iterator to the end
* rbegin / crbegin - returns a reverse iterator to the beginning
* rend / crent - returns a reverse iterator to the end

#### Element access

* at - access specified element with bounds checking
* operator [] - access specified element
* front - access the first element
* back - access the last element
* data - direct access to the underlying array