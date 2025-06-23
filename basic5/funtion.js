function hello(){
    console.log("hello")
}
hello()

function sum(a,b){
    return a+b
}
var ans=sum(5+4)
console.log(ans)
 //default value

function odd(a,b=3){
   return a+b
}
console.log(odd(5))

//arguments object
function fun(){
    console.log(arguments)
}
fun(1,2,3,4,5,6)
