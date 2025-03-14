import RosariumLogoPlaceholder from "@rosarium/RosariumLogoPlaceholder";
import React, { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router";
import I18N from "../i18n/i18n";

// TODO: get current page from router
// TODO: Actually style it lol

export const SPALayout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="spa-body">
      <nav>
        <RosariumLogoPlaceholder width={150} height={50} />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            alignItems: "stretch",
          }}
        >
          {/* TODO: Add router links */}
          {/* TODO: loop lol */}
          {/* TODO: cssplease */}
          {/* TODO: check the shape of location.pathname */}
          <li
            style={{
              padding: "12px 20px",
              color: "white",
              backgroundColor:
                location.pathname === "/works"
                  ? "var(--tinctus-primary-700)"
                  : "transparent",
            }}
          >
            {" "}
            🎼 {I18N("nav.works")}
          </li>
          <li
            style={{
              padding: "12px 20px",
              color: "white",
              backgroundColor:
                location.pathname === "/students"
                  ? "var(--tinctus-primary-700)"
                  : "transparent",
            }}
          >
            🧑‍🎓 {I18N("nav.students")}
          </li>
          <li
            style={{
              padding: "12px 20px",
              color: "white",
              backgroundColor:
                location.pathname === "/teachers"
                  ? "var(--tinctus-primary-700)"
                  : "transparent",
            }}
          >
            🧑‍🏫 {I18N("nav.teachers")}
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default SPALayout;
