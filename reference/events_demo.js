const eventEmitter = require('events');

// class creation
class MyEmitter extends eventEmitter{}

// init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on('event', () => console.log('Fire!!!'));

// init event
myEmitter.emit('event');