/**
 * forEach method
 */
players=["sachin","virat","dhoni","rohit"]
players.forEach((player)=>console.log(player))
/*
 * map->creation of new transformed array
 */

arr=[1,2,3,4]
cube_arr=arr.map(num=>num**3)
console.log(cube_arr)

/**
 * filter
 */
let arr1=[1,2,3,5,8,9,6]
let even=arr1.filter((num)=>num%2==0)
console.log(even)

/**
 * reduce
 */
const sum=[1,2,3,5,6,2,8,3].reduce((curr,next)=>curr+next)
console.log(sum)