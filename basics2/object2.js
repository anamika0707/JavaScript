// there are two ways to declare a object 1 way is : const tinderUser=new Object() the object created using this syntax is a singleton object
// the object created using the syntax: const tinderUser={} this is a non singleton object this is called as object literals
const tinderUser={}
tinderUser.id="123avc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false
console.log(tinderUser)
//object inside object
const regularUser={
    email:"sam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"anamika",
            lastname:"yadav"
        }

    }
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj)
//console.log(obj3)
const obj4={...obj1,...obj2}
console.log(obj4)
const user=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
         id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
       email:"h@gmail.com"
   }


]
user[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
//another syntax to use the value of objects that is called as destructuring
//const {courseInstrutor}=course
//console.log(courseInstrutor)
//if the name couseInstructor is very large the we can rename it as 
const {courseInstructor:instructor}=course
console.log(instructor);

