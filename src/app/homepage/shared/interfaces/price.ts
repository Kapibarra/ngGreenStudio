export class Price {
  title: string;
  price: string;
  description: string;
  constructor(price: Price) {
    this.title = price.title;
    this.price = price.price;
    this.description = price.description;
  }
}
