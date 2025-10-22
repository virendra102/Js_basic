const user={
    username: "virendra",
    price: 599,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    },
    
    
}

// user.welcomeMessage();
// user.username="raman"
// user.welcomeMessage();
// console.log(this)

// you can't use "this " directly in the function it gives undefined

// function chai(){
//     let username = "virendra"
//     console.log(this.username)
// }

// chai();

// const chai = ()=>{
//     let username = "virendra"
//     console.log(this);
// }
// chai();

// const addTwo =(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(7,2))

// const addOne = (num1,num2)=> num1+num2

// const addTwo = (num1,num2)=>(num1+num2)

const addTwo = (num1,num2)=>({username:"virendra"})

console.log(addTwo(5,6))
