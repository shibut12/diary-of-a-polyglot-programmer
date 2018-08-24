# Redux

## Concept

A webpage can perform a wide variety of operations, one can use _redux_ to keep track of all these operations. Imagine the following scenario.

You found a way to book tickets for a show at a very discounted price, the caveat is you need to be at the place to pickup ticket in _x hrs_ you will know this time when you book the ticket, the time now is _10:00AM__.

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