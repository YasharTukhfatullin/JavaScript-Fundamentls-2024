/**
 * Spread operator = ... allows an iterable such as an array or string
 *                  to be expended into separate elements (unpacked the elements). 
 */

let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

let maximum = Math.max(...numbers); // unpacked the elements
console.log(maximum);


let minimum = Math.min(...numbers);
console.log(minimum);

let username = "Yashar Tukhfatullin";
let letters = [...username];
console.log(letters);

let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];
console.log(newFruits);

let vegetables = ["carrot", "potato", "onions"];
let foods = [...fruits, ...vegetables];
console.log(foods);

