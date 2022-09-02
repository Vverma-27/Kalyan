import React from "react";
import { FaCheck } from "react-icons/fa";

const RadioButtons = ({
  label,
  buttons,
  onChange,
  frequency
}: {
  label: string;
  buttons: string[];
  onChange: (e) => void;
  frequency:string;
}) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <label
        htmlFor={`input-${label}`}
        className="font-extrabold text-xs  uppercase underline underline-offset-1 text-white"
      >
        {label}
      </label>
      <div className="flex items-center justify-center gap-6 flex-wrap">
        {buttons.map((labelRadio) => (
          <div
            className="flex items-center justify-center gap-2 flex-wrap"
            key={labelRadio}
          >
            <input
              type="radio"
              name={`radio-${label}`}
              className="hidden peer radio"
              id={`input-${labelRadio}`}
              onChange={(e) => {
                console.log(e);
                onChange(e)
              }}
              value={labelRadio}
            checked={frequency===labelRadio}              required
            />
            <label
              htmlFor={`input-${labelRadio}`}
              className="h-6 aspect-square border-white border-2 rounded peer-checked:border-primary flex justify-center items-center radio-label"
              style={{ transition: "all 0.5s ease" }}
            >
              <FaCheck
                className="text-primary  opacity-0 radio-label-icon"
                style={{ transition: "all 0.5s ease" }}
              />
            </label>
            <label
              htmlFor={`input-${labelRadio}`}
              className="font-extrabold text-xs text-white  uppercase underline underline-offset-1 peer-checked:text-primary"
              style={{ transition: "all 0.5s ease" }}
            >
              {labelRadio}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
