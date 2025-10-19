function sayName (){
    console.log("virendra")
}

// sayName();

// function addTwoNum (num1,num2){
//     console.log(num1+num2);
// }

function addTwoNum (num1,num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}


const result = addTwoNum(1,2);

// console.log(`The result is : ${result}`);
// console.log(typeof result);

function loginUserMess(username= "ragu"){
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

//console.log(loginUserMess());

// function calculateCarPrice(...num1){
//     return num1;
// }

// console.log(calculateCarPrice(5,40,5))

// function calculateCarPrice(value1,value2,...num1){
//     return num1;
// }

// console.log(calculateCarPrice(5,40,5))

const user ={
    username:"virendra",
    price: 200,
}

function handleObject(anyobject){
    console.log(`this user named ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

handleObject({
    username: "rashid",
    price: 600
})

const homi = [55,65,88,25]

function returnSecondValue(getArray){
    return getArray[2];
}

//console.log(returnSecondValue(homi))

console.log(returnSecondValue([66,100,89,44]))