/**
 * classList = Element property in JavaScript used to interact with an element's list
 *             of classes (CSS classes). Allows you make reusable classes for many elements
 *             across your webpages.
 * add()
 * remove()
 * toggle(Remove if present, Add if not)
 * replace(oldClass, newClass)
 * contains()
 * */

const myButton = document.getElementById("myButton");
myButton.classList.add("enabled");
//myButton.classList.remove("enables"); //remove the class 

myButton.classList.add("hover");

myButton.forEach("mouseover", event => {
  event.target.classList.add("hover");
});

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
  event.target.classList.replace("enabled", "disabled");
});