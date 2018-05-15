# Node js

## Architecture

libuv and V8 are the 2 key elements of Node js. 

## libuv
Is a set of c++ libraries which does all the file system handling. It also process that cannot be handled within 1 thresad yhat V8 cannot handle.

### VMs

Node used VMs to run JavaScript in the server.

#### V8

Is the default VM used by Node to run JavaScript.

Check the version of V8 installed with node.

```shell
node -p 'process.versions.v8'
```

#### Chakra

Created by Microsoft

## Nodes CLI and REPL

starting `node` without any args will start a `REPL`. a.k.a inline intrepreter.

Provides auto complete when hit `tab` key.
