/**
 * DOM Navigation = The process of navigation through the structure 
 *                  of an HTML document using JavaScript.
 * 
 * .firstElementChild
 * .lastElementChild
 * .nextElementSibling
 * .previousElementSibling
 * .parentElement
 * .children
 * 
 */

//* --------- .firstElementChild ---------
const firstElement = document.getElementById("fruits");
const firstChild = firstElement.firstElementChild;
firstChild.style.backgroundColor = "yellow";
console.log("========================")

// select all first unordered list 
const ulFirstElements = document.querySelectorAll("ul");
ulFirstElements.forEach(ulFirstElement => {
  const firstChild = ulFirstElement.firstElementChild;
  firstChild.style.backgroundColor = "orange";
});

//* --------- .lastElementChild ---------
const lastElement = document.getElementById("fruits");
const lastChild = lastElement.lastElementChild;
lastChild.style.backgroundColor = "red";
console.log("========================")

// select all first unordered list 
const ulLastElements = document.querySelectorAll("ul");
ulLastElements.forEach(ulLastElement => {
  const lastChild = ulLastElement.lastElementChild;
  lastChild.style.backgroundColor = "pink";
});

//* --------- .nextElementSibling ---------
const nextElement = document.getElementById("apple");
const nextSibling = nextElement.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

//* --------- .previousElementSibling ---------
const previousElement = document.getElementById("orange");
const previousSibling = previousElement.previousElementSibling;
previousSibling.style.backgroundColor = "green";

//* --------- .parentElement ---------
const newParentElement = document.getElementById("apple");
const parent = newParentElement.parentElement;
parent.style.backgroundColor = "blue";

//* --------- .children ---------
const newChildrenElement = document.getElementById("fruits");
const children = newChildrenElement.children;

Array.from(children).forEach(child => {
  child.style.backgroundColor = "lightblue";
});


