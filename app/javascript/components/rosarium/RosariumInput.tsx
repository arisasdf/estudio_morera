import React, { JSX, PropsWithChildren } from "react";
import Rosarium from "../../rosarium/Rosarium";

// TODO ideas:
// - clear button
// - button to see password on password types

const ERROR_LABEL: string = "[YA BASIC]";

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
  enforceLabel?: boolean;
}

export const RosariumInput: React.FC<InputProps> = ({
  // Content
  label = "",
  labelInside = false,
  placeholder = "",
  value = undefined,
  enforceLabel = true,

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

  // Label and placeholder
  let outerLabel: JSX.Element = <></>;
  let innerLabel: JSX.Element = <></>;
  let placeholderText: string = placeholder;

  const labelElement = (type: string): JSX.Element => {
    return (
      <label htmlFor={id} className={`rosarium-input--${type}-label`}>
        {label || (enforceLabel ? ERROR_LABEL : "")}
      </label>
    );
  };

  if (!label) {
    if (enforceLabel) {
      Rosarium.error("[Input] Where's the label? Ya basic.");
    } else {
      Rosarium.warn("[Input] Use of labels is recommended for all inputs.");
    }
  }

  if (labelInside) {
    if (size === "large") {
      innerLabel = labelElement("inner");
      if (placeholder) {
        Rosarium.warn("[Input] Placeholder overridden.")
        placeholderText = "";
      }
    } else if (enforceLabel) {
      Rosarium.error("[Input] Only large inputs should have the label inside. Ya basic.");
      placeholderText = ERROR_LABEL;
    } else {
      if (placeholder) {
        Rosarium.warn("[Input] Placeholder overridden.")
      }
      placeholderText = label;
    }
  } else {
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
          placeholder={placeholderText}
          {...inputProps}
        ></input>
      </div>
    </div>
  );
};

export default RosariumInput;
