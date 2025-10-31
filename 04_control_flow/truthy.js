const userEmail = "v@virendra.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false , 0 , -0 ,BigInt 0n, "", null ,undefined ,NaN

// truthy values
// "0","false", " ",[],{}, function(){}

// to check array

const userId = [];
if (userId.length === 0) {
  console.log("Array is empty");
}

//to check object
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish Coalescing OPERATOR (??): null undefined

let val1;
// val1 = 5 ?? 20;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 52 ?? 40;

// console.log(val1);

// Terniary Operator

//condition ? true : false

const iceTea_price = 150;
iceTea_price <= 88 ? console.log("less than 88") : console.log("more than 88");
