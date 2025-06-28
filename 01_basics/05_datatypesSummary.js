// Primitive datatypes

//7 types = string, Number, Boolean, null, undefined, Symbol, BigInt



const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let scoreCard ; // undefined

const id = Symbol('124');

const anotherId = Symbol('124');

console.log(id===anotherId);


const bigNumber =12345678n;
console.log(bigNumber+2n);




// Reference type(Non-primitive)

//Array, objects, functions

const heros = ["shaktiman", "batman","krish"];

let myObj ={
  name:"Abhishek",
  age: 24,
}


const myFunction = function (){
  console.log("hello world");
  
}

