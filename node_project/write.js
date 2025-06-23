/**
 * write the code to write to an external file
 */
const fs=require('fs') 

console.log("before")
// fs.writeFileSync('output1.txt','hello anamika')

//async write on external file
fs.writeFile('output.txt','hello this is async',err=>{
    if(err){
        return console.log(err)
    }
    console.log("written successfully")
})
console.log("after")
