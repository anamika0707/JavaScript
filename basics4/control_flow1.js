if(2==="2"){//=== this helps to check whehter their types are also equal or not
    console.log("executed")

}
else{
    console.log("not valid");
}

const score=200;
if(score>100){
    const power="fly";
    console.log(`User poer : ${power}`);
}
//console.log(`User power: ${power}`);

const userLoggedIn=true;
const debitCard=ture;

if(userLoggedIn&&debitCard&&2==3){
    console.log("you can make a purchase");
}

//falsy value: 0,-0,BigInt 0n,"",null,undefined,Nan 
//truthy value: all other values except falsy values and "0","false"," ",[],{},function(){}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("empty object");
}
//and or operator and switch case
const userEmail=[];

// if(userEmail.length===0){ to check whether the array is empty also check the type of array
//     console.log("Array is empty")
// }
 
const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//Nullish colescing operator(??):null undefined
let val1;
//val1=5??10;//pehli value assign ho jati hai val1 ko
val1=null??10;//isme val1 ko 10 value assign ho jati hai
val1=undefined??15;
val1=null??10??20//value assign 10
console.log(val1);

//ternary operator
//condition?true:false
const ice=100;
ice>=100?console.log("greater"):console.log("less")