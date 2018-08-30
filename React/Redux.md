# Redux

## Concept

There is one main __store__ for the entire application, the _store_ holds state of all components. _State_ of the _store_ can only be modified by __reducers__, _store_ can have only __one root reducer__, the _root reducer_ is created by combining many _reducers_. The reducers use an __action__ to identify the _action_ that required to perform, an _action_ contains __type__ and __payload__. The __containers__ are the `.jsx` files that contains logic behind _components_, the _containers_ __dispatch__ an _action_ to perform an operation. When an _action_ is _dispatched_, all the _reducers are notified_. The _reducers_ use a `switch` operator on _action.payload_ to identify if the action is intended for it. The __react components__ include the __Containers__ in it.

## Why Redux

_Vanilla JS_ is suitable for ultra simple app that does not need any DOM manipulation. You can add _jQuery_ into the application if you need reusable code for DOM manipulation and other simplified HTTP requests etc, the disadvantage is maintaining the code is complicated over the time. _React_ is great for bigger projects because of _clear component model, synthetic events, and virtual dom_. React becomes complex when same data need to display in multiple places. _Redux_ makes data management very easy.

## Foundation of Redux

### 1. One Immutable store for entire application

Helps debugging, helps server rendering, do undo / redo etc.

### 2. Actions are always trigger changes

Action describes user's intent, example a click event for new customer.

### 3. State is changed by pure function (reducers)

### Start

Not in the redux cycle, but is a starting point

Book the tickets

```js
function BookTicketsClick(){
    //Code for dispatch
}
```

### Dispatch

Find out when your offer expires by performing an __Action__.

```js
//Dispatch
store.dispatch(() =>{
    //return action code;
})

//Action
{
    type: 'BOOK_TICKETS',
    value: time
}
```

### Reducer

Add the travel time to current time and find out how much time do you have left.

```js
const reducer = Redux.combineReducers({
    ticket:(state={endTime:null}, action) => {
        if(action.type == 'BOOK_TICKETS'){
            //do something with state
            return state;
        }
        if(action.type=='STOP_BOOKING'){
            //do something with state
            return state;
        }
    }
})
```

### State

Add these information into a notebook

```js
store.getState().ticket;
```