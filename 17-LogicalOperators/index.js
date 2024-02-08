/**
 * Logical Operators = Used to combine or manipulate boolean values (true or false)
 *                    AND = &&, OR = ||, NOT = !
 */

// AND = &&
const temperature = 25;
if (temperature > 0 && temperature <= 30) {
  console.log("The weather is great");
} else {
  console.log("The weather is bad");
}
console.log("=============");

// OR = ||
const newTemperature = 205;
if (temperature <= 0 || temperature > 30) {
  console.log("The weather is bad");
} else {
  console.log("The weather is good");
}
console.log("=============");

// NOT = !
const isSunny = true;
if (!isSunny) {
  console.log("It is sunny")
} else {
  console.log("It is cloudy")
}
console.log("=============");

