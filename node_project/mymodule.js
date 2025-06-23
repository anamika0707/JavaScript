let add=(a,b)=>{
    return a+b;
}

let prod=(a,b)=>{
    return a*b;
}
 //module is the collection of javascript files that contains logic to solve problems
 //how we can convert this file into module is given below
 //module.exports=add
 //we can export one function at a time only another function will override the function if we exports it hence we will export object
module.exports={
    add:add,
    prod:prod
}

/**
 * another way to export the function is 
 * exports.add=(a,b)=>{
 * return a+b;
 * }
 */

