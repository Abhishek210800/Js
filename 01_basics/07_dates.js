let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toDateString());


//***These are the outputs of the above code */
// toString(): Sat Jun 28 2025 11:23:45 GMT+0530 (India Standard Time)
// toISOString(): 2025-06-28T05:53:45.000Z
// toJSON(): 2025-06-28T05:53:45.000Z
// toLocaleDateString(): 28/06/2025
// toUTCString(): Sat, 28 Jun 2025 05:53:45 GMT
// toLocaleString(): 28/06/2025, 11:23:45 am
// toTimeString(): 11:23:45 GMT+0530 (India Standard Time)
// toDateString(): Sat Jun 28 2025


const weekdayName = myDate.toLocaleString('default', {
  weekday: "long"
});

console.log(weekdayName);
console.log(typeof weekdayName);
// Saturday.....This is the output of the above weekdayName variable....

