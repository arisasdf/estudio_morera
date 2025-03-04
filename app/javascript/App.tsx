import React from "react";
import { withProvider } from "./graphqlProvider";
import Login from "@components/Login";


const Application: React.FC = () => {
  return <Login /> ;
};

export default withProvider(Application);
