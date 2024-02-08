/**
 * Function = A section of reusable code.
 *            Declaring code once, use it whenever you want.
 *            Call the function to execute that code. 
 */

// Inside of () parameters
function happyBirthday(username, age) {
  console.log("Happy Birthday to you.");
  console.log(`Happy birthday dear ${username}`);
  console.log(`You are ${age} years old`);
};
//Inside of () arguments  
happyBirthday("Yashar", 25);
console.log("==========")

happyBirthday("Patrick", 28);
console.log("==========")

// Return function
function addNumbers(x, y) {
  let results = x + y;
  return results;
};

let answer = addNumbers(2, 2);
console.log(answer);
console.log("==========")

function addNumbers(x, y) {
  return x + y;
};
console.log(addNumbers(2, 5));
console.log("==========")

function subtractNumbers(x, y) {
  return x - y;
};
console.log(subtractNumbers(2, 5));
console.log("==========")

function multiplyNumbers(x, y) {
  return x * y;
};
console.log(multiplyNumbers(2, 5));
console.log("==========")

function divideNumbers(x, y) {
  return x / y;
};
console.log(divideNumbers(2, 5));
console.log("==========")

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(12));
console.log("==========")

function isEven(number) {
  return number % 2 === 0 ? true : false;
};
console.log(isEven(12));
console.log("==========")

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
};
console.log(isValidEmail("Yash2121@gmail.com"));
console.log(isValidEmail("Yash2121gmail.com"));
console.log("==========")

function isValidEmail(email) {
  return email.includes("@") ? true : false;
};
console.log(isValidEmail("Yash2121@gmail.com"));
console.log(isValidEmail("Yash2121gmail.com"));
console.log("==========")
