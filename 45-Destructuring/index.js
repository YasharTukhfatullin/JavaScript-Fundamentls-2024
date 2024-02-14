/**
 * destructuring = extract values from arrays and objects,
 *                 then assign them to variables in a convenient way
 *                 [] = to perform array destructuring
 *                 {} = to perform object destructuring       
 */

// Swapping the value of two variables.
let a  = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
console.log("================")


// Swapping 2 elements in an array.
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
console.log("================")

// Assign array elements to variables.
const newColors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = newColors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
console.log("================")

//Extract values from objects
const person1 = {
  firstName: "Yashar",
  lastName: "Adams",
  age: 25,
  job: "Sales"
};

const person2 = {
  firstName: "Kyle",
  lastName: "Cook",
  age: 35
};

const {firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log("================")

//Destructure in function parameters

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const newPerson1 = {
  firstName: "Yashar",
  lastName: "Adams",
  age: 25,
  job: "Sales"
};

const newPerson2 = {
  firstName: "Kyle",
  lastName: "Cook",
  age: 35
};

displayPerson(newPerson1)