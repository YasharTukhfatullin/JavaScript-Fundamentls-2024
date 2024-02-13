/**
 * .map() = accept a callback and applies that function 
 *          to each element of an array, then return a new array.
 * 
 *          It preserves original array but forEach does do that it changes original array.
 */

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);
console.log(numbers);

function square(element) {
  return Math.pow(element, 2)
};

function cube(element) {
  return Math.pow(element, 3)
};
console.log("=========================");

const students  = ["Alex", "Ryan", "Andrew", "Kyle", "Adam"];
const upperCaseStudents = students.map(upperCase); 
console.log(upperCaseStudents);
console.log("===============");

const lowerCaseStudents = students.map(lowerCase);
console.log(lowerCaseStudents);

function upperCase(element) {
  return element.toUpperCase();
};

function lowerCase(element) {
  return element.toLowerCase();
};
console.log("=========================");

const dates = ["2024-2-12", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
};