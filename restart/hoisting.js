//function hoisting example
sayMyName(); // Output: My name is John Doe
// This will work because of hoisting

function sayMyName() {
    console.log("My name is John Doe");
} 

//variable hoisting example
console.log(myVariable); // Output: undefined
// This will work because of hoisting, but the value is undefined        
var myVariable = "Hello, World!";
// The variable is hoisted, but the assignment happens after the console.log, so it prints undefined

//function as a first-class citizen example
function solve(number){
    return function square(num) {
        return num * num;
    }
}
let ans=solve(5);
let result = ans(10);
console.log(result); // Output: 100
// Here, the function 'square' is returned from the 'solve' function and can be called later with a number to get its square
// This demonstrates that functions can be treated as first-class citizens in JavaScript
//function can also be passed as an argument to another function
function greet(name) {
    console.log("Hello, " + name);
}   
function callFunction(func, name) {
    func(name);
}
callFunction(greet, "John"); // Output: Hello, John

//function can also be returned from another function   
function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15
// Here, 'createAdder' returns a function that adds 'x' to 'y', demonstrating that functions can be returned from other functions

//function can also be assigned to a variable
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(10, 5)); // Output: 5
//function can also be assigned as a element of an array
const arr=[
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    }
    ,   
    function(a, b) {
        return a * b;
    }
]
console.log(arr[0](10, 5)); // Output: 15
console.log(arr[1](10, 5));

//function can also be assigned as a property of an object
const objWithFunction = {
    age: 30,
    greet: function() {
        console.log("Hello, I am " + this.age + " years old.");
    },
    wt:45
}