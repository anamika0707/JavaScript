//for loop
let n=10;
for(let index=0;index<n;index++){
   console.log(index + ""); 
}
//loops in javascript is same as in other programing languages
let my_array=["file","pen","eraser"];
for(let i=0;i<my_array.length;i++){
    console.log(my_array[i]);
}
//break and continue
for(let index=0;index<10;index++){
    if(index==5){
        console.log("5 is detected");
        break;
    }
    if(index==4){
        console.log("4 is detected");
        continue;
    }
    console.log(index);
}
//while loop
let i=0;
while(i<10){
    console.log(`value of i is ${i}`);
    i=i+2;
}
let myArray=[1,2,3,4,5];
let arr=0;
while(arr<myArray.length){
    console.log(myArray[arr]);
    arr=arr+3;
}

//do while loop
let j=1;
do{
    console.log(j);
    j++;
}while(j<=5)