import React from "react";

type Props = {
  type: string;
  name: any;
  placeholder?: string;
  labelClass?: string;
  value: string;
  floatingLabel?: boolean;
  id?: string;
  required?: boolean;
  labelText?: string;
  fieldClass?: string;
  errors?: string;
  onChange?: (param: any) => void;
};
const Inputfield = (props: Props) => {
  return (
    <div className="relative w-full m-2">
      <input
        type={props.type}
        id={props.id || props.name || "outlined_success"}
        name={props.name}
        value={props.value}
        onChange={(e) => props.onChange?.(e)}
        className={`peer block px-2.5 pb-2.5 pt-4 w-full text-md text-white bg-transparent border-b border-blue-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 hover:border-blue-300 mb-2 text-blue-300 ${props.fieldClass}`}
        placeholder=" "
        required={props.required}
      />
      {props.errors && (
        <p className="text-red-500 text-sm text-right">{`*${props.errors}`}</p>
      )}
      {props.floatingLabel && props.labelText && (
        <label
          htmlFor={props.id || props.name}
          className={`absolute text-md text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
          peer-hover:top-2 peer-hover:scale-75 peer-hover:-translate-y-4 p-1 text-blue-300
          ${props.labelClass}`}
        >
          {props.labelText}
        </label>
      )}
    </div>
  );
};

export default Inputfield;
