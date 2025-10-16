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

console.log(loginUserMess());