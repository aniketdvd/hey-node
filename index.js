/*console.log("Hello from NodeJS");

const Person = require('./person'); //not ES6

const person1 = new Person('Jhallu Dada', 60);

person1.greeting();
*/

//server http

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url === '/'){
        res.write('<body><h1>HOMEmoney</h1></body>');
        res.end();
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on', PORT));