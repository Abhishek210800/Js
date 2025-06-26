const account_Id = 11221133;
let account_Email = "aa@gmail.com";
var accountPassword = 12345678;
accountCity = "Jaipur";



// account_Id = 221; ....Not allowed...


account_Email = "abhishek@gmail.com";
accountPassword = 198765432;
accountCity = "Delhi";

// Prefer not to use var ..because of the issue in block scope and functiomal scope

console.log(account_Id);
console.table([account_Id,account_Email,accountPassword,accountCity])
