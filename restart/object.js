let obj={
    name: "John Doe",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

console.log(obj);
obj.greet(); // Output: Hello, my name is John Doe


let arr=[1, 2, 3, 4, 5];
let evenNumbers = arr.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

let arr2=[1, 2, 3, 4, 5];
let ans=arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(ans); // Output: 15

//iteration of the array using forEach
arr2.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});
//using traditional for loop
for (let i = 0; i < arr2.length; i++) {
    console.log(`Element at index ${i} is ${arr2[i]}`);
}

//using forin loop
for (let index in arr2) {
    console.log(`Element at index ${index} is ${arr2[index]}`);
} 

//iteration of the object using forin loop
for (let key in obj) {
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

//iteration of arra or object using forof loop
for (let value of arr2) {
    console.log(`Value: ${value}`);
}