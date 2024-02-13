/**
 * inheritance = allows a new class to inherit properties and methods
 *               from an existing class (parent to child)
 *               helps with code reusability.
 */

class Animal{
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }

  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
};

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}

class Fish extends Animal {
  name = "Fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}

class Hawk extends Animal {
  name = "Hawk"

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
console.log("==============");

fish.eat();
fish.sleep();
console.log("==============");

hawk.eat();
hawk.sleep();
console.log("==============");

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
console.log("==============");

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();
console.log("==============");

console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();
console.log("==============");
