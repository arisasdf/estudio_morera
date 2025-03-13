import React, { JSX, PropsWithChildren } from "react";

// TODO ideas:
// - clear button
// - button to see password on password types

interface InputProps extends PropsWithChildren<any> {
  label?: string;
  labelInside?: boolean;
  size?: "small" | "medium" | "large";
  placeholder?: string;
  type?: "text" | "password";
  value?: string;
  onInput?: (arg0: string) => void;
  onSubmit?: () => void;
  id?: string;
}

export const RosariumInput: React.FC<InputProps> = ({
  // Content
  label = "",
  labelInside = false,
  placeholder = "",
  value = undefined,

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

  const labelElement = (classInner: string): JSX.Element => {
    return (
      <label htmlFor={id} className={`rosarium-input--${classInner}-label`}>
        {label}
      </label>
    );
  };

  if (size === "large" && labelInside) {
    if (!label) {
      console.error("Label inside requires a `label` prop.");
    } else {
      innerLabel = labelElement("inner");
    }
  } else {
    if (labelInside) {
      console.warn("Only large inputs can have the label inside. Ya basic.");
    }
    outerLabel = labelElement("outer");
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
          placeholder={labelInside ? "" : placeholder}
          {...inputProps}
        ></input>
      </div>
    </div>
  );
};

export default RosariumInput;
