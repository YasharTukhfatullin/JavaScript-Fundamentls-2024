/**
 * Array = a variable like structure that can hold more than 1 value.
 */

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[0] = "coconut";
console.log(fruits);
console.log(fruits[0]);

fruits.push("kwei"); // add element at the end
console.log(fruits);

fruits.pop(); // removes element at the end
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);
console.log("====================")

let numberOfFruits = fruits.length;
console.log(numberOfFruits);

let index = fruits.indexOf("apple");
console.log(index);
console.log("====================")

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};
console.log("====================")

for (let fruit of fruits) {
  console.log(fruit);
};

console.log(fruits.sort());
console.log(fruits.sort().reverse());