const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('messsage', { id: uuid.v4(), msg });
    }
}


// module.exports = Logger;

/* REVIEW REMINING */

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called listener', data));

logger.log('HelloWW');