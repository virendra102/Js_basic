// array

const myArr= [0,1,2,3,4,5]
const myHeros = ["shan chi","ironfist"]

const myArr2 = new Array(1,2,3,4)
 console.log(myArr2[1])

// Array Methods

// myArr2.push(5,6,7)
// myArr2.pop()

// myArr.unshift(8)
 //myArr2.shift()
 
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(2));

const newArr = myArr.join()

//  console.log(newArr)

// slice, splice 

console.log("A",myArr);

const myn1= myArr.slice(1,3);

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);

