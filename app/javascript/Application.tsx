import React from "react";
import { withApolloProvider } from "./graphqlProvider";
import Login from "@components/Login";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import RosariumCard from "@rosarium/RosariumCard";
import Works from "@components/Works";

export const Home: React.FC = () => {
  return (
    <div className="TODO-delete home-body">
      <RosariumCard>
        <RosariumH1>Welcome!</RosariumH1>
        <Link to="/login" className="rosarium-link">Login</Link>
        <p>Remember to change to i18n if you are reusing these components.</p>
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
        <Route path="works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default withApolloProvider(Application);
