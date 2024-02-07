/**
 * How to accept user input.
 * 1. Easy Way = window prompt 
 * 2. Professional Way = HTML text box.
 */

// Easy Way = window prompt 
/*let userName;
userName = window.prompt("What is your user name?")
console.log(userName);
*/
let userName;

document.getElementById("mySubmit").onclick = function() {
  userName = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${userName}`;
};