const score = 100;

const balance = new Number(1000);
console.log(balance);
console.log(balance.toString());
console.log(balance.toFixed(2));

console.log(typeof score);
console.log(typeof balance);

const otherBalance = 1510.2323;
console.log(otherBalance.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));

//++++++++++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.abs(-100));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));

console.log(Math.random());
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
