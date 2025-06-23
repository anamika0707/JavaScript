//high order array loops these loops are array specific loops

//for of
const arr=[1,2,3,5]
for(const num of arr){
    console.log(num);
}

const greetings="hello world"
for(const char of greetings){
    console.log(char);
}

//maps
const map=new Map()
map.set('IN',"INDIA");
map.set('USA',"United states");
map.set('Fr',"France");
map.set('IN',"INDIA");
console.log(map);//in map duplicate value is not inserted all value is unique and will in same order as inserted
//for in loop cannot iterate through map
for(const key of map){
    console.log(key) //this will print both key and value as a array
}
for(const [key,value] of map){//with the help of this we can print key and value separately
    console.log(key, ':-',value);
}

