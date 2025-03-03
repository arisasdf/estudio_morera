import React, { PropsWithChildren } from "react";

interface HeadingProps extends PropsWithChildren<any> {
  level?: number;
}

// Note to self: I've chosen to call this a "heading" and not a "header"
// because the default aria-role for h-tags is heading
export const RosariumHeading: React.FC<HeadingProps> = ({
  level = 1,
  children,
}) => {
  return React.createElement(
    `h${level}`,
    { className: `rosarium-h${level}` },
    children
  );
};

export const RosariumH1: React.FC<HeadingProps> = ({ children }) => {
  return <RosariumHeading level={1}>{children}</RosariumHeading>;
};

export const RosariumH2: React.FC<HeadingProps> = ({ children }) => {
  return <RosariumHeading level={2}>{children}</RosariumHeading>;
};

export const RosariumH3: React.FC<HeadingProps> = ({ children }) => {
  return <RosariumHeading level={3}>{children}</RosariumHeading>;
};

export default RosariumHeading;
