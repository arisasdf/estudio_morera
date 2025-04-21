import React, { JSX, PropsWithChildren, useRef, useState } from "react";
import Rosarium from "../../rosarium/Rosarium";
import RosariumIcon from "./RosariumIcon";

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
  onFocus?: () => void;
  onInput?: (arg0: string) => void;
  onSubmit?: () => void;
  id?: string;
  ignoreLabelEnforcement?: boolean;
  variant?: "active" | "error" | "locked";
}

export const RosariumInput: React.FC<InputProps> = ({
  // Content
  label = "",
  labelInside = false,
  placeholder = "",
  value = undefined,
  ignoreLabelEnforcement = false,

  // UI props
  type = "text",
  size = "medium",
  variant = "active",

  // Callbacks
  onFocus = () => {},
  onInput = () => {},
  onSubmit = () => {},

  // Other
  id = null,
}) => {
  // State declarations
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const inputRef = useRef(null);

  // Callbacks
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
        {label || (ignoreLabelEnforcement ? "" : ERROR_LABEL)}
      </label>
    );
  };

  if (!label) {
    if (ignoreLabelEnforcement) {
      Rosarium.warn("[Input] Use of labels is recommended for all inputs.");
    } else {
      Rosarium.error("[Input] Where's the label? Ya basic.");
    }
  }

  if (labelInside) {
    if (size === "large") {
      innerLabel = labelElement("inner");
      if (placeholder) {
        Rosarium.warn("[Input] Placeholder overridden.");
        placeholderText = "";
      }
    } else if (ignoreLabelEnforcement) {
      if (placeholder) {
        Rosarium.warn("[Input] Placeholder overridden.");
      }
      placeholderText = label;
    } else {
      Rosarium.error(
        "[Input] Only large inputs should have the label inside. Ya basic."
      );
      placeholderText = ERROR_LABEL;
    }
  } else {
    outerLabel = labelElement("outer");
  }

  let leadingElement: JSX.Element = <></>;

  if (variant === "error") {
    leadingElement = (
      <RosariumIcon name="error" />
    )
  }

  // Trailing element
  // TODO: consider receiving something else as trailing element
  let trailingElement: JSX.Element = <></>;

  if (type == "password") {
    trailingElement = (
      <RosariumIcon
        onClick={() => {
          setPasswordVisibility(!passwordVisibility);
        }}
        name={passwordVisibility ? "eye-hide" : "eye-show"}
      />
    );
  }

  // Common props
  const inputProps: { id?: string } = {};
  if (id) inputProps.id = id;

  // Final render
  return (
    <div className={`rosarium-input--${size} rosarium-input--${variant}`}>
      {outerLabel}
      <div className="rosarium-input-wrapper" onClick={() => { inputRef.current.focus(); }}>
        {leadingElement}
        {innerLabel}
        <input
          ref={inputRef}
          onInput={onNativeInput}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          placeholder={placeholderText}
          type={type == "password" && !passwordVisibility ? "password" : "text"}
          value={value}
          {...inputProps}
        ></input>
        {trailingElement}
      </div>
    </div>
  );
};

export default RosariumInput;
