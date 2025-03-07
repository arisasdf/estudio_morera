import React from "react";
import { withProvider } from "./graphqlProvider";
import Login from "@components/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import RosariumCard from "@rosarium/RosariumCard";

export const Home: React.FC = () => {
  return (
    <div style={{width: "400px", height: "200px", margin: "100px auto 0"}}>
    <RosariumCard>
      <RosariumH1>Welcome!</RosariumH1>
    </RosariumCard>
    </div>
  );
};

const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withProvider(Application);
