/**
 * Number Guessing Game 
 */

const minNumber = 1;
const maxNumber = 100;
const answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

let attempts = 0;
let guess;
let running = true;

while(running) {
  guess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < minNumber || guess > maxNumber) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low. Try again");
    } else if (guess > answer) {
      window.alert("Too high. Try again");
    } else {
      window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
      running = false;
    }
  }
}