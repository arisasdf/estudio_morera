import React from "react";
import SPALayout from "./SPALayout";

const HC_USER = {
  firstName: "Rosario",
  lastName: "Tijeras",
  fullName: "Rosario Tijeras",
}

export const TDash: React.FC = () => {
  return <SPALayout>
    <h1>Hello</h1>
    <p> world </p>
  </SPALayout>;
}

export default TDash;