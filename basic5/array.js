arr=[1,2,3,4]
arr1=new Array()
//arrays are mutable
arr=[1,2,3,4,5]
arr.push(11)//add element at the last
console.log(arr)
arr.ushift(99)//add element at the start
console.log(arr)
//removing element
arr.pop()//remove element from end
arr.shift()//remove element from start
// concatenation of array
let a1=[1,2]
let a2=[3,4]
let r=a1.concat(a2)
//length of array
a1.length
//convert array into string
char_arr=['a','b']
console.log(char_arr.join())
console.log(char_arr.join('#'))
console.log(char_arr.toString())
//slicing of the array
let num=[1,2,3,4,5,6]
console.log(num.slice(2))
console.log(num.slice(2,3))
//splicing which modifies the array
let nums=[1,2,3,45,66]
let remove=nums.splice(2,2)//this means from second index slice two elements
let removed=nums.splice(2,2,11,12,13)//this means from second index remove two elements and add 11 12 13

//reverse array
let number=[1,2,3,4,5]
number.reverse()
//indexOf() this tells index of the particular element

//sorting in an array
let my_ar=[1,2,3,5,2]
my_ar.sort((a,b)=>a-b)
my_ar.sort((a,b)=>b-a)