try{
    console.log("try block start here");
    console.log(x);
    console.log("try block ends here");
}
catch(e){
    //definekrte h, error ke saath hum kya kerna chahte hai
    //retry logic
    //fallback mechanism
    //logging
    //custom error
    console.log("i am inside catch block");
    console.log("your error is here:",e);
}
finally{
    console.log("this will run everytime");
}
//we can also create custom error lets create custom error

try{
    console.log(a);
}
catch(err){
    throw new Error("bhai pehle declare ker do phir print kerna");
}


let errorcode=100;
if(errorcode=100){
    throw new Error("Invalid json");
}