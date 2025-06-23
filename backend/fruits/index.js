//if we want to export multiple file from a directory then we will make another index.js file that will require all the files
const apple=require("./apple");
const mango=require("./mango");
let fruits=[apple,mango];
module.exports=fruits;