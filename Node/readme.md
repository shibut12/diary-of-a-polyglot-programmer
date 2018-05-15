
# Node js

## Architecture

libuv and V8 are the 2 key elements of Node js. 

### libuv
Is a set of c++ libraries which does all the file system handling. It also process that cannot be handled within 1 thresad yhat V8 cannot handle.

#### VMs

Node used VMs to run JavaScript in the server.

##### V8

Is the default VM used by Node to run JavaScript.

Check the version of V8 installed with node.

```shell
node -p 'process.versions.v8'
```

##### Chakra

Created by Microsoft

### Nodes CLI and REPL

starting `node` without any args will start a `REPL`. a.k.a inline intrepreter.

Provides auto complete when hit `tab` key.

### Global object, process and Buffer

#### Global Object
`Global` object defines objects in Global scope. 
```js
global.answer = 42
// This variable and value 42 will be available all across the application. 
// Including other modules in the application.
```

##### Process and Buffer

`Process` and `Buffer` objects are available in the Global scope of the project.

###### Process

Bridges Node application and its running environemnt.

* `node -p "process.versions"

Lists version of node and dependencies. This can be used to run version dependentant code.

* process.env

Allows access to runtime environment configuration. E.g. `process.env.PORT`.

* process.release.lts

Return the name, if the current used node is an LTS version. E.g

```shell
node -v
# v6.9.1
node -p "process.release.lts"
# Boron
```

* Process.on is Synchronous

The `Process.on` event emitter loop only allows `Synchronous opeerations`.

* process.on(`uncaughtException')

This Event emitter loop alllows access to `UnCaught Exceptions`.

```node
process.on('uncaughtException', (err) => {
    // allows access to stack trace.
    // Do any cleanup and exit

    console.error(err);
    process.exit();
});
```

###### Buffer

The _Buffer_ class isavailableat the Global scope. It used heaviliy to work with *Binary* streams of data. A Buffer is a chunk of memory allocated outside oif V8. While decoding data from a buffer we should use `StringDecoder` instead of `toString()` module.

Buffer can be created in 3 ways.

* Buffer.alloc(n)

Creates a __filled__ buffer of given size.

```js
Buffer.alloc(8)
// <Buffer 00 00 00 00 00 00 00 00>
```

* Buffer.allocUnsafe(n)

Creates a buffer of given size but will not create a  __filled__ buffer of certain size. It might contain unsafe or old data. To fill a buffer `fill()` can be used

```js
Buffer.allocUnsafe(8)
// <Buffer f0 2b ee 63 63 01 00 00>
Buffer.allocUnsafe(8).fill()
// <Buffer 00 00 00 00 00 00 00 00>
```

* Buffer.from()

Allows to create buffer from certain data types.

### Modularity & how require() works

_Modularity_ is the first class concept of Node.
#### How require() works

`Require("something")`  works in 5 steps.
```js
require("module-name");
```
1. __Resolving__ the path of a module
2. __Loading__ contents of module art given file path
3. __Wrapping__ module so that it will have its own local scope.
4. VM __Evaluate__ contents of module.
5. __Cache__ the module so that it doesnt have load file again.

#### Module object

* id: Identifier of module. Full path of the module file will be used here, except for _root_ module.
* filename: Path of the module file. 
* paths: Where node looks to find a file for a named module. E.g:  `require("module-name")`. If module did not find in any of paths, node iwll throw an error.
* Index.js is the default name for a module.
* Anything that is added to __exports__ object can be accessed in other modules.
```json
Module {
  id: '<repl>',
  exports: {},
  parent: undefined,
  filename: null,
  loaded: false,
  children: [],
  paths:
   [ 'C:\\Users\\shibu\\Source\\Repos\\Notes\\repl\\node_modules',
     'C:\\Users\\shibu\\Source\\Repos\\Notes\\node_modules',
     'C:\\Users\\shibu\\Source\\Repos\\node_modules',
     'C:\\Users\\shibu\\Source\\node_modules',
     'C:\\Users\\shibu\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules',
     'C:\\Users\\shibu\\.node_modules',
     'C:\\Users\\shibu\\.node_libraries',
     'C:\\Program Files\\nodejs\\lib\\node' ] }
undefined
```
