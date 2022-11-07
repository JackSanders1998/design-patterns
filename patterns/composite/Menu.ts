import MenuComponent, { MenuItemType, MenuType } from "./MenuComponent";

class Menu extends MenuComponent {
  menuComponents: MenuComponent[];
  name: string;
  description: string;

  public constructor(name: string, description: string) {
    super();
    this.menuComponents = [];
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent) {
    /* add */
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent) {
    /* remove */
    this.menuComponents.filter((component) => component != menuComponent);
  }

  public getChild(i: number): MenuComponent {
    /* get */
    return this.menuComponents[i];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): MenuType {
    let logger: MenuType = {
      name: this.getName(),
      description: this.getDescription(),
      menuItems: [],
    };
    /* iterator */
    for (const menuComponent of this.menuComponents) {
      logger.menuItems.push(<MenuItemType>menuComponent.print());
    }
    return logger;
  }
}

export default Menu;
