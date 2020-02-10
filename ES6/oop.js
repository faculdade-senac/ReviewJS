class Product {
  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  /**
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
*/
}
const p = new Product('coffee', 99, 4.00);
console.log(p.name);
