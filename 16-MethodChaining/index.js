/**
 * Method Chaining = Calling one method after another in one continuous line of code 
 */

// No Method Chaining 

let username = window.prompt("Enter your username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLocaleLowerCase();
username = letter + extraChars;

console.log(username);


// Method Chaining.

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
console.log(username);