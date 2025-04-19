import React, { PropsWithChildren } from "react";

// Color utilities
// ===============

const hexToRgb = (hex: string): number[] => {
  // Grab the hex representation of each color (pair) and convert to decimal (base 10).
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  return [r, g, b];
};

const rgbToHsl = (r: number, g: number, b: number): number[] => {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
};

const contrastingColor = (
  hex: string,
  r0: number, g0: number, b0: number
): string => {
  let [r, g, b, a] = hex
    .replace(
      /^#?(?:(?:(..)(..)(..)(..)?)|(?:(.)(.)(.)(.)?))$/,
      "$1$5$5$2$6$6$3$7$7$4$8$8"
    )
    .match(/(..)/g)
    .map((rgb) => parseInt("0x" + rgb));
    // debugger
  return (((~~(r * 299) + ~~(g * 587) + ~~(b * 114)) / 1000) >= 128)
    ? "#34373b"
    : "#ffffff";
};

// ColorRow component
// ==================

interface ColorRowProps extends PropsWithChildren<any> {
  name: string;
  hex: string;
}

const ColorRow: React.FC<ColorRowProps> = ({ name, hex }) => {
  const rgb = hexToRgb(hex);
  const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);

  const pStyle: any = {
    color: contrastingColor(hex, rgb[0], rgb[1], rgb[2]),
  };

  const rgbInner = (
    <>
      <p style={pStyle}>R: {rgb[0]}</p>
      <p style={pStyle}>G: {rgb[1]}</p>
      <p style={pStyle}>B: {rgb[2]}</p>
    </>
  );

  const hslInner = (
    <>
      <p style={pStyle}>H: {Math.round(hsl[0] * 360)}</p>
      <p style={pStyle}>S: {Math.round(hsl[1] * 100)}%</p>
      <p style={pStyle}>L: {Math.round(hsl[2] * 100)}%</p>
    </>
  );

  const nameInner = (
    <>
      <p style={pStyle}>{name}</p>
      <p style={pStyle}>{hex}</p>
    </>
  );

  const trStyle: any = {
    backgroundColor: hex
  };

  // if (name == "500") {
  //   trStyle.borderBottom = "3px solid #fff";
  //   trStyle.borderTop = "3px solid #fff";
  // }

  //"25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"
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
    <>
      {renderTheseColors.includes(name) && (
        <tr style={trStyle}>
          <td style={{ textAlign: "center", padding: "20px 0", width: "80px" }}>
            {nameInner}
          </td>
          <td style={{ padding: "20px 0", width: "50px" }}>{hslInner}</td>
          <td style={{ padding: "20px 0", width: "50px" }}>{rgbInner}</td>
        </tr>
      )}
    </>
  );
};

export default ColorRow;
