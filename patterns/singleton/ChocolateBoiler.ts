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

export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;

  private static uniqueInstance: ChocolateBoiler = new ChocolateBoiler();

  constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (ChocolateBoiler.uniqueInstance == null){
      console.info("Creating unique instance of Chocolate Boiler");
      ChocolateBoiler.uniqueInstance = new ChocolateBoiler();
    }
    console.info("Returning instance of Chocolate Boiler");
    return ChocolateBoiler.uniqueInstance;
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
