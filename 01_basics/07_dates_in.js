// time date

let myDate = new Date();
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2024,9,31,5,30,0);
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(myTimeStamp/(1000*60*60*24)));

let newDate = new Date("2024-10-31");
//console.log(newDate.getMonth());
//'${newDate.getDay()}'}

console.log(newDate.toLocaleString("default", {month: "short"}))