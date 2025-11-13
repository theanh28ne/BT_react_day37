import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(({ placeholder, value, onChage, ...passProps }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({ focus: () => inputRef.current.focus() }));
  return (
    <div>
      <input
        {...passProps}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChage}
        className="block border-2 p-1"
        type="text"
      />
    </div>
  );
});

export default NewTextInput;
