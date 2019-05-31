/* Module wrapper function */
/*
(function (exports, require, module, __filename, __dirname){

})
*/
//console.log(__dirname, __filename);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log("My name and age is " + this.name + " " + this.age);
    }
}

module.exports = Person;