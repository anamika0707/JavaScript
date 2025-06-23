const marvel_hero=["thor","Ironman","spiderman"]
const dc_hero=["superman","flash","batman"]
// marvel_hero.push(dc_hero)//from this the dc array is treated as a single object of and is insert as a array in marvel array
// console.log(marvel_hero)
// const all_hero=marvel_hero.concat(dc_hero)
// console.log(all_hero)
const all_new_heros=[...marvel_hero,...dc_hero]//spread operator
console.log(all_new_heros)
const another_array=[1,2,3,[4,5,6],7,[6,[7,[4,5]]]]
const real_array=another_array.flat(Infinity) //flat method is used to return a new array that concatenate the sub arrays to the specified depth
console.log(real_array)
console.log(Array.isArray("Anamika"))//to check whether the thing is array or not
console.log(Array.from("anamika"))//to convert into array
console.log(Array.from({name:"anamika"}))//this will give an empty array as we have to specify which type of array you want to make
let score1=100
let score2=300;
let score3=200
console.log(Array.of(score1,score2,score3))
