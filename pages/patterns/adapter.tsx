import { MallardDuck } from "../../patterns/adapter/MallardDuck";
import { WildTurkey } from "../../patterns/adapter/WildTurkey";
import { Duck } from "../../patterns/adapter/Duck";
import { TurkeyAdapter } from "../../patterns/adapter/TurkeyAdapter";
import { Turkey } from "../../patterns/adapter/Turkey";
import { DuckAdapter } from "../../patterns/adapter/DuckAdapter";

class DuckTestDrive {
  public static main() {
    const duck: MallardDuck = new MallardDuck();
    const turkey: WildTurkey = new WildTurkey();
    const turkeyAdapter: Duck = new TurkeyAdapter(turkey);
    console.info("The Turkey says...");
    turkey.gobble();
    turkey.fly();
    console.info("\nThe Duck says...");
    DuckTestDrive.testDuck(duck);
    console.info("\nThe TurkeyAdapter says...");
    DuckTestDrive.testDuck(turkeyAdapter);
  }

  static testDuck(duck: Duck) {
    duck.quack();
    duck.fly();
  }
}

class TurkeyTestDrive {
  public static main() {
    const duck: MallardDuck = new MallardDuck();
    const duckAdapter: Turkey = new DuckAdapter(duck);
    for (let i: number = 0; i < 10; i++) {
      console.info("The DuckAdapter says...");
      duckAdapter.gobble();
      duckAdapter.fly();
    }
  }
}

const Adapter = () => {
  DuckTestDrive.main();
  TurkeyTestDrive.main();

  return <div className="text-white text-lg">adapter pattern</div>;
};

export default Adapter;
