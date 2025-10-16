const mcu = ["Thor","Cap","Ironman"];
const dc = ["Superman","Batman","flash"];

// console.log(mcu)
// console.log(dc)

 mcu.push(dc);
//console.log(mcu)
// console.log(mcu[3][1])

// const allU = mcu.concat(dc);
// console.log(allU)


// spread operator

// const allUh = [...mcu,...dc]
// console.log(allUh)

const hero = [1,2,3,[4,5,6],7,8]

const heroCou = hero.flat(Infinity)
console.log(heroCou)

console.log(Array.isArray("ranank"))
console.log(Array.from("hitessh"))
console.log(Array.from ({name:"hitesh"})) //interesting

let score1 = 996
let score2 = 55
let score =343

console.log(Array.of(score1,score2,score));