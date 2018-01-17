# Data service.
Services provides basic DB CRUD services. Following are the functionalities defined by data services.
### Internal store
An in memory store to hold data for faster app loading or when app is offline. Services in angular are singletons, these can be used for storing data.
### Behavior subject
can be used for receiving and emitting new user lists
### User Service
* LoadAll
* Add User
* UserbyId
### Observables
Avoids adding or updating data directly. It mandates consumers to go through CRUD methods defined in services to modify data.
### Data structure
2 entities - User and note
```ts
User:
{
    id: number,
    birthDate: Date,
    name: string,
    avatar: string,
    bio: string,
    notes: Note[]
}

Note:
{
    id: number,
    title: string,
    date: Date
}
```
App uses following web service to get user data
```url
https://angular-material-api.azurewebsites.net/users
```