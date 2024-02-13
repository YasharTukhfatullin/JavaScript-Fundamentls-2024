/**
 * this = reference to the object where THIS is used
 *        (the object depends on the immediate context)
 *        person.name = this.name
 */

const person1 = {
  name: "Yashar",
  favoriteFood: "Sushi",
  sayHello: function() {console.log(`Hi, my name is ${this.name}`)},
  eat: function() {console.log(`${this.name} is eating ${this.favoriteFood}`)}
};
person1.sayHello();
person1.eat();
console.log("=====================");

const person2 = {
  name: "Kyle",
  favoriteFood: "Steak",
  sayHello: function() {console.log(`Hi, my name is ${this.name}`)},
  eat: function() {console.log(`${this.name} is eating ${this.favoriteFood}`)}
};
person2.sayHello();
person2.eat();
console.log("=====================");

console.log(this);