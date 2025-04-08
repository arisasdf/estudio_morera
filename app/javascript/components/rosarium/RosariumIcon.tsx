// https://fonts.google.com/icons?selected=Material+Symbols+Outlined:visibility:FILL@0;wght@500;GRAD@0;opsz@24&icon.size=24&icon.color=%231f1f1f&icon.style=Outlined&icon.set=Material+Symbols

// weight 500, grade 200, optical size 24, material symbols, rounded

import React, { PropsWithChildren } from "react";

interface IconProps extends PropsWithChildren<any> {
  name: string;
  filled?: boolean;
  size?: string;
}

export const RosariumIcon: React.FC<IconProps> = ({ name, filled = false, size = "15px" }) => {
  return (
    <span className={`rosarium-icon--${name}${filled ? "-filled" : ""}`} style={{width: size, height: size}}></span>
  );
};

export default RosariumIcon;
