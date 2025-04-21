import React, { useState } from "react";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumCard from "@rosarium/RosariumCard";
import RosariumButton from "@rosarium/RosariumButton";
import I18N from "@javascript/i18n/I18N";
import { useNavigate } from "react-router";

const EMAIL_INPUT_ID = "username-input";
const PASSWORD_INPUT_ID = "password-input";

export const Login: React.FC = () => {
  let navigate = useNavigate();

  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [showRecover, setRecover] = useState(false);

  const [inputErrors, setInputErrors] = useState([]);

  const onEmailInput = (value: string): void => {
    setInputErrors(inputErrors.filter(a => a !== EMAIL_INPUT_ID));
    setEmailVal(value);
  };

  const onPasswordInput = (value: string): void => {
    setInputErrors(inputErrors.filter(a => a !== PASSWORD_INPUT_ID));
    setPasswordVal(value);
  };

  // TODO: There's gotta be a better way to handle validation lol
  const onLoginClick = (): void => {
    const loginErrors = [];

    if (!emailVal) {
      loginErrors.push(EMAIL_INPUT_ID);
    }

    if (!passwordVal) {
      loginErrors.push(PASSWORD_INPUT_ID);
    }

    setInputErrors(loginErrors);

    if (loginErrors.length !== 0) return;

    navigate("/app/dashboard");
  };

  const onRecoverClick = (): void => {
    const pwRecErrors = [];

    if (!emailVal) {
      pwRecErrors.push(EMAIL_INPUT_ID);
    }

    setInputErrors(pwRecErrors);

    if (pwRecErrors.length !== 0) return;

    if (confirm(`Sent recovery email to ${emailVal}.`)) {
      navigate("/app/dashboard");
    }
  };

  return (
    <div className="login-body">
      <main>
        <RosariumCard translucent>
          <RosariumInput
            id={EMAIL_INPUT_ID}
            placeholder={I18N("login.email")}
            size="large"
            variant={inputErrors.includes(EMAIL_INPUT_ID) ? "error" : "active"}
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
                id={PASSWORD_INPUT_ID}
                placeholder={I18N("login.password")}
                size="large"
                variant={inputErrors.includes(PASSWORD_INPUT_ID) ? "error" : "active"}
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
