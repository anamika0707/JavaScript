
if(true){
    let a=10;
    const b=20;
    //var c=20;
    

}
// console.log(a)
// console.log(b)
// console.log(c) //this will give output jabki scope ke hisab se c ki value jo hai wo sirf if ke statement mein hi aai chahiye aisa isliye hua kyuki humne c ko var declare kiya
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)

    }//child function parent ke function ko access ker pata hai lekin jo parent function hai wo child function ke varible ko access nhi ker pata hai
    //console.log(website);
    two()
}
one();
if(true){

    const username="anamika"
    if(username=="anamika"){
        const website="youtube"
        console.log(username+website);
    }
}



// **********************Interesting*****************
addone(5) //hum neech declare function ko is tarah bhi access ker sakte hai 
function addone(num){
            return num+1
}

//addone(5);
// addTwo(5)//agar hum neeche wale function ko uske declaration ke pehle acces kerenge ko wo error show karega hence uper aur neeche wale functions mein yehi antar hai 
const addTwo=function(num){
    return num+2
}

addTwo(5)