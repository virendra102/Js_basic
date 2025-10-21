//var c=300
let a=500

if(true){
    let a=10
    const b=20
    //console.log("inner:"+ a);
}



//console.log(a)

function one( ){
    const username="virendra";

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website)
    two()
}

//one() 


if(true){
    const username= "virendra"
    if(username==="virendra"){
        const website="youtube"
        //console.log(username+website)
    }
    //console.log(website);
}
//console.log(username);

//******************************* interesting *******************************
//you can call function before it is .
console.log(addone(1))
function addone(num){
    return num+1;

}
// this is addtwo is an expression . you cann't call it before it is initilized
const addtwo= function(num){
    return num+2;
}

console.log(addtwo(5))

