/**
 * Class = (ES6 feature) provides a more structured and cleaner way to
 *         work with objects compared to traditional constructor
 *         functions ex. static keyword, encapsulation, inheritance.
 */

// Class serve as a blueprint
class Product{
  constructor(name, price) {
    this.name = name,
    this.price = price
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax) {
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

//Creating new product1 object
const product1 = new Product("Shirt", 20.99);
const product2 = new Product("Pants", 27.99);
const product3 = new Product("Coat", 200.99);



product1.displayProduct();
const totalPriceShirt = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalPriceShirt.toFixed(2)}`);
console.log("===============")

product2.displayProduct();
const totalPricePants = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalPricePants.toFixed(2)}`);
console.log("===============")

product3.displayProduct();
const totalPriceCoat = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${totalPriceCoat.toFixed(2)}`);
console.log("===============")



