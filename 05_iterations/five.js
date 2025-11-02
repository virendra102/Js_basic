const coding = ['js','rb','c','java','python']

// coding.forEach(item => {
//     console.log(item)
// });

// coding .forEach(value=>{
//     console.log(value)
// });

// function printme(value){
//     console.log(value)
// }

// coding.forEach(printme)

// coding.forEach( (item, index ,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding  =[
    {langName:"js",
    langFileName: "js"},
    {langName:"python",
    langFileName: "py"},
    {langName:"go",
    langFileName: "go"},
    {langName:"shell",
    langFileName: "sh"}
]

myCoding.forEach((item)=>{
    console.log(item.langName)
})