# Redux

## Concept

There is one main __store__ for the entire application, the _store_ holds state of all components. _State_ of the _store_ can only be modified by __reducers__, _store_ can have only __one root reducer__, the _root reducer_ is created by combining many _reducers_. The reducers use an __action__ to identify the _action_ that required to perform, an _action_ contains __type__ and __payload__. The __containers__ are the `.jsx` files that contains logic behind _components_, the _containers_ __dispatch__ an _action_ to perform an operation. When an _action_ is _dispatched_, all the _reducers are notified_. The _reducers_ use a `switch` operator on _action.payload_ to identify if the action is intended for it. The __react components__ include the __Containers__ in it. 

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