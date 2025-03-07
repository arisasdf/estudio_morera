import React, { useState } from "react";
import { RosariumH1 } from "@rosarium/RosariumHeading";
import RosariumInput from "@rosarium/RosariumInput";
import RosariumCard from "@rosarium/RosariumCard";
import RosariumButton from "@rosarium/RosariumButton";
import RosariumLogoPlaceholder from "@rosarium/RosariumLogoPlaceholder";
import I18N from "../i18n/i18n";

export const Login: React.FC = () => {
  const [inputVal, setInputVal] = useState("");
  const [showRecover, setRecover] = useState(false);

  // const onInput: void = (value) => {

  // }

  return (
    <>
      <main className="login-page">
        <RosariumLogoPlaceholder />
        <RosariumCard>
          <RosariumH1>{I18N("login.heading")}</RosariumH1>
          <div className="login-inputs">
            <RosariumInput
              id="login-email"
              label={I18N("login.email")}
              size="large"
              labelInside
            />
            {!showRecover && (
              <RosariumInput
                id="login-password"
                label={I18N("login.password")}
                size="large"
                labelInside
              />
            )}
          </div>
          <div className="login-actions">
            <RosariumButton
              label={showRecover ? I18N("login.recover") : I18N("login.cta")}
              variant="primary"
            />
            {showRecover && (
              <RosariumButton
                label={I18N("back")}
                onClick={() => {
                  setRecover(false);
                }}
                variant="secondary"
              />
            )}
            {!showRecover && (
              <a
                className="rosarium-link-small"
                onClick={() => {
                  setRecover(true);
                }}
              >
                {I18N("login.recover")}
              </a>
            )}
          </div>
        </RosariumCard>
      </main>
      <footer className="login-footer">
        <span>
          <a href="https://lucia.cr">Lucía S</a> &ndash; Estudio Morera &copy;
          2025
        </span>
      </footer>
    </>
  );
};

export default Login;
