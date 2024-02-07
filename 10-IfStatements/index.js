/**
 * If Statements = if a condition is true, execute some code if not, do something else.
 */

let age = 12;
if (age >= 18) {
  console.log("You are old enough.");
} else {
  console.log("You are not old enough.");
}
console.log("============");

let time = 14;
if (time < 12) {
  console.log("Good morning");
} else {
  console.log("Good afternoon");
}
console.log("============");

let isStudent = false;
if (isStudent) {
  console.log("You are a student");
} else {
  console.log("You are NOT a student");
}
console.log("============");

let newAge = 25;
let hasLicense = false;
if (newAge >= 16) {
  console.log("You are old enough to drive");
  if (hasLicense) {
    console.log("You have your license");
  } else {
    console.log("You do not have your license yet!");
  }
} else {
  console.log("You must be 16+ to have license");
}
console.log("============");

let newAgePerson = 10;

if (newAgePerson >= 100) {
  console.log("You are too old to enter this website.")
} else if (newAgePerson === 0) { 
  console.log("You can't enter. You just born")
} else if (newAgePerson >= 18) {
  console.log("You are old enough to enter this site.")
} else if (newAgePerson < 0) {
  console.log("Your age can't be below 0.")
} else {
  console.log("You must be 18+ to enter this site.")
}
console.log("============");


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let personsAge;

mySubmit.onclick = function () {

  personsAge = myText.value;
  personsAge = Number(personsAge);

  if (personsAge >= 100) {
    resultElement.textContent = `You are too old to enter this website`;
  } else if (personsAge === 0) { 
    resultElement.textContent =`You can't enter. You were just born`;
  } else if (personsAge >= 18) {
    resultElement.textContent =`You are old enough to enter this site.`;
  } else if (personsAge < 0) {
    resultElement.textContent =`Your age can't be below 0.`;
  } else {
    resultElement.textContent =`You must be 18+ to enter this site.`;
  }
};