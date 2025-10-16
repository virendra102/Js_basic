// Primitive

// 7 types: String , Number , Boolean , null , undefined , Symbol, BigInt

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('34')
const anotherId = Symbol('34')

// console.log(id == anotherId)

//const bigNum = 4651444494465498411644n

// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ['ironman','raj','spiderman'];

let myObj = {
    name:"virendra",
    age:22,
}

const myFun = function(){
    console.log("welcome to the playground")
}

myFun();

// https://262.ecma-international.org/5.1/#sec-11.4.3


//******************************************************** memory ****************************************/

// Stack (Primitive) ;  Heap (Non-Primitive)

let my = "rvybot.com";

let anotherName = my
anotherName = "rv02.com"

// console.log(my)
// console.log(anotherName)

let userOne = {
    email: "useone@gamil.com",
    upi: "userone@ybl",
}

let userTwo = userOne

userTwo.email = "raval.com"

// console.log(userOne.email);
// console.log(userTwo.email);
