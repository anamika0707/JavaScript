//function is defined here
function sayMyName(){
    console.log("My name is John Doe");
}

//to use the function, you can call it like this:
sayMyName();

//this is example of anonymous function
let ans=function add(a, b) {
    return a + b;
}

console.log(ans(5, 10)); // Output: 15

//example of arrow function
let multiply = (a, b) => {
    return a * b;
}
//difference between arrow function and normal function is that in arrow function we don't have to use the keyword 'function' and we can use the arrow (=>) to define the function