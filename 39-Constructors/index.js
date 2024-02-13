/**
 * constructor = special method for defining the properties and methods of object.
 */

// Car constructor 
function Car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function() {console.log(`You drive the ${this.model}`)}
};

// Instance of an object
const car1 = new Car("Ford", "Mustang", 2024, "Red");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log("============================")

const car2 = new Car("Ferrari", "F12", 2025, "Yellow");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log("============================")

const car3 = new Car("Mazda", "CX-5", 2022, "Grey");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log("============================")

car1.drive();
car2.drive();
car3.drive();
