//node the process.argv give us the method to take input in node js
// const somevalue=require("./math");//if we did not export anything and require that in another file then we get a empty string

// console.log(somevalue);
//require() it is a built in function to include external modules that exist in separate files
//module.exports : it is a special object jo wo saari cheeje contain kerti hai jo ek file dusri file ko bhejna chahta 
//now here we can require a whole fruits directory
const name=require("./fruits")
console.log(name);
console.log(name[0].name);