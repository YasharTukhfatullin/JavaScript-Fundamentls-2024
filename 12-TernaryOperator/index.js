/**
 * Ternary operator = a shortcut to if{} and else{} statements,
 *                    helps to assign a variable based on a condition
 *                    condition ? codeIfTrue : codeIfFalse;
 */

let age = 21;
// Is age greater than or equal to 18. If condition is true or if condition is false
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);
console.log("=============")

let time = 9;
let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);
console.log("=============")

let isStudent = true;
let newMessage = isStudent ? "You are a student" : "You are not a student";
console.log(newMessage);
console.log("=============")

let purchaseAmount = 120;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)
console.log("=============")
