import React from "react";
import { Link } from "react-router";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import RosariumCard from "@rosarium/RosariumCard";

export const Home: React.FC = () => {
  return (
    <div className="TODO-delete home-body">
      <RosariumCard>
        <RosariumH1>Testing Homepage</RosariumH1>
        <ul style={{margin: "20px 0"}}>
          <li style={{margin: "10px 0 0 10px"}}><Link to="/login" className="rosarium-link">Login</Link></li>
          <li style={{margin: "10px 0 0 10px"}}><Link to="/app/works" className="rosarium-link">Works</Link></li>
        </ul>
        <p>Remember to delete this dude when you're done.</p>
      </RosariumCard>
    </div>
  );
};

export default Home;