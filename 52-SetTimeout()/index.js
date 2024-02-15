/**
 * setTimeout() = function in JavaScript that allows you to schedule 
 *                the execution of a function after an amount of time (milliseconds)
 *                Time are approximate (varies based on the worked of the JavaScript runtime env.)
 * 
 *                setTimeout(callback, delay);
 */

// normal function
function hello() {
  window.alert("Hello normal function!");
};
setTimeout(hello, 2000);

setTimeout(function() {window.alert("Hey anonymous function")}, 4000); //anonymous function

setTimeout(() => {window.alert("Hi arrow function")}, 6000); //arrow function
console.log("==============================");

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Start"), 4000);
  console.log("Started");
};

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Cleared");
};