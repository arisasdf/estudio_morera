import React, { PropsWithChildren } from "react";

export const RosariumCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="rosarium-card">{children}</div>;
};

export default RosariumCard;
