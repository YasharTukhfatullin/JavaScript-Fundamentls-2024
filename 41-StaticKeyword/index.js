/**
 * static = keyword that defines properties or methods that belong
 *          to a class itself rather than the object created 
 *          from that class (class owns anything static, not the objects)
 */

class MathUtilities{
  static PI = 3.141592; // static belongs to the class itself 

  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
};

console.log(MathUtilities.PI);
console.log(MathUtilities.getDiameter(10)); // passing radius
console.log(MathUtilities.getCircumference(10)); // passing radius
console.log(MathUtilities.getArea(10));
console.log("=================")

class User{
  static userCount = 0; // belongs to the class

  constructor(username) {
    this.username = username;
    User.userCount++;
  }

  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }

}

const user1 = new User("Kyle");
const user2 = new User("Patrick");
const user3 = new User("Adam");


console.log(user1.username);
console.log(User.userCount);

console.log(user2.username);
console.log(user3.username);
console.log("=================")

user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log("=================")

User.getUserCount();
