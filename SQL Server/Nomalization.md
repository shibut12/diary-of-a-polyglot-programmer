# Normalization
Is the process of organizing tables and columns of a relational database to reduce data redundancy and improve data integrity.

## 1st Normal Form
A table has no repeating groups. Every columns is an atomic value, not an array or list of anything.

_eg_ a student record should not have a list of subjects or professors in it.

[link](https://en.wikipedia.org/wiki/First_normal_form)

## 2nd Normal Form
If a table that is in __1st normal form__ and does not contain __partial dependancy__ then it is in __2nd normal form__

__Partial dependancy__

The attributes that are depending on part of Candidate key are called Partial dependancy.

__Candidate key__

Componsite of the keys that are not depends on any other key in the table.

__Prime  and non Prime__ attributes

* Attributes part of Candidate key  are called Prime atribute
* Attributes that not part of candidate key called non-prime attribute

## 3rd Normal form
* Helps to reduce duplicate data and improve data integrity
* Table must be in 2nd Normal form 
* All attributes in the table are determined by the candiate key not by any non-prime attribute
