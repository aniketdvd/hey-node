const url = require('url');

const myURL = new URL('http://www.example.com/?id=234&status=active');

// Serialized url
console.log(myURL.href);
console.log(myURL.toString());

// host - root domain
console.log(myURL.host);

// hostName
console.log(myURL.hostname);

/// pathname
console.log(myURL.pathname);

// serialized query
console.log(myURL.search);

// params objects
console.log(myURL.searchParams);

// adding params
myURL.searchParams.append('abc', '922');
console.log(myURL.searchParams);

//looping thru params
myURL.searchParams.forEach((value, name) => console.log(name, value));