import React, { PropsWithChildren } from "react";

export enum ButtonType {
  "primary",
  "secondary",
}

interface ButtonProps extends PropsWithChildren<any> {
  label: string;
  size?: string; // TODO: also make this an enum, for everything
  variant?: ButtonType;
}

const RosariumButton: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  variant = ButtonType.secondary,
}) => {
  return (
    <button className={`rosarium-button--${size} rosarium-button--${ButtonType[variant]}`}>
      {label}
    </button>
  );
};

export default RosariumButton;
