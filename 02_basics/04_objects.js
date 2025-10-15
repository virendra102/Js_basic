//singleton object
//const leetUser = new Object() 

//nonsingleton object
//const leetUser = {}

const leetUser = {}

leetUser.id = "123abc"
leetUser.name= "rudra"
leetUser.isLoggedIn= true

// console.log(leetUser)

const regUser= {
    email: "regper@gmail.com",
    fullname: {
        userfullname: {
            firstname: "virendra",
            lastname: "rajput"
        }
    }
}

//console.log(regUser.fullname.userfullname.firstname);

//example practice 

const instaUser = {
    email : "tango@gmail.com",
    username: "rv_02",
    fullname: {
        firstname: "virendra sinh",
        lastname: "rajput"
    },
    age : 20,
    posts : {
        videos: 10,
        photos: 50,
        reels: 5,
        stories: {
            day1: "traveling",
            day2: "eating",
            day3: "coding"
        }
    }
}

//console.log(instaUser.posts);

const obj1 = { 1:"a"
, 2:"b"}
const obj2 = { 3:"c"
, 4:"d"}

const obj3 = {...obj1,...obj2};
const obj4 = Object.assign({},obj1,obj2);

// console.log(obj3);
// console.log(obj4);

const user =[
    {userId:1,username:"viru"},
    {userId:2,username:"tinku"},
    {userId:3,username:"rinku"},
    {userId:4,username:"pinku"},
]

//console.log(user[2].username)

// console.log(leetUser)

// console.log(Object.keys(leetUser));
// console.log(Object.values(leetUser));
// console.log(Object.entries(leetUser));

// console.log(leetUser.hasOwnProperty("name"))
// console.log(leetUser.hasOwnProperty("email"))


const course = {
    coursename: "js in hindi",
    price: "699",
    courseInstructor: "hitesh"

}
//object de-structure
const {courseInstructor:instructor} = course

console.log(instructor);

