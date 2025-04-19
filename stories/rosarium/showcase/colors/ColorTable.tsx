import React, { PropsWithChildren } from "react";
import ColorRow from "./ColorRow";
import PALETTES from "./palettes";
import { upperCase } from "lodash";

const ColorTable: React.FC<PropsWithChildren> = () => {
  const colorTableCss = `
    table td p { font-size: 12px; }
  `;

  const renderTheseColors: string[] = [
    // "25",
    // "50",
    // "100",
    // "200",
    // "300",
    "400",
    "500",
    "600",
    // "700",
    // "800",
    // "900",
  ];

  return (
    <div className="color-tables" style={{ display: "flex", flexDirection: "row" }}>
      <style>{colorTableCss}</style>
      {Object.keys(PALETTES).map((paletteName) => (
        <div key={paletteName}>
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              marginBottom: "15px",
              color: PALETTES[paletteName]["500"],
            }}
          >
            {upperCase(paletteName)}
          </p>
          <table>
            <tbody>
              {Object.keys(PALETTES[paletteName]).map(
                (colorName) =>
                  renderTheseColors.includes(colorName) && (
                    <ColorRow
                      key={colorName}
                      name={colorName}
                      hex={PALETTES[paletteName][colorName]}
                    />
                  )
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ColorTable;
