 
 const name = "virendra"
 const repoCon = 66

 console.log(`hello i have ${repoCon} repository`)

 const game = new String('gtahomecoming')

 console.log(game[2])
 console.log(game.__proto__)

 console.log(game.length)

 console.log(game.indexOf('t'));

 const newString = game.substring(0,4)
 console.log(newString)

 const anotherString = game.slice(-8,4)
 console.log(anotherString)

 const newStringOne = "      virendra   "
 console.log(newStringOne)
 console.log(newStringOne.trim())

 const url = "https://virendra.com/home"

console.log(url.replace('home','.'))
 
console.log(url.includes('home'))

console.log(game.split('.'))