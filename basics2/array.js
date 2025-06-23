const myArr=[0,1,2,6,5]
const myHeros=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4)
myArr2.push(6)
myArr2.push(7);
myArr2.pop();
console.log(myArr2)
myArr2.unshift(9);
console.log(myArr2)
myArr2.shift();
console.log(myArr2)
console.log(myArr2.includes(5));
console.log(myArr2.indexOf(4));
const newArr=myArr2.join()
console.log(newArr)
//slice,splice
console.log("A",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr)
const myn2=myArr.splice(1,3)
console.log("c",myArr)//splice operator original array ko manipulate kerta hai
console.log(myn2)