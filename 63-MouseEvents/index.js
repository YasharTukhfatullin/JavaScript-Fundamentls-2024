/**
 * eventListener = Listen for specific events to create interactive web pages
 *                 event: click, mouseover, mouseout
 *                 .addEventListener(event, callback);
 *                 .addEventListener(event, anonymous function);
 *                 .addEventListener(event, arrow function);
 * 
 */

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", function(event) {
  event.target.style.backgroundColor = "red";
  event.target.textContent = "Ouch! 👎";
});

myBox.addEventListener("mouseover", function(event) {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it! 😣";
});

myBox.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "orange";
  event.target.textContent = "Click me! 😉";
});

console.log("============");


const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
  myBox.style.backgroundColor = "red";
  myBox.textContent = "Ouch! 👎";
});

myButton.addEventListener("mouseover", function(event) {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it! 😣";
});

myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "orange";
  myBox.textContent = "Click me! 😉";
});