export type MenuItemType = {
  name: string;
  description: string;
  isVegetarian: boolean;
  price: number;
};

export type MenuType = {
  name: string;
  description: string;
  menuItems: MenuItemType[];
};

abstract class MenuComponent {
  public add(menuComponent: MenuComponent) {
    throw new Error();
  }

  public remove(menuComponent: MenuComponent) {
    throw new Error();
  }

  public getChild(i: number): MenuComponent {
    throw new Error();
  }

  public getName(): string {
    throw new Error();
  }

  public getDescription(): string {
    throw new Error();
  }

  public getPrice(): number {
    throw new Error();
  }

  public isVegetarian(): boolean {
    throw new Error();
  }

  public print(): MenuType | MenuItemType {
    throw new Error();
  }
}

export default MenuComponent;
