/**
 * Array of Objects
 */

const fruits = [
  {name: "apple", color: "red", calories: 95}, 
  {name: "orange", color: "orange", calories: 45}, 
  {name: "banana", color: "yellow", calories: 105}, 
  {name: "coconut", color: "white", calories: 195}, 
  {name: "pineapple", color: "yellow", calories: 37}
];

// Access a property within an array of objects
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories );
console.log("==========================")

// Add property into an array
fruits.push({name: "strawberry", color: "red", calories: 70});
console.log(fruits[5])
console.log("==========================")

// How to remove last element on array
// fruits.pop();
// console.log(fruit);

// How to remove elements in certain indices
// fruits.spice(1, 2);
// console.log(fruit);

// ----------- forEach() method -----------

//fruits .forEach(function(fruit) {
//  console.log(fruit);
//})

// Displaying each objects
fruits.forEach(fruit => console.log(fruit));

// Displaying fruits property names
fruits.forEach(fruit => console.log(fruit.name));
fruits.forEach(fruit => console.log(fruit.color));
fruits.forEach(fruit => console.log(fruit.calories));
console.log("==========================")

// ----------- map() method -----------
// Map method will return a new array

// Return every name property of each fruit 
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// Return every color property of each fruit 
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);
console.log("==========================")

// ----------- filter() method -----------
// filter method will return a new array after using each element and checking a condition

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);
console.log("==========================")

const redFruits = fruits.filter(fruit => fruit.color === "red");
console.log(redFruits);
console.log("==========================")

const lowCalorieFruits  = fruits.filter(fruit => fruit.calories < 50);
console.log(lowCalorieFruits);
console.log("==========================")

const highCalorieFruits  = fruits.filter(fruit => fruit.calories > 100);
console.log(highCalorieFruits);
console.log("==========================")

// ----------- reduce() method -----------
// reduce method will return a single value in this case an object

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
console.log("==========================")

const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);