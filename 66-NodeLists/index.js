/**
 * NodeList = Static collection of HTML elements by (id, class, elements)
 *            Can be created by using querySelectorAll()
 *            Similar to an array, but no (map, filter, reduce)
 *            NodeList won't update to automatically reflect changes.
 *
 * */

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(function(button) {
  button.style.backgroundColor = "Green";
  button.textContent += "😂";
});
console.log("===============")

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.style.backgroundColor = "Red";
  });
});
console.log("===============")

buttons.forEach(button => {
  button.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "hsl(205, 100%, 50%);"
  });
});
console.log("===============")

const newButton = document.createElement("button"); //step 1
newButton.textContent = "Button 5"; //step 2
newButton.classList = "myButtons"; // step 2
document.body.appendChild(newButton); //step 3

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

/*
// removing buttons
buttons.forEach(function(button) {
  button.addEventListener("click", function(event) {
    event.target.remove();
  })
});
*/