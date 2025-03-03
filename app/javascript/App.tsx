import React from "react";
import { withProvider } from "./graphqlProvider";
// import Works from "./components/Naive";

const Application: React.FunctionComponent = () => {
  return <main>
    <h1>Welcome traveler</h1>
  </main>;
};

export default withProvider(Application);
