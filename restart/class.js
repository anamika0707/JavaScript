class Human{
    //properties
    age=13;//public
    #wt=43; //private
    ht=180;


    //constructor

    constructor(newAge,newHeight,newWeight){
        this.age=newAge;
        this.ht=newHeight;
        this.#wt=newWeight;
    }
    //behaviour

    walking(){
        console.log("i am walking ",this.#wt);
    }

    running(){
        console.log("i am running");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set modifyWeight(val){
        this.#wt=val; 
    }
}

// let obj=new Human();
// console.log(obj.age);
// obj.walking();
let obj=new Human(50,70);
console.log(obj.ht);

console.log(obj.fetchWeight)//agr function hota to normally jaise function ko call kerte hai waise hum ise likhte mtlb obj.fetch() lekin kyuki ye getter hai isliye humne aise likha hai


//default parameters: allows to use function with default value mtlb maan lo koi function mein parameter pass kerna jaruri tha lekin humne koi parameter pass kerna bhool gye to default parameter tab kaam ata hai 

function sayName(myName='bhavna'){//iska mtlb ye hai ki jab hum name pass nhi karenge to bhavna apne aap pass ho jayega
    console.log("my name is ",myname);
}

sayName("anamika")//output "my name is anamika"

sayName() //output: my name is bhavna

//we can also pass multiple default parametere
function Newname(fname="anamika",lname='yadav'){
    console.log(fname +" " +lname);
}
Newname("bhavna","yadav");
Newname("bhavna");

//when one parameter is dependent
function otherName(fName="hello",lName=fName.toUpperCase){
    console.log(fName +" "+ lName);
}

otherName("lover")
//hum default parameter mein arrays, object aur functions bhi pass ker skte hai