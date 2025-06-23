const coding=["js","java","cpp","ruby"];
// coding.forEach( function (item) {//this function is a call back function hence it does not have any name
//     console.log(item);

// })
// coding.forEach((item)=>{}){
//     console.log(item);
// }

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding=[//this is array containing objects
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"cpp",
        languageFileName:"cpp"
    }

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})