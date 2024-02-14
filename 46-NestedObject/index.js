/**
 * nested object = Objects inside of other object.
 *                 Allows you to represent more complex data structures
 *                 Child Object is enclosed by a parent object.
 * 
 *                Person{Address{}, ContactInfo{}}
 *                ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
 */

const person = {
  fullName: "Yashar Adams",
  age: 25,
  isStudent: false,
  hobbies: ["Workout", "Reading", "Video Games"],
  address: {
    street: "1638 King Street.",
    city: "Kalamazoo",
    country: "USA"
  }
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
console.log("======================");

for (const property in person.address) {
  console.log(person.address[property] );
}

console.log("======================");

class Person{
  constructor(name, age, ...address) {
    this.name = name,
    this.age = age,
    this.address = new Address(...address);
  }
}

class Address{
  constructor(street, city, country) {
    this.street = street,
    this.city = city,
    this.country = country
  };
};

const person1 = new Person("Yashar", 23, "1234 King Street", "Chicago", "USA");

const person2 = new Person("Kyle", 33, "1234 King Street", "Chicago", "USA");

const person3 = new Person("Josh", 43, "1212 King Street", "Chicago", "USA");

console.log(person1);
console.log(person1.name);
console.log(person1.address);
console.log(person1.address.street);
console.log("======================");

console.log(person2);
console.log(person2.name);
console.log(person2.address);
console.log(person2.address.street);
console.log("======================");

console.log(person3);
console.log(person3.name);
console.log(person3.address);
console.log(person3.address.street);person3

