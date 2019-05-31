const path = require('path');

// Base filename
console.log(__filename);
console.log(path.basename(__filename));

// dir name
console.log(path.dirname(__filename));

// file extension
console.group(path.extname(__filename));

// creating path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.parse(__filename).name);

// concatenating the paths
console.log(path.join(__dirname, 'test', 'hello.html'));

