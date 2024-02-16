/**
 * Add & Change HTML Elements
 */

/* Example 1 <h1> */

// STEP 1 Create the Element 
const newH1 = document.createElement("h1");

// STEP 2 Add Attributes/Properties
newH1.textContent = "I like steak";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";

// STEP 3 Append Element to DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

/* if divs did't have an Id */ 
// const boxes = document.querySelector(".box");
// document.body.insertBefore(newH1, boxes);

// Remove HTML Elements 