/**
 * call back function
 */
function greet(name,callback){
    const greeting="hello"+name
    callback(greeting)
}

function displayGreet(message){
    console.log(message)
}
greet("anamika",displayGreet)