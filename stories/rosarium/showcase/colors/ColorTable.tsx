import React, { PropsWithChildren } from "react";
import ColorRow from "./ColorRow";
import { upperCase } from "lodash";

interface ColorTableProps extends PropsWithChildren<any> {
  palettes: { [key: string]: { [key: string]: string } };
}

const ColorTable: React.FC<ColorTableProps> = ({ palettes = {} }) => {
  const colorTableCss = `
    table td p { font-size: 12px; }
  `;

  const renderTheseColors: string[] = [
    "25",
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ];

  return (
    <div
      className="color-tables"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <style>{colorTableCss}</style>
      {Object.keys(palettes).map((paletteName) => (
        <div key={paletteName}>
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              marginBottom: "15px",
              color: palettes[paletteName]["500"],
            }}
          >
            {upperCase(paletteName)}
          </p>
          <table>
            <tbody>
              {Object.keys(palettes[paletteName]).map(
                (colorName) =>
                  renderTheseColors.includes(colorName) && (
                    <ColorRow
                      key={colorName}
                      name={colorName}
                      hex={palettes[paletteName][colorName]}
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
