import MenuComponent, { MenuType } from "./MenuComponent";

class Waitress {
  allMenus: MenuComponent;

  public constructor(allMenus: MenuComponent) {
    this.allMenus = allMenus;
  }

  public printMenu(): MenuType {
    return this.allMenus.print();
  }
}

export default Waitress;
