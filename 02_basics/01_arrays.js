//arrays


let myArr = [1,2,3,4,5,6,7,8,9]
console.log(myArr[3]);

let superHeros = ["shaktiman", "superman", "Batman"]
console.log(superHeros[2]);

console.log(myArr.length);
console.log(superHeros.length);

console.log(`The length of the array is ${myArr.length} and the length of the array superHeros is ${superHeros.length}. But my favourite superhero is ${superHeros[1]}`);

//this PUSH() method is used to add the element in the array list , it generally add at the end
superHeros.push("Padman")
console.log(superHeros);

//POP() simplly remove the last element from the array list...
myArr.pop();
console.log(myArr);

//unShift() is used to add element but in the first index of the array
myArr.unshift(10);
console.log(myArr);

// shift() removes the 1st element from the array list
myArr.shift();
console.log(myArr);

//it return whether the element is present in the array or not
console.log(myArr.includes(8));

//search the index of the element
console.log(myArr.indexOf(7));



//   Slice and Splice
console.log(myArr);

//slice(start, end) returns a shallow copy from index 1 to before index 3.  It does not modify the original array.
const newArr = myArr.slice(1, 3)
console.log(newArr);


//splice(start, deleteCount) removes items from the original array.  It modifies the original array and returns the removed element
const newArr1 = myArr.splice(1, 3)
console.log(newArr1);
console.log(myArr);






