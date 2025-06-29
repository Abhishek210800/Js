//singleton
//object.create


//object literals
const mySym = Symbol("key1");


const jsObj ={
  name:"Abhishek",
  "full name" : "Abhishek Mishra",
  [mySym]:"myKey1",
  age : 24,
  location: "Delhi",
  email : "abhishek@google.com",
  isLoggedIn: false,


}
// console.log(jsObj.name);
// console.log(jsObj["name"]);
// console.log(jsObj["full name"]);
// console.log(jsObj[mySym]);
// console.log(jsObj);

jsObj["full name"] = "Parish bindal"
Object.freeze(jsObj);
jsObj["full name"] ="Abhishek Kumar Mishra"

console.log(jsObj);
