/**
 * String slicing = Creating a substring from a portion of another string. 
 *                  string.slice(start, end) 
 */

const fullName = "Yashar Tukhfatullin";

let firstName = fullName.slice(0, 6);
console.log(firstName);

let lastName = fullName.slice(7);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);

let lastChar = fullName.slice(-1);
console.log(lastChar);

let newFirstName = fullName.slice(0, fullName.indexOf(" "));
console.log(newFirstName);

let newLastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(newLastName);
console.log("====================")

const email = "yashar2024@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);

let extension = email.slice(email.indexOf("@"));
console.log(extension);