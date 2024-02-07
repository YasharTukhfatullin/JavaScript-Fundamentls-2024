/**
 * Random Number Generator
 */

let randomNumber = Math.random();
console.log(randomNumber);
console.log("========")

let newRadomNumber = Math.floor(Math.random() * 100);
console.log(newRadomNumber);
console.log("========")

const min = 50;
const max = 100;

let rangeRadomNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(rangeRadomNumber);
console.log("========")

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");


const newMin = 1;
const newMax = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = () => {
  randomNum1 = Math.floor(Math.random() * newMax) + newMin;
  randomNum2 = Math.floor(Math.random() * newMax) + newMin;
  randomNum3 = Math.floor(Math.random() * newMax) + newMin;

  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};
