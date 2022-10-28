export type SingletonResponseType = {
  mallard: string;
  rubberDuck: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ChocolateBoilerResponse = {
  empty: boolean;
  boiled: boolean;
};

type Data = {
  chocolates: ChocolateBoilerResponse[];
};

export default class ChocolateBoiler {
  private empty: boolean = true;
  private boiled: boolean = false;

  private static _instance: ChocolateBoiler = new ChocolateBoiler();

  constructor() {
    if (ChocolateBoiler._instance) {
      throw new Error(
        "Error: Instantiation failed: Use ChocolateBoilerDemo.getInstance() instead of new."
      );
    }
    ChocolateBoiler._instance = this;
  }

  public static getInstance(): ChocolateBoiler {
    return ChocolateBoiler._instance;
  }

  public fill(): void {
    if (this.isEmpty()) {
      // fill the boiler with a milk/chocolate mixture
      this.empty = false;
      this.boiled = false;
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      // drain the boiled milk and chocolate
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      // bring the contents to a boil
      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}
