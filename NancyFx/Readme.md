# Nancy FX

A framework to build web application. It is inspired by `Ruby framework Sinatra`, it embraces functional programming styles like _asp.net mvc_

* Simple
* Powerful
* Extensible
* Cross platform
* Configurable
* Has Builtin conventions to build applications quick
* Pipeline is straight forward and powerful
* Aligns with Http idioms without adding unnecessary obstructions.

## Hosting

Nancy allows to host application inside _Windows or Linux_ using a _Service or application_. Nancy is `Owin` aware.

## Conventions

Nancy has many _Built-in_ conventions to boost productivity. _Nancy_ allows developers to _replace conventions_.

## Routes and Modules

_Routes_ are how Nancy respond to a request from a client. Routes are usually defined by a `Http verb, path` and optionally `Filter containers` to filter by the context by the request.

_Modules_ are __containers__ for routes, it is commonly used for grouping routes with common `path` or _behavior_.

## Pipeline

_Pipeline hooks_ are used for _maintaining and establishing Context_, and adding _background functionality_.

### Authentication

nancy has builting constructs for authentication. Authentication is enabled with _request hooks_.

### Persistence
