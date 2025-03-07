import React, { PropsWithChildren } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends PropsWithChildren<any> {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const RosariumButton: React.FC<ButtonProps> = ({
  label = null,
  size = "medium",
  variant = "secondary",
  children
}) => {
  return (
    <button className={`rosarium-button--${size} rosarium-button--${variant}`}>
      {children || label}
    </button>
  );
};

export default RosariumButton;
