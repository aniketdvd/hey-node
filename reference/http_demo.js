const http = require('http');

// Create Server Object
http.createServer((req, res) => {
    res.write('hello world\nYAYYY!\n');
    res.write('tab\ttab\ttab');
    res.end();
}).listen(5000, () => console.log('Sever Running.'));