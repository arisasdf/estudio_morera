import React, { PropsWithChildren } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends PropsWithChildren<any> {
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const RosariumButton: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = "secondary",
}) => {
  return (
    <button className={`rosarium-button--${size} rosarium-button--${variant}`}>
      {label}
    </button>
  );
};

export default RosariumButton;
