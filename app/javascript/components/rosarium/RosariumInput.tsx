import React, { PropsWithChildren } from "react";

interface InputProps extends PropsWithChildren<any> {
  label: string;
}

const RosariumInput: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="rosarium-input-container">
      <label>{label}</label>
      <input type="text"></input>
    </div>
  );
};

export default RosariumInput;
