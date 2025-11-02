const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
    
    //console.log(`${key} short cut is for ${myObject[key]}`)
    
}

const programming = ['js','rb','c','java','python']

for (const key in programming) {
    //console.log(programming[key])
    
}

// const map = new Map();
// map.set("IN", "INDIA");
// map.set("UK", "LONDON");
// map.set("JAP", "TOKYO");

// map is not iteratable the for in will not show output.
// for (const key in map) {
//     console.log(map[key]);
    
    
// }