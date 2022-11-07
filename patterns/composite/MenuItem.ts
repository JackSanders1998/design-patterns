import MenuComponent, { MenuItemType } from "./MenuComponent";

class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  public constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public isVegetarian(): boolean {
    return this.vegetarian;
  }

  public print(): MenuItemType {
    return {
      name: this.getName(),
      description: this.getDescription(),
      isVegetarian: this.isVegetarian(),
      price: this.getPrice(),
    };
  }
}

export default MenuItem;
