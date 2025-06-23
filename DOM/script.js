//let x=document.querySelector("h1");//from this only first element is selected to select all the similar elements we will use All
//let x=document.querySelectorAll("h1");
//console.log(x);
//for class we use the below syntax
//let x=document.querySelector(".yes")
let x=document.querySelector("h2");
//x.style.color="red";
setTimeout(function(){
    x.style.color="red";
    x.style.fontFamily="Gill Sans"
},2000)


let y=document.querySelector("h1");
y.style.backgroundColor="blue";
//y.innerHTML="changed" //this changes the text of the element

//neeche wale ki wajah se hum ye set ker sakte hai ki kitni second baad wo element ka text change hoga hum isi tarah color bhi change ker sakte hai
setTimeout(function(){
    y.innerHTML="changed";
},2000)