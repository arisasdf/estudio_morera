import React, { PropsWithChildren } from "react";

// TODO ideas:
// - fake placeholder that moooves on larger inputs
// - clear button
// - button to see password on password types

interface InputProps extends PropsWithChildren<any> {
  label?: string;
  size?: string;
  placeholder?: string;
  type?: string;
  value?: string;
}

const RosariumInput: React.FC<InputProps> = ({
  label = null,
  size = "medium",
  placeholder = null,
  type = "text",
  value = null,
}) => {
  return (
    <div className={`rosarium-input--${size}`}>
      {label && <label>{label}</label>}
      <input type={type} value={value} placeholder={placeholder}></input>
    </div>
  );
};

export default RosariumInput;
