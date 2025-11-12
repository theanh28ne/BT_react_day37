import { forwardRef } from "react";

const TextInput = forwardRef(({ placeholder, value, onChage, ...passProps }, ref) => {
  return (
    <div>
      <input
        {...passProps}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChage}
        className="block border-2 p-1"
        type="text"
      />
    </div>
  );
});

export default TextInput;
