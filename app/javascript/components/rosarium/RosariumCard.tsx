import React, { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren<any> {
  translucent?: boolean;
}

export const RosariumCard: React.FC<CardProps> = ({
  translucent = false,
  children,
}) => {
  return (
    <div className={`rosarium-card${translucent && "--translucent"}`}>
      {children}
    </div>
  );
};

export default RosariumCard;
