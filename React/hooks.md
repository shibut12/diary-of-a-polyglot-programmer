# Reach Hooks

Added in _React 16.8_, hooks allows to use __state__ and other __React features__ without writing a class.. It is backwards compatible.

## Rules of hooks

* Only call hooks at the top level, dont call hooks inside loops, conditions, or nested functions.
* Only call hooks from `react function components`. Dont call Hooks from regular JavaScript functions.

## State hook

A state hook can be defined `useState(0)`. the `0` in this context is the default value.

```js
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick-{()=> setCount(count + 1)}>
                Click Me
            </button>
        </div>
    );
}
```

### Defining multiple hooks

```js
function ExampleWithManyStates () {
    const [age, setAge] = useState(13);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn hooks'}]);
}
```

## Effect hooks

The Effect Hook, _useEffect_, adds ability to perform side effect from a funciton component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `compoenntWillUnmount` in React classes, but unified into a sigle API.

When using the `useEffect` it is essentially defining a funtion that need to run right after rendering DOM. You can also define what needs to run when component is unmounting by defining a `return()`

```js
import React, { useState, useEffect } from 'React';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;

        return () => {
            setCcount (0);
        };
    });

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCOunt(count + 1)}>
                Click me
            </button>
        </div>
    )
}
```