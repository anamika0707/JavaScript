//desturcturing:fetch the values out of arrays and objects and after that assign it to the variable
const nums=[1,2,3,4]
const [a,b,c,d]=[1,2,3,4]
console.log(a)

//destructuring in an object
const per={
    age:55,
    name:"john",
    city:"xyz",
    address:{
        city:"abc",
        state:"anb"
    }
}
const {name,age,address:{city,state}}=per
console.log(name)