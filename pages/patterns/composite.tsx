import MenuTestDrive from "../../patterns/composite/MenuTestDrive";

const Composite = () => {
  const test = MenuTestDrive;
  const content = test.main();
  return (
    <div className="text-slate-400">{JSON.stringify(content, null, 2)}</div>
  );
};

export default Composite;
