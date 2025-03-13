import React, { PropsWithChildren } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "locked" | "primary-outline" | "secondary-outline";

interface ButtonProps extends PropsWithChildren<any> {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: () => void;
}

const RosariumButton: React.FC<ButtonProps> = ({
  label = null,
  size = "medium",
  variant = "secondary",
  onClick = () => {},
  children
}) => {
  return (
    <button className={`rosarium-button--${size} rosarium-button--${variant}`} onClick={onClick}>
      {children || label}
    </button>
  );
};

export default RosariumButton;
