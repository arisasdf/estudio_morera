import React, { PropsWithChildren } from "react";

export const RosariumLogoPlaceholder: React.FC<PropsWithChildren> = () => {
  return (<div style={{borderRadius: "15px", backgroundColor: "#999999", width: "300px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <p style={{color: "#ffffff"}}>YOUR LOGO HERE</p>
  </div>);
};

export default RosariumLogoPlaceholder;