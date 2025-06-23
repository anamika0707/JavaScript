const user={
    username:"anamika",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        //console.log(this); ye jo hai wo current value ko print karayega
    }
}
// user.welcomeMessage()
// user.username="bhavna"
// user.welcomeMessage()
//console.log(this);//this will give emplty parenthesis as output
// function chai(){
//     let username="anamika"
//     console.log(this)
//     console.log(this.username)// this will give undefined as output
// }
// chai()
//isse hum ye seekhe ki hum this ka use sirf object mein ker sakte hai



// const chai=function(){
//     let username="anamika"
//     console.log(this.username);
// }
// chai() //ye bhi undefined output dega issse avoid kerne ke liye hum neeche wale syntax ka use karenge


// const chai =()=>{ //this is called arrow function
//     let username="anamika"
//     console.log(this);//ye empty  parenthesis output dega
//     console.log(this.username)// ye undefined output dega
// }
// chai();


//basic syntax of arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(4,3))

//implicit return arrow function is given below
const addone=(num1,num2)=>(num1+num2) //isme hum return keyword nhi likhna padta

console.log(addone(1,2))

const add=(num1,num2)=>({username:"anamika"})//object ke liye hume curly braces lagana hi padega

console.log(add(3,5))


