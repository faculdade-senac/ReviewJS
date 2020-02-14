export class Product {
  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

export const code = 1254;
