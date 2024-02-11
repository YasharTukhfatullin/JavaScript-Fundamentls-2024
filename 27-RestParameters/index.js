/**
 * Rest parameters = (...rest) allow a function work with a variable 
 *                  number of arguments by bundling them into an array.
 * 
 *                  spread = expands an array into separate elements
 *
 *                  rest = bundles separate elements into an array.
 */

const food1 = "Pizza";
const food2 = "Hamburger";
const food3 = "HotDog";
const food4 = "Sushi";

function openFridge(...foods) {
  console.log(...foods);
};

openFridge(food1, food2, food3, food4, food4);
console.log("===========================")

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
};

const total = sum(1);
console.log(total);
console.log("===========================")


function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
};

const newTotal = getAverage(75, 100, 85);
console.log(newTotal);
