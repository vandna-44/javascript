//Primitive 
//7 type => String, Number ,boolean , null , undefined, symbol,BingInt
//example

const score = 12
const scoreValue = 12.8 //number type

const isLoggedIn = false //boolean
const outsideTemp = null
let userEmail; // undefined 

const id = Symbol('133') 
const anotherId = Symbol('133')

console.log(id === anotherId);







//Reference (non primitive)
//Array ,object , functions
//array
const heros = ["shaktiman", "joy", "heem"];
let myObj = {
    name: "vindu",
    age: "20",
}

//function 
const myFunction = function(){
    console.log("hello");
}
console.log(typeof myFunction);


//----------------------------memory
//stack (primitive), Heap (non-Primitive)

let name = "jay"

let anothername = "roy"
anothername = "jon"



//console.log(name);
//console.log(anothername);

let userOne = {
    Email = "user@xyzemail.com",
    Upi = "user@ybl",
}

let userTwo = userOne

userTwo.email = "joy@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



