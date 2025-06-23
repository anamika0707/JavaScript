const user={
    name:"anamika",
    age:22,
    city:"allahabad"
}
//Accessing the data
console.log(user.name)

//adding data to the object
user.country="India"
user["continent"]="asia"
console.log(user)
//deleting object key and object itself
delete user.country
console.log(user)
delete user['continent']
console.log(user)

let person={
    name:"bhavna",
    age:22,
    address:{
        city:"allahabad",
        state:"Uttar pradesh",
        country:"India"
    }
}
for(let key in person){
    console.lof(key,"=>",person[key])
}
console.log(Object.keys(person))
console.log(Object.values(person))
//get both keys and the values
console.log(Object.entries(person))

//cloning an object using assign
const new_person=Object.assign({},person)
console.log(new_person)
const new_person1=Object.assign({},person,{role:"developer"})