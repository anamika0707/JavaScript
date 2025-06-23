/**
 * Read from a external file
 */
const fs=require('fs') //this gives an object
//console.log(typeof fs)

/**
 * Read in the sync way
 */
console.log("before starting to read")

//const content=fs.readFileSync("input.txt")

//reading in the async way
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log("content of the file is:"+content)
})
//console.log("Output content is :" +content)
console.log("last line")