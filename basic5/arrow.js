/**
 * fn with no argument and no return
 */
var hello=()=>console.log("hello")
hello()
//fn with arguments and return
var sum=(a,b)=>a+b
console.log(sum(5+4))

/**fn with multiple body */

var add=(a,b)=>{
    console.log("this is 3rd function")
   // console.log(arguments) this cannot be used in arrow function
    return a+b
}
console.log(add(8+7))

//iife:immdiately invoke function
{function(){
    console.log("iife")
}
}{}