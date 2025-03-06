import React from "react";
import { PropsWithChildren } from "react";
import ColorRow from "./ColorRow";
import PALETTES from "./palettes";
import { upperCase } from "lodash";

const ColorTable: React.FC<PropsWithChildren> = () => {
  const colorTableCss = `
  table td p { font-size: 12px; }
`;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <style>{colorTableCss}</style>
      {Object.keys(PALETTES).map((paletteName) => (
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              marginBottom: "15px",
            }}
          >
            {upperCase(paletteName)}
          </p>
          <table>
            {Object.keys(PALETTES[paletteName]).map((colorName) => (
              <ColorRow
                name={colorName}
                hex={PALETTES[paletteName][colorName]}
              />
            ))}
          </table>
        </div>
      ))}
    </div>
  );
};

export default ColorTable;
