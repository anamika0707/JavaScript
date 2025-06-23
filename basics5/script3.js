let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value);//extracting form data
    
    // alert("form submitted")
    // console.log("form submitted");
})
//to prevent from default action we use that mtlb jab idhar hum form submit ker rhe the to wo dusre page pe redirect ho ja rha tha hum aisa nhi chahte isliye hum is use kerte hai


