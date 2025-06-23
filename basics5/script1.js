let btn=document.querySelector("button");

btn.addEventListener("click",function(){
   let h2=document.querySelector("h2");
   let randomColor=getRandomColor();
   h2.innerText=randomColor;
   
   let div=document.querySelector("div");
   div.style.backgroundColor=randomColor;

})

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let color=`(${red},${green},${blue})`;
    return color;
}
//this is the keyword jo bata hai jisne call kiya for example
btn.addEventListener("click",function(){
    this.style.backgroundColor=blue;
    console.log(this);
    
})