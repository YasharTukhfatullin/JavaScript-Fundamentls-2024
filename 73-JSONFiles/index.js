/**
 * JSON = (JavaScript Object Notation) data-interchange format
 *        Used for exchanging data between a server and a web application
 *        JSON files {key:value} or [value1, value2, value3] OR {[], [], []}
 *
 *        JSON.stringify() = converts a JS object to a JSON string
 *        JSON.parse() = converts a JSON string to a JS object
 * */

// JSON.stringify() = converts a JS object to a JSON string
const names = ["Yashar", "Patrick", "Kyle", "Ryan", "Jake"];
console.log(names);
const jsonNameString = JSON.stringify(names);
console.log(jsonNameString);
console.log("============================");

const person = {
  name: "Yashar",
  age: 25,
  isEmployed: true,
  hobbies: ["Reading", "Cooking", "Video"],
};
console.log(person);
const jsonPersonString = JSON.stringify(person);
console.log(jsonPersonString);
console.log("============================");

const people = [
  {
    name: "Yashar",
    age: 25,
    isEmployed: true,
  },
  {
    name: "Kyle",
    age: 29,
    isEmployed: false,
  },
  {
    name: "Jake",
    age: 19,
    isEmployed: true,
  },
  {
    name: "Andrew",
    age: 39,
    isEmployed: false,
  },
];
console.log(people);
const jsonPeopleString = JSON.stringify(people);
console.log(jsonPeopleString);
console.log("============================");

// JSON.parse() = converts a JSON string to a JS object
const jsonNames = `["Yashar", "Patrick", "Kyle", "Ryan", "Jake"]`;
console.log(jsonNames);
const parseNames = JSON.parse(jsonNames);
console.log(parseNames);
console.log("============================");

const jsonPerson = `{
  "name": "Yashar",
  "age": 25,
  "isEmployed": true,
  "hobbies": ["Reading", "Cooking", "Video"]
}`;
console.log(jsonPerson);
const parsePerson = JSON.parse(jsonPerson);
console.log(parsePerson);

const jsonPeople = `[
  {
    "name": "Yashar",
    "age": 25,
    "isEmployed": true
  },
  {
    "name": "Kyle",
    "age": 29,
    "isEmployed": false
  },
  {
    "name": "Jake",
    "age": 19,
    "isEmployed": true
  },
  {
    "name": "Andrew",
    "age": 39,
    "isEmployed": false
  }
]`;
console.log(jsonPeople);
const parsePeople = JSON.parse(jsonPeople);
console.log(parsePeople);
console.log("============================");