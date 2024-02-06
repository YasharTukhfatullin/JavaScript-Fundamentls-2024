/**
 * Type conversion = change the datatype of a value to another. (string, numbers, booleans).
 */

let age = window.prompt("How old are you?");
age = Number(age);
age += 1

console.log(age);
console.log("==========");

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x);
console.log(y);
console.log(z);