const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby'
}
for(const key in myObject){
    //console.log(myObject[key])
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr=["js","cpp","java"];
for(const key in arr){
   // console.log(key);
   console.log(arr[key]);
}