import React from "react";
import { RosariumH1 } from "./rosarium/RosariumHeading";
import RosariumInput from "./rosarium/RosariumInput";

// interface LoginProps extends PropsWithChildren<any> {
//   level?: number;
// }

export const Login: React.FC = () => {
  return <main>
    <RosariumH1>Hello traveler!</RosariumH1>
    <RosariumInput label="Please give me your name." />
  </main>
};

export default Login;
