/**
 * sort() = method used to sort elements of an array in place.
 *          Sorts elements as strings in lexicographic order, not alphabetical
 *          lexicographic = (alphabet + number + symbols) as strings.
 */

const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// sorting number low to high
numbers.sort((a, b) => a - b);
console.log(numbers);

// sorting number high to low
numbers.sort((a, b) => b - a);
console.log(numbers);
console.log("=================")

const people = [
  {name: "Kyle", age:30, gpa: 3.9},
  {name: "Adam", age:37, gpa: 1.9},
  {name: "Dylan", age:61, gpa: 2.9},
  {name: "Lucas", age:51, gpa: 3.5}
];

// sorting age low to high
people.sort((a, b) => a.age - b.age);
console.log(people);

// sorting age high to low
//people.sort((a, b) => b.age - a.age);
//console.log(people);
//console.log("=================")

// sorting GPA low to high
people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

// sorting GPA high to low
//people.sort((a, b) => b.gpa - a.gpa);
//console.log(people);
//console.log("=================")

// sorting name low to high
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);
