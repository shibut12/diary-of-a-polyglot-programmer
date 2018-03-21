# Sass

Sass is a CSS Pre processor. A scripting language that extends CSS and gets compiled into regular CSS syntax.

## Why SASS

* More maintainable code - Sass provides `functions` and `variables` to avoid __DRY__ _css code_
* Code reuse
* Compass - A framework that built on Sass, which allows to generate cross browser code
* Avoid browser prefixes
* Compression

## SCSS

* Saas's SCSS syntax is super set of CSS

## Using SASS

Install [Live SASS extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) for Visual Studio code.

## SASS Script

### Preprocessing

### Variables

### Nesting

### Partials

### Import

### Mixins

### Inheritance

### Operators

#### Numerical Operations

##### Addition +

##### Substraction -

##### Multiplication *

##### Division /

##### Modulo %

### Comments

Sass supports multi-line comments with `/* */` and single line comments with `//`. __Multi-line__ comments will appear in __compiled css__. __Single line__ comments will not appear in the __compiled css__

Example.
```scss
/*
This comment spans
over multiple lines
it will appear in compiled css
*/
body { color: black; }

// This is a single line comment
// It wont be appearing in compiled css
a { color: green; }
```

### Data types

SaasScript supports __eight__ data types.

1. Numbers (e.g. 1, 2, 10px)
2. Strings _with or without quotes (e.g. "foo", 'bar', fizz)
3. Colors (e.g. blue, #ffffff, rgba(255, 0, 0, 0.5) )
4. Boolean (true, false)
5. Nulls (e.g. null)
6. Lists of values, separated by __comma__ or __space__ (e.g. (key1: value1, key2: value2))
7. Maps from one value to another ( e.g. $map: (key1: value1, key2: value2))
8. Function references

