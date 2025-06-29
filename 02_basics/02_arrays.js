const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heroes = ["flash", "batman","superman"]

const indHeroes = ["Krishna", "Bajrangbali", "Mahadev"]

// marvel_heros.push(dc_heroes);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
//    above code output

/*[ 'thor', 'ironman', 'spiderman', [ 'flash', 'batman', 'superman' ] ]
 batman*/


//  const newHeroes = marvel_heros.concat(dc_heroes);
//  console.log(newHeroes);
 //output for line 14 and 15 ...[ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]
 

//  const newHeroes = [...marvel_heros, ...dc_heroes]
//  console.log(newHeroes);
 //This also works same as the concat  
 // But here we can add multiple arrays[ 'thor', 'ironman', 'spiderman', 'flash', 'batman', 'superman' ]
 
//  const newHeroes = [...marvel_heros, ...dc_heroes, ...indHeroes]
//  console.log(newHeroes);
 /*[
  'thor',
  'ironman',
  'spiderman',
  'flash',
  'batman',
  'superman',
  'Krishna',
  'Bajrangbali',
  'Mahadev'
] */


// const anotherArray = [1,2,3,[4,5,6],[32,4,5,[33,23,12]]]
// const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array);

//  above output [
//    1,  2, 3, 4,  5,
//    6, 32, 4, 5, 33,
//   23, 12
// ]


console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
/*false
[   
  'A', 'b', 'h',
  'i', 's', 'h',
  'e', 'k'
]*/

