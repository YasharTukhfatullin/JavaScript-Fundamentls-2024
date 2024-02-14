/**
 * setter = special method that makes a property writeable 
 * 
 * getter = special method that makes a property readable
 *  
 * validate and modify a value when reading/writing a property
 */

class Rectangle {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; // _ mean that is it private property (don't touch it )
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight; // _ mean that is it private property (don't touch it )
    } else {
      console.error("Height must be a positive number");
    }
  }

  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area() {
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

const rectangle = new Rectangle(3, 5);

rectangle.width = 10;
rectangle.height = 16;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log("===============================================================")
console.log("Second Example")

class Person{

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error("First name must be a non-empty string");
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error("Last name must be a non-empty string");
    }
  }

  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._newAge = newAge;
    } else {
      console.error("Age must be a non-negative number");
    }
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._newAge;
  }
};

const person = new Person("Yashar", "Adams", 21);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);