/**
 * element selectors = Methods used to target and manipulate HTML elements
 *                     They allow you to select one or multiple HTML elements
 *                     from the DOM (Document Object Model)
 * 
 *Great 1. document.getElementById()       // Element or Null
 *      2. document.getElementsClassName() // HTML Collection (live)
 *      3. document.getElementsByTagName() // HTML Collection (live)
 *      4. document.querySelector()        // First Element or Null 
 *Great 5. document.querySelectorAll()     // Nodelist 
 */

// * document.getElementById() // Element or Null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "grey";
myHeading.style.textAlign = "center";

console.log(myHeading);
console.log("==============================")

// * document.getElementsClassName() // HTML Collection
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

/*
for (let fruit of fruits) {
  fruit.style.backgroundColor = "pink";
}
*/
console.log("==============================")

// * document.getElementsByTagName() // HTML Collection

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
console.log(h4Elements);
console.log(liElements);

h4Elements[0].style.backgroundColor = "yellow";

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "pink";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "red";
}
console.log("==============================")

// * document.querySelector() // First Element or Null

const element = document.querySelector(".fruits");
console.log(element);

element.style.backgroundColor = "purple";
console.log("==============================")

// * document.querySelectorAll() // Nodelist (static)

const newFruits = document.querySelectorAll(".fruits");
newFruits[0].style.backgroundColor = "green";
console.log(newFruits);

