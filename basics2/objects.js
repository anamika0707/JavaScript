//singleton
// we can also create object using Object.create
//object literals
//the syntax to declare a symbol: const sym=Symbol("key")

const Jsuser={
    name:"Anamika",
    "full_name":"yadav",
    [mySym]:"mykey",//hume jab symbol ko key ki tarah treat kerna ho to hum is syntax ka use karenge
    age:21,
    location:"allahabad",
    email:"anamika@gamil.com",
    lastLoginDays:["monday","tuesday"]

}
//to access the elements inside the object we use the syntax given below
console.log(Jsuser.email)
console.log(Jsuser["email"])//humne email ko inverted comma mein isliye likha hai kyuki jo computer hai wo jo humne keys define ki hai object ke andar use string ki tarah treat kerta hai
console.log(Jsuser["full_name"])//full_name ko dot operator se access nhi kert sakte hai 
console.log(Jsuser[mySym])
//to change the value in the object of the key we will use the following syntax
Jsuser.email="bhavna@gmail.com"
Object.freeze(Jsuser)//this will help to avoid any changes in the object
console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello js user") 
}
Jsuser.greetingTwo=function(){
    console.log("hello js use,${this.name}");
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo());

