/**
 * Variable = A container that stores a value behaves as if it were the value it contains.
 * 1. declaration let x; or const y;
 * 2. assignment  let x = 100; or const y = 200;
 */

// Numbers
let age = 25;
let price = 21.21;
let gpa = 3.2;

console.log(age);
console.log(price);
console.log(gpa);
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);
console.log(typeof(age));
console.log("====================")

// Strings
let firstName = "Yashar";
let favoriteFood = "Pizza";
let email = "dude@gmail.com";

console.log(`My name is ${firstName}`);
console.log(`My favorite food is ${favoriteFood}`);
console.log(`My email is ${email}`);
console.log(typeof(firstName));
console.log("====================")

// Booleans
let online = true;
let forSale = false;
let isStudent = true;

console.log(online);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);
console.log(typeof(online));
console.log("====================")

let fullName = "Yashar Tukhfatullin";
let myAge = 25;
let student = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${myAge} years old`;
document.getElementById("p3").textContent = `Enrolled: ${student}`;





