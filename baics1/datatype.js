//Primitive : 7types
//String,Number,Boolean,null,undefined,Symbol,BigInt
//Reference(non primitive)
//Array,Objects,Functions
const score=100;
const scoreValue=100.8
const isloggedIn=false;
const outsideTemp=null;
let userEmail;
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id==anotherId);
//Arrays
const heos=["shaktiman","naagraj","doga"];
//object
let myObj={
    name:"anamika",
    age:22,
}
//function
const myFunction=function(){
    console.log("hello");
}
 //there are two type to store in  memory stack this is used to store primitive data type and heap memory is used to store non primitive data type
 //whenever stack memory is used its means that whatever variable we have declared we get copy of that variable whereas in heap we get the refernce of that variable i.e original value
 let myName="Anamika";
 let anotherName=myName;//here the copy of myName is made and is assign to anotherName variable
 anotherName="Bhavna"
 console.log(myName);
 console.log(anotherName);
 //the upper variables will be stored in stack
 //the lower object is stored in heap
 let user1={
    email:"user@gmail.com",
    upi:"user@ybl"
 }
let user2=user1;//here the user1 and user2 will be pointing to same object no copy is formed i.e if we made any change in any of the two variable then the original value will be changed  and both will have the new changed value
user2.email="anamika@hello.com";
console.log(user1.email);
console.log(user2.email);
