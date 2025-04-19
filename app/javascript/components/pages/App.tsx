import RosariumLogoPlaceholder from "@rosarium/RosariumLogoPlaceholder";
import React, { PropsWithChildren } from "react";
import { Link, Outlet, useLocation } from "react-router";
import I18N from "@javascript/i18n/I18N";

export const App: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="spa-body">
      {/* TODO: sidebar component */}
      <nav>
        <Link to="/">
          <RosariumLogoPlaceholder width={150} height={50} />
        </Link>
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
            <Link style={{cursor: "pointer"}} to="/app/works">🎼 {I18N("nav.works")}</Link>
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
            <Link style={{cursor: "pointer"}} to="/app/students">🧑‍🎓 {I18N("nav.students")}</Link>
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
      <main><Outlet /></main>
    </div>
  );
};

export default App;
