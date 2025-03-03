import React from "react";
import { RosariumH1 } from "./rosarium/RosariumHeading";
import RosariumInput from "./rosarium/RosariumInput";
import RosariumCard from "./rosarium/RosariumCard";
import RosariumButton, { ButtonType } from "./rosarium/RosariumButton";

// interface LoginProps extends PropsWithChildren<any> {
//   level?: number;
// }

export const Login: React.FC = () => {
  return (
    <main className="login-page">
      <RosariumCard>
        <RosariumH1>Log In</RosariumH1>
        <div className="login-form">
          <RosariumInput placeholder="usuario" />
          <RosariumInput placeholder="contraseña" type="password" />
          <RosariumButton label="Login" variant={ButtonType.primary} />
        </div>
      </RosariumCard>
    </main>
  );
};

export default Login;
