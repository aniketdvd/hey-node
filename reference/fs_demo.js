const fs = require('fs');
const path = require('path');

// create folder.
/*fs.mkdir(
    path.join(__dirname, '/test'), 
    {}, 
    function(err){
        if(err) 
            throw err;
        console.log('Folder created.');
    }
);*/


// create and write to file.
/*fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'Hello World!', 
    function(err){
        if(err) throw err;
        console.log('File created.');
    }
);*/
// writeFile OVERRWRITES!

/*fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'Hello World!', 
    function(err){
        if(err) throw err;
        console.log('File created.');

        // Appending.
        fs.appendFile(
            path.join(__dirname, '/test', 'hello.txt'), 
            ' and now i love Node JS', 
            function(err){
                if(err) throw err;
                console.log('File created. appended successfully.');
            }
        );
    }
);*/

// Reading file
/*fs.readFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'utf8', 
    function(err, data){
        if(err) throw err;
        console.log('File is opened and read:\n');
        console.log(data);
    }
);*/

// Renaming file.
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'hello-new-file.txt'), 
    function(err){
        if(err) throw err;
        console.log('File is renamed');
    }
);