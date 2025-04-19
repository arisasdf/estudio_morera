// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:visibility:FILL@0;wght@500;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f&icon.style=Outlined&icon.set=Material+Symbols

// weight 500, grade 200, optical size 24, material symbols, rounded

import React, { PropsWithChildren } from "react";

interface IconProps extends PropsWithChildren<any> {
  name: string;
  filled?: boolean;
  size?: string;
  color?: string;
  onClick?: () => void;
}

export const RosariumIcon: React.FC<IconProps> = ({
  name,
  filled = false,
  size = "",
  color = "",
  onClick = () => {},
}) => {
  const iconStyle: any = {};

  if (size) {
    iconStyle.width = size;
    iconStyle.height = size;
  }

  if (color) {
    iconStyle.backgroundColor = color;
  }

  return (
    <span
      className={`rosarium-icon--${name}${filled ? "-filled" : ""}`}
      style={iconStyle}
      onClick={onClick}
    ></span>
  );
};

export default RosariumIcon;
