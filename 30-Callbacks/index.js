/**
 * Callbacks = a function that is passed as an argument to another function.
 * 
 * Used to handle asynchronous operation:
 * 1. Reading a file.
 * 2. Network requests.
 * 3. Interacting with databases.
 * 
 * "Hey, when you are done, call this next".
 */


function hello(callback) {
  console.log("Hello");
  callback();
};

function wait() {
  console.log("wait");
}

function leave() {
  console.log("Leave");
}

function goodBye() {
  console.log("goodbye");
}

hello(leave);
console.log("=========================");


function sum(callback, x, y) {
  let result = x + y;
  callback(result);
};

function displayConsole(result) {
  console.log(result);
};

sum(displayPage, 1, 2);

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
};