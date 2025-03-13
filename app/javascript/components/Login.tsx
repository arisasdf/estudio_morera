import React, { useState } from "react";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumCard from "@rosarium/RosariumCard";
import RosariumButton from "@rosarium/RosariumButton";
import RosariumLogoPlaceholder from "@rosarium/RosariumLogoPlaceholder";
import I18N from "../i18n/i18n";

export const Login: React.FC = () => {
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [showRecover, setRecover] = useState(false);

  const onEmailInput = (value: string): void => {
    setEmailVal(value);
  };

  const onPasswordInput = (value: string): void => {
    setPasswordVal(value);
  };

  const onLoginClick = (): void => {
    alert(
      `Welcome ${emailVal}! Your password is ${passwordVal.length} characters.`
    );
  };

  const onRecoverClick = (): void => {
    alert(`Alright, ${emailVal}, we'll send you a recovery email.`);
  };

  return (
    <div className="login-body">
      {/* <header>
        <RosariumLogoPlaceholder width={200} height={80} />
      </header> */}
      <main className="rosarium-card--translucent">
        <RosariumInput
          id="login-email"
          placeholder={I18N("login.email")}
          size="large"
          value={emailVal}
          onInput={onEmailInput}
        />
        {showRecover ? (
          <RosariumButton
            label={I18N("login.recover")}
            size="large"
            variant="primary-outline"
            onClick={onRecoverClick}
          />
        ) : (
          <>
            <RosariumInput
              id="login-password"
              placeholder={I18N("login.password")}
              size="large"
              type="password"
              value={passwordVal}
              onInput={onPasswordInput}
            />
            <RosariumButton
              label={I18N("login.cta")}
              size="large"
              variant="primary-outline"
              onClick={onLoginClick}
            />
          </>
        )}
        <a className="rosarium-link-small" onClick={() => setRecover(!showRecover)}>
          {showRecover ? I18N("back") : I18N("login.recover")}
        </a>
      </main>
      <footer>
        <span>
          <a className="rosarium-link" href="https://lucia.cr">
            Lucía S
          </a>{" "}
          &ndash; Estudio Morera &copy; 2025
        </span>
      </footer>
    </div>
  );
};

export default Login;
