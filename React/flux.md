# Flux

A Fancy name for Observer pattern.

## Basic concept

Flux is an idea. It emphasis on uni directional data flow.

![](flux-basic-flow.png)

When a __View__ want to read data, the process start with an __Action__, it calls a __Dispatcher__ to propagate the event. the _dispatcher_ performs an _ajax_ request and put the result in a __Store__. The _store_ then __emit__ an event to the __Views__ that _subscribed_ to it. The View then consume _data_ from _store_. When the _view_ need to __Delete__ or __Update__ _data_ from store, the _view_ call an __action__, which then call the same __dispatcher__ to _propagate_ events. The _dispatcher_ performs _ajax_ requests and update the data in the store. The _Store_ then _emit_ and __event__ to _notify_ all the views _subscribed_ to the store about the change.

## How to use Flux with React

There are many implementation of flux, _facebook_ provides it's official implementation of dispatcher class.

### Dispatcher

Will perform the Ajax call to fetch resource.

```js
import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher {
    handleViewAction(action){
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action,
        });
    }
}

export default new AppDispatcher();
```

### Actions

Calls the `handleViewAction()` from Dispatcher.

```js
import AppDispatcher from './AppDispatcher';
import StoreConstants from './StoreConstants';

const StoreActions = {
    loadBooks() {
        AppDispatcher.handleViewAction({
            actionType: StoreConstants.LOAD_BOOKS,
        });
    },
};

export default StoreActions;
```

### Store

Is the most important component. It extends from `EventEmitter`, it emits events to notify the subscribers about the changes and provide a mechanism to subscribe and unscribe to events.

```js
class BookStore extends EventEmitter{
    getBooks(){
        return _books;
    }

    emitChange(){
        this.emit('change');
    }

    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }
}

bookStore = new BookStore();

AppDispatcher.register(function callback({action}){
    switch(action.actionType){
        case StoreConstants.LOAD_BOOKS:
            // load data using ajax here
            bookStore.emitChange();
            break;
        default:
            return true;
    }
});

export default bookStore;
```

### View ( React Component)

```js
class BookList extents React.Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = BookStore.getBooks();
    }

    componentDidMount(){
        BookStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        BookStore.removeChangeListener(this.onChange);
    }

    onClick(){
        BookStoreActions.loadBooks();
    }

    onChange(){
        this.setState(BookStore.getBooks());
    }

    render(){
        /*
        Code to render component
        */
    }
}
```