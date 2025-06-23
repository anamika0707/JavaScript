/**
 * higher order function is a fn in which we pass function as a parameter to another function
 */

function operation(operatorFn,a,a){
    return operatorFn(a,b)
}

function add(a,b){
    return a+b
}

let result=operation(add,5,6)
console.log(result)

function getGreet(){
    return function(){
        console.log("hello")
    }
}
let greetFn=getGreetMethod()
console.log(typeof greetFn)