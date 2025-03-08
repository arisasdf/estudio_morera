import RosariumLogoPlaceholder from "@rosarium/RosariumLogoPlaceholder";
import React, { PropsWithChildren } from "react";

// TODO: get current page from router
// TODO: Actually style it lol

export const SPALayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        alignItems: "stretch",
      }}
    >
      <nav
        style={{
          width: "250px",
          backgroundColor: "var(--tinctus-primary-500)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <RosariumLogoPlaceholder width={150} height={50} />
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "stretch",
            alignItems: "stretch",
          }}
        >
          <li style={{padding: "12px 20px", color: "white"}}>🗡️ Lorem</li>
          <li style={{padding: "12px 20px", color: "white", backgroundColor: "var(--tinctus-primary-700)"}}>⚔️ Ipsum</li>
          <li style={{padding: "12px 20px", color: "white"}}>🏰 Dolor</li>
          <li style={{padding: "12px 20px", color: "white"}}>👑 Sit amet</li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default SPALayout;
