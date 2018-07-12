# React

A JavaAScript library for building user interfaces. The libreary is created and maintained by Facebook.

## Features

* JSX - Martkups in javaScript
* Virtual DOM
* Isomorphic rendering - Allows to render in client and server
* Unidirectional flows

## Core concepts

* HTML should be a projection of app state , not a source of truth.
* JavaScript and HTML belong in the same file.
* Unidirectional flow, not two-way binding.
* Inline styles can be good.

## Technology is overview

* Use Node JS to write server side javascript
* Use Browserify to expose node js pacages in the browser
* React as components library
* React routing for routing
* Facebook flux for unidirectional data flow
* Gulp task runner

## Advantages and Disadvantages


|Advantages                               |  Disadvantages                                         |
------------------------------------------|--------------------------------------------------------|
|Conceptual Simplicity                    | Limited in scope
|Recat is faster than competitors         | Productivity 
|Simple model for server side rendering   | Complex tooling

## Architecture

    PROPS -----> RENDER  <---- STATE <---|
                   |                     |
                   |                     |
                   |                     | Events
                   |                     |
                   \/                    |
                  DOM                    |
                   |                     |
                   |---------------------|

Model + component = DOM

## Comparison with Angular

|React                                    |  Angular                                               |
------------------------------------------|--------------------------------------------------------|
|Renders UI and handles events            | A Complete UI framework
|Uses JavaScript for view logic           | Custom template expression syntax
|Applicaitons are written in JavaScript   | Written in TypeScript

## JSX

A Syntax extension to JavaScript. It is used with React to descriibe what the UI should look like. JSX prodices __React elements__.

### Hello world JSX

```javascript
const name = 'Shibu';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root)
);
```