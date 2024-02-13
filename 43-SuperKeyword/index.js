/**
 * super = keyword is used in classes to call the constructor or 
 *         access the properties and methods of a parents (superclass)
 *          
 *         this = this object
 *         super = the parent
 */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed}mph.`)
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age); //Invoking constructor of the parent class
    this.runSpeed = runSpeed;
  }

  run() {
    console.log(`This ${this.name} can run.`);
    super.move(this.runSpeed);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }

  swim() {
    console.log(`This ${this.name} can swim.`);
    super.move(this.swimSpeed);

  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }

  fly() {
    console.log(`This ${this.name} can fly.`);
    super.move(this.flySpeed);

  }
}

//Creating objects
const rabbit = new Rabbit("Rabbit", 1, 25);
const fish = new Fish("Fish", 2, 12);
const hawk = new Hawk("Hawk", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log("==================")

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log("==================")

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
console.log("==================")

// rabbit object lets invoke run() method
rabbit.run();
console.log("==================")

// fish object lets invoke swim() method
fish.swim();
console.log("==================")

// fly object lets invoke fly() method
hawk.fly();
console.log("==================")

rabbit.run();
console.log("==================")

fish.swim();
console.log("==================")

hawk.fly();
console.log("==================")
