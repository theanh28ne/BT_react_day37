import { useRef } from "react";
import TextInput from "../componets/TextInput";
import NewTextInput from "../componets/NewTextInput";

const UseRef = () => {
  const count = useRef(0);

  const handleClick = () => {
    count.current++;
    if (count.current % 5 === 0) {
      alert(count.current);
    }
  };

  const inputRef = useRef();
  console.log(inputRef.current);

  const newInputRef = useRef();
  console.log("re");

  return (
    <div className="x-col mt-3 flex flex-col items-center justify-center gap-3">
      <button className="rounded-2xl border-2 p-1" onClick={() => handleClick()}>
        Click me!
      </button>

      <div className="flex gap-2">
        <TextInput ref={inputRef} />
        <button className="rounded-2xl border-2 p-1" onClick={() => inputRef.current.focus()}>
          Focus
        </button>
        <button className="rounded-2xl border-2 p-1" onClick={() => inputRef.current.remove()}>
          Remove
        </button>
      </div>

      <div className="flex gap-2">
        <NewTextInput ref={newInputRef} />
        <button className="rounded-2xl border-2 p-1" onClick={() => newInputRef.current.focus()}>
          Focus
        </button>
      </div>
    </div>
  );
};

export default UseRef;
