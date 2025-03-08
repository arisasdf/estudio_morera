import React, { PropsWithChildren } from "react";

interface LogoPlaceholderComponents extends PropsWithChildren<any> {
  width?: number;
  height?: number;
}


export const RosariumLogoPlaceholder: React.FC<LogoPlaceholderComponents> = ({width = 300, height = 200}) => {
  return (<div style={{borderRadius: "15px", backgroundColor: "#999999", width: `${width}px`, height: `${height}px`, display: "flex", alignItems: "center", justifyContent: "center"}}>
    <p style={{color: "#ffffff"}}>YOUR LOGO HERE</p>
  </div>);
};

export default RosariumLogoPlaceholder;