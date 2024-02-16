/**
 * Add & Change HTML Elements
 */

/* Example 3 <li> */

// STEP 1 Create the Element 
const newListItem = document.createElement("li");

// STEP 2 Add Attributes/Properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green";

// STEP 3 Append Element to DOM
// document.body.appendChild(newListItem);
// document.getElementById("fruits").prepend

/* Use querySelectorAll when you don't have id attribute but have class*/
const boxes = document.querySelectorAll("#fruits li");
// Remove HTML Elements 