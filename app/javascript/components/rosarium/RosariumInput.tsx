import React, { JSX, PropsWithChildren, useState } from "react";

// TODO ideas:
// - fake placeholder that moooves on larger inputs
// - clear button
// - button to see password on password types

interface InputProps extends PropsWithChildren<any> {
  label: string;
  labelInside?: boolean;
  size?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onInput?: (arg0: string) => void;
  onSubmit?: () => void;
  id?: string;
}

const RosariumInput: React.FC<InputProps> = ({
  // Content
  label,
  labelInside = false,
  placeholder = "",
  value = null,

  // UI props
  type = "text",
  size = "medium",

  // Input and Submit
  onInput = () => {},
  onSubmit = () => {},

  // Other
  id = null,
}) => {
  // Input and submit
  const onNativeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onInput(e.target.value);
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  // Label
  let outerLabel: JSX.Element = <></>;
  let innerLabel: JSX.Element = <></>;
  let finalPlaceholder: string = "";

  if (size === "large" && labelInside) {
    innerLabel = (
      <label htmlFor={id} className="rosarium-input-inner-label">
        {label}
      </label>
    );
  } else {
    outerLabel = (
      <label htmlFor={id} className="rosarium-input-outer-label">
        {label}
      </label>
    );
    finalPlaceholder = placeholder;
  }

  // Common props
  const inputProps: { id?: string } = {};
  if (id) inputProps.id = id;

  // Final render
  return (
    <div className={`rosarium-input--${size}`}>
      {outerLabel}
      <div className="rosarium-input-wrapper">
        {innerLabel}
        <input
          onInput={onNativeInput}
          onKeyUp={onKeyUp}
          type={type}
          value={value}
          placeholder={finalPlaceholder}
          {...inputProps}
        ></input>
      </div>
    </div>
  );
};

export default RosariumInput;
