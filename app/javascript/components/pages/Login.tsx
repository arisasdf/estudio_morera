import React, { useState } from "react";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumCard from "@rosarium/RosariumCard";
import RosariumButton from "@rosarium/RosariumButton";
import I18N from "@javascript/i18n/I18N";
import { useNavigate } from "react-router";

export const Login: React.FC = () => {
  let navigate = useNavigate();

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
    // TODO: Set error
    if (!emailVal || !passwordVal) return;

    navigate("/app/dashboard");
  };

  const onRecoverClick = (): void => {
    // TODO: Set error
    if (!emailVal) return;

    if (confirm(`Sent recovery email to ${emailVal}.`)) {
      navigate("/app/dashboard");
    }
  };

  return (
    <div className="login-body">
      <main>
        <RosariumCard translucent>
          <RosariumInput
            id="login-email"
            placeholder={I18N("login.email")}
            size="large"
            value={emailVal}
            onInput={onEmailInput}
            ignoreLabelEnforcement
          />
          {showRecover ? (
            <RosariumButton
              label={I18N("login.recover")}
              size="large"
              variant="primary"
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
                ignoreLabelEnforcement
              />
              <RosariumButton
                label={I18N("login.cta")}
                size="large"
                variant="primary"
                onClick={onLoginClick}
              />
            </>
          )}
          <a className="rosarium-link" onClick={() => setRecover(!showRecover)}>
            {showRecover ? I18N("back") : I18N("login.recover")}
          </a>
        </RosariumCard>
      </main>
      <footer>
        {/* TODO: make footer generic? */}
        <span>
          {I18N("madeBy")}{" "}
          <a className="rosarium-link" href="https://lucia.cr">
            Lucía S
          </a>{" "}
          &ndash; Estudio Lírico Morera &copy; 2025
        </span>
      </footer>
    </div>
  );
};

export default Login;
