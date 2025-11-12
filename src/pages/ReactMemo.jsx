import { memo, useState } from "react";

const ChildComponent1 = memo(({ value, onIncrease }) => {
  console.log("re1");

  return (
    <div>
      <p>Child 1 Count: {value}</p>
      <button className="rounded-2xl border-2 p-1" onClick={onIncrease}>
        Increase 1
      </button>
    </div>
  );
});

const ChildComponent2 = memo(({ value, onIncrease }) => {
  console.log("re2");

  return (
    <div>
      <p>Child 1 Count: {value}</p>
      <button className="rounded-2xl border-2 p-1" onClick={onIncrease}>
        {" "}
        Increase 2
      </button>
    </div>
  );
});

const ReactMemo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div className="x-col mt-3 flex flex-col items-center justify-center gap-3">
      <ChildComponent1 value={count1} onIncrease={handleClick1} />
      <ChildComponent2 value={count2} onIncrease={handleClick2} />
    </div>
  );
};

export default ReactMemo;
