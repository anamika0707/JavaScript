const sum=(a,b) =>a+b; // this can also be export as module.export.sum=
const mul=(a,b) =>a*b;
const g=9.8;
const pi=3.14;
module.exports=123;

//agar humko import aur export ka use kerna hai to hum sbse pehle pakage.json file mein type:module likhenge phir import ka use karenge syntax: import {sum,pi} from "./math.js"
//we cant selectively load only the pieces we need with require but with import we can selectively load only the pieces we need which can save memory loading is synchronous for 'require' and asynchronous for 'import'
