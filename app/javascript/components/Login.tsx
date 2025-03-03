import React from "react";
import { RosariumH1 } from "./rosarium/RosariumHeading";
import RosariumInput from "./rosarium/RosariumInput";
import RosariumCard from "./rosarium/RosariumCard";
import RosariumButton, { ButtonType } from "./rosarium/RosariumButton";
import RosariumLogoPlaceholder from "./rosarium/RosariumLogoPlaceholder";

// interface LoginProps extends PropsWithChildren<any> {
//   level?: number;
// }

export const Login: React.FC = () => {
  return (
    <>
      <main className="login-page">
        <RosariumLogoPlaceholder />
        <RosariumCard>
          <RosariumH1>Log In</RosariumH1>
          <div className="login-inputs">
            <RosariumInput placeholder="usuario" />
            <RosariumInput placeholder="contraseña" type="password" />
          </div>
          <div className="login-actions">
            <RosariumButton label="Login" variant={ButtonType.primary} />
            <RosariumButton label="Cancel" variant={ButtonType.secondary} />
            <a className="rosarium-link-small">Recover Password</a>
          </div>
        </RosariumCard>
      </main>
      <footer className="login-footer">
        <span>Designed and coded by <a href="https://lucia.cr">Lucía S</a> &ndash; &copy; Estudio Morera 2025</span>
      </footer>
    </>
  );
};

export default Login;
