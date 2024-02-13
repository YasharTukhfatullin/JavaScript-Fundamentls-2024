/**
 * function declaration = define a reusable block of code that performs a specific task.
 * 
 * function expression = a way to define function as values or variables.
 * 
 * function expression can be used:
 * 1.Callbacks in asynchronous operation.
 * 2.Higher-Order Function
 * 3.Closures.
 * 4.Event Listeners. 
 */


setTimeout(function() {
  console.log("hello")
}, 3000);
console.log("============");


const numbers = [1, 2, 3, 4, 5, 6, 7];

// function expression
const squares = numbers.map(function(element) {
  return Math.pow(element, 2);
});

console.log(squares);
console.log("============");

const cubes = numbers.map(function(element) {
  return Math.pow(element, 3);
});
console.log(cubes);
console.log("============");

const evenNumbers = numbers.filter(function(element) {
  return element % 2 === 0;
});
console.log(evenNumbers);
console.log("============");

const oddNumbers = numbers.filter(function(element) {
  return element % 2 !== 0;
});
console.log(oddNumbers);
console.log("============");

const reduceNumbers = numbers.reduce(function(accumulator, element) {
  return accumulator + element;
});
console.log(reduceNumbers);