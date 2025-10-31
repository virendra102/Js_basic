// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==4) {
       // console.log("4 is best equal num")
    } 
    //console.log(element)
}

for (let i = 1; i <= 10; i++) {
  //console.log(`Outer loop value:${i}`);
  for (let j = 1; j <= 10; j++) {
    //console.log(`inner loop value:${j}`);
    //console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "bagnakh", "nagraj"];

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

for (let index = 0; index < 21; index++) {
  if (index == 10) {
    //console.log(`detected 10`);
    break;
  }
  //console.log(`value of i is :${index}`);
}

for (let index = 0; index < 21; index++) {
  if (index == 10) {
    console.log(`detected 10`);
    continue;
  }
  console.log(`value of i is :${index}`);
}