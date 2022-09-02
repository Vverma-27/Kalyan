import React from "react";

const TextInput = React.forwardRef(
  (
    { label, type }: { label: string; type: string },
    ref: React.MutableRefObject<HTMLInputElement>
  ) => {
    return (
      <div className="flex flex-col-reverse items-start justify-start gap-2">
        <input
          type={type}
          className="
        block
        w-full
        px-3
        peer
        py-1.5
        text-base
        text-black
        bg-white bg-clip-padding
        rounded
        border-2
        m-0 focus:border-primary outline-none 
      "
          ref={ref}
          required
          placeholder={label}
          id={`input-${label}`}
          style={{ transition: "all 0.5s ease" }}
        />
        <label
          htmlFor={`input-${label}`}
          className="font-extrabold text-xs text-white  uppercase underline underline-offset-1 peer-focus:text-primary"
          style={{ transition: "all 0.5s ease" }}
        >
          {label}
        </label>
      </div>
    );
  }
);

export default TextInput;
