export enum MenuClass {
  MENU = 'MENU',
  ITEM = 'ITEM',
}

// TODO: switch to using interface
export type MenuType = {
  name: string;
  class: MenuClass;
  description: string;
  isVegetarian?: boolean;
  price?: number;
  menuItems?: MenuType[];
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

  public print(): MenuType {
    throw new Error();
  }
}

export default MenuComponent;
