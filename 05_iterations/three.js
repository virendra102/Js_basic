// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //console.log(num);
}

const greet = "hello world";
for (const get of greet) {
  //console.log(`each char is ${get}`);
}

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("UK", "LONDON");
map.set("JAP", "TOKYO");

//console.log(map);

for (const [key,value] of map) {
  //console.log(key ,':-', value)
}

const myObj ={
  'game1': 'nfs',
  'game2': 'spiderman'
}

for (const [key,value] of myObj) {
  console.log(key ,':-', value)
}