//! We can declare objects using two types : Literal and Constructor

// singleton -> The object we make using constructor that is a singleton object (only one type of object) but using different way other than constructor, we can make multiple instances of object. 
// Literal -> No singleton || Constructor -> singleton

//! Object literals
const mySym = Symbol("symbolKey");

const user = {
    name : "Remo",
    age: 23,
    "my hobbies" : ["Piano","Coding","Drums"],
    [mySym] : "I am a Symbol"
}
// console.log(user.name);
// console.log(user["name"]);
// console.log(user["my hobbies"]);
// console.log(user[mySym]);

// user.name = "Sharadindu";
// Object.freeze(user); //! freezing the object
// user.name = "Remo";

user.greeting = function(){
    return "Hello User!";
}

user.greetingUser = function(){
    return `Hello ${this.name}!`;
}

// console.log(user.greeting());
// console.log(user.greetingUser());

