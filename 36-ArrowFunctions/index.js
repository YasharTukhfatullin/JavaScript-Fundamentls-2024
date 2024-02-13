/**
 * arrow functions = a concise way to write function expression
 *                   good for simple functions that you are use only once
 *                   (parameters) => some code.
 */

const hello = (name, age) => {
  console.log(`Hello ${name}`) 
  console.log(`You are ${age} old`)};

hello("Bro", 25);
console.log("==========");

setTimeout(() => {
  console.log("Hello");
}, 3000);
console.log("==========");

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);
console.log("==========");

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);
console.log("==========");

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);
console.log("==========");

const oddNumbers = numbers.filter((element) => element % 2 !== 0);
console.log(oddNumbers);

const totalReduceNumber = numbers.reduce((accumulator, element) => accumulator + element);
console.log(totalReduceNumber);