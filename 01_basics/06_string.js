const name = "Abhishek";
const repoCount = 50;

// console.log(name + repoCount + " Actor");

console.log(`Hello my name is ${name.toUpperCase()} and my repocount is ${repoCount}`);

let gameName = new String ('Abhishek')

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


//substring and slice is almost smae the only difference is that in slice we can start from the negative value(-3), but in the substring negative is treated as a 0...
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "    Abhishek  "
console.log(newStringOne);
console.log(newStringOne.trim());//trim removes the extra spaces from the string


const url = "https://abhishek.com/abhishek%10Mishra"

console.log(url.replace('%10', 'To'));


console.log(gameName.split('-'));




