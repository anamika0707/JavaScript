function sayMyName(){
    console.log("A")
    console.log("n")
    console.log("a")
    console.log("m")
    console.log("i")
    console.log("k")
    console.log("a")
}
//sayMyName()
// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// function addTwoNumber(number1,number2){
//     let result=number1+number2
//     return result;
// }

// const result=addTwoNumber(4,4)
// console.log("Result: ",result);
function loginUserMessage(username){
    if(username==undefined){//in the condition we can also write(!username)
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Anamika"))
//if we don't pass any value in the function then it will give the undefined value output

function calculateCartPrice(...num1){ //if we passs more than single value then the syntax(num1) is not efficient hence we will use the spread operator i.e. ...num1
    return num1
}
console.log(calculateCartPrice(100,200,320))
const user={
    username:"anamika",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user) or we can use another syntax given below
handleObject({
    username:"anamika",
    price:399
})
const mynewArray=[200,400,600,500]
function returnSecondValue(getArray){
    return getArray[2]

}
//console.log(returnSecondValue(mynewArray))
console.log(returnSecondValue([200,400,600,500]));