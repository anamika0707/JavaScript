let btns=document.querySelectorAll("button");
// console.dir(btn);
// btn.onclick=function(){
//     // console.log("Button was clicked");
//     alert("Button was clicked");
// }

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;
// }
// sayHello mein humne parenthesis isliye nhi lagaya kyuki agar laga denge to wo whi execute ho jayega
// function sayHello()
// {
//     alert("Button was clicked");
// }

//event listener  : syntax----->  element.addEventListener(event,callback or function(){
// statement})

for(btn of btns){
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){
    alert("hello")
}
function sayName(){
    alert("anamika")
}