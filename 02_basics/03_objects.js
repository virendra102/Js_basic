// singleton

//object literals

//Object.create (this method to create the object is called constructore method)
const mySym = Symbol("key1")

const user = {
    name:"Viren",
    age: 20,
    location: "champaner",
    [mySym]: "key2",
    "state": "Rajastan",
    email: "raju@google.com",
    isLoggedIN: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(user.location)
// console.log(user["location"])
// // you can't print the state by user.state it is in string form so you have to use below form
// console.log(user["state"])
// // for symbol access use below form
// console.log(user[mySym])
// update the object property
user.age = 21

//Object.freeze(user) // it will not allow to change the object properties
user.age = 22 // it will not change the age because object is freezed
console.log(user.age)

user.greeting = function(){
    console.log("Hello user");
}

user.greetingTwo = function(){
    console.log(`Hello ${this.name} you are ${this.age} years old`);
}

console.log(user.greeting())
console.log(user.greetingTwo())
