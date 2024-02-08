/**
 * String methods = allow you to manipulate and work with text (strings). 
 */

let userName = "Yas har";

console.log(userName.charAt(0));

console.log(userName.indexOf("a"))

console.log(userName.length);

console.log(userName.trim()); // removes white spaces before and after the name.

console.log(userName.toUpperCase());

console.log(userName.repeat(2));
console.log("========================")

let result = userName.startsWith(" ");
console.log(result);

if (result) {
  console.log("Your username can't begin with ' '")
} else {
  console.log(userName);
}
console.log("========================")

let result2 = userName.includes(" ");
console.log(result2);

if (result2) {
  console.log("Your username can't include  ' '")
} else {
  console.log(userName);
}
console.log("========================")

let phoneNumber = "515-312-2132";

phoneNumber = phoneNumber.replaceAll("-", "")
console.log(phoneNumber);
console.log("========================")

phoneNumber = phoneNumber.padStart(15, "0");
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);
