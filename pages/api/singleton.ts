// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type ChocolateBoilerResponse = {
  empty: boolean;
  boiled: boolean;
};

type Data = {
  scores: number[];
  chocolates: ChocolateBoilerResponse[];
};

class ChocolateBoiler {
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

class SingletonClass {
  private static _instance: SingletonClass = new SingletonClass();

  private _score: number = 0;

  constructor() {
    if (SingletonClass._instance) {
      throw new Error(
        "Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new."
      );
    }
    SingletonClass._instance = this;
  }

  public static getInstance(): SingletonClass {
    return SingletonClass._instance;
  }

  public setScore(value: number): void {
    this._score = value;
  }

  public getScore(): number {
    return this._score;
  }

  public addPoints(value: number): void {
    this._score += value;
  }

  public removePoints(value: number): void {
    this._score -= value;
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const singletonResponse: number[] = [];
  var scoreManager = SingletonClass.getInstance();
  singletonResponse.push(scoreManager.getScore());
  scoreManager.setScore(10);
  singletonResponse.push(scoreManager.getScore());
  scoreManager.addPoints(1);
  singletonResponse.push(scoreManager.getScore());
  scoreManager.removePoints(2);
  singletonResponse.push(scoreManager.getScore());
  // --------
  const chocolateResponse: ChocolateBoilerResponse[] = [];
  var chocolateManager = ChocolateBoiler.getInstance();
  chocolateResponse.push({
    empty: chocolateManager.isEmpty(),
    boiled: chocolateManager.isBoiled(),
  });
  chocolateManager.fill();
  chocolateResponse.push({
    empty: chocolateManager.isEmpty(),
    boiled: chocolateManager.isBoiled(),
  });
  chocolateManager.boil();
  chocolateResponse.push({
    empty: chocolateManager.isEmpty(),
    boiled: chocolateManager.isBoiled(),
  });
  chocolateManager.drain();
  chocolateResponse.push({
    empty: chocolateManager.isEmpty(),
    boiled: chocolateManager.isBoiled(),
  });
  res
    .status(200)
    .json({ scores: singletonResponse, chocolates: chocolateResponse });
}
