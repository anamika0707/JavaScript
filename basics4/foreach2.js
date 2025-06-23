// const coding=["js","java","ruby","python"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     //return item
// })
// //forEach never return any value
// console.log(values)//undefined

const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newmums=myNums.filter((num)=>num>5)
//another syntax of filter function using the arrow function
// const newnums=myNums.filter((num)=>{
//     return num>5   //note upar wale mein jab hum bracket nhi laga rhe the to return nhi likhna pada tha lekin jab hum idhar curly braces laga diye hai to return statement likhna pada kyuki isme scope ka concept aa gaya
// })

const newNums=[];
myNums.forEach((num)=>{
    if(num>5){
        newNums.push(num)
    }
})
console.log(newNums);



const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newnums=myNumbers.map((num)=>num+10)
console.log(newnums);