# NPM Scripts

## Advantages

* Easy to learn
* Simple
* No extra layer of abstraction
* No depedency on separate plugins
* Simple debugging
* Easier documentation
* No additional files to maintain

## Notes

### Scripts section

The scripts section allows to add steps that can run before and after a step. For example in the below code, when `npm start` is running it will run `preStart` then `start` finally `postStart` commands. The key is the `pre` and `post` key words. when they are added to a script, npm will trigger them automatically when a given step is completed.

```js
"scripts": {
    "prestart" : "babel-node tools/startMessage.js",
    "start": "babel-node tools/srcServer.js",
    "poststart" : "babel-node tools/endMessage.js"
  },
```
