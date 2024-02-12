/**
 * .filter() = creates a new array by filtering out elements.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

function isEven(element) {
  return element % 2 === 0;
};

function isOdd(element) {
  return element % 2 !== 0;
};
console.log("=============================")

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);

const children = ages.filter(isChild);
console.log(children);

const senior = ages.filter(isSenior);
console.log(senior);

function isAdult(element) {
  return element >= 18;
};

function isChild(element) {
  return element < 18;
};

function isSenior(element) {
  return element > 50;
};

console.log("=============================")

const words = ["apple", "hello", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);

const longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
};

function getLongWords(element) {
  return element.length > 6;
};