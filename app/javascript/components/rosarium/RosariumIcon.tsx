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
