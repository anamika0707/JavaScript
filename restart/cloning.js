//object can be clone using various ways
// spread operator
let src={
    age:12,
    wt:30,
    ht:180
};

let dest={...src};
src.age=90;
console.log("src:",src);
console.log("dest:",dest);

//assign operator
let dest1=Object.assign({},src);
//if we want to clone multiple objects to another object then simply add the object
//let src2={something} dest1=Object.assign({},src,src2)

// iteration method using for loop

 let dest3={}
 for(let key in src){
    let newkey=key;
    let newvalue=src[key];
    //insert newkey and value in dest and create a clone
    dest[newkey]=newvalue;
 }