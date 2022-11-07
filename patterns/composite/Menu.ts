import MenuComponent, {MenuClass, MenuType} from "./MenuComponent";

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
      class: MenuClass.MENU,
      description: this.getDescription(),
      menuItems: [],
    };
    /* iterator */
    for (const menuComponent of this.menuComponents) {
      // @ts-ignore
      logger.menuItems.push(<MenuType>menuComponent.print());
    }
    return logger;
    // return {
    //   name: 'COMPLETE',
    //   class: MenuClass.MENU,
    //   description: 'COMPLETE DESCRIPTION',
    //   menuItems: [logger],
    // };
  }
}

export default Menu;
