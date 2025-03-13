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
        <RosariumH1>Testing Homepage</RosariumH1>
        <ul style={{margin: "20px 0"}}>
          <li style={{margin: "10px 0 0 10px"}}><Link to="/login" className="rosarium-link">Login</Link></li>
          <li style={{margin: "10px 0 0 10px"}}><Link to="/works" className="rosarium-link">Works</Link></li>
        </ul>
        <p>Remember to delete this dude when you're done.</p>
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
