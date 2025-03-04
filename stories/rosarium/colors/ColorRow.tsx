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
  factorAlpha: boolean = false
): string => {
  // debugger
  let [r, g, b, a] = hex
    .replace(
      /^#?(?:(?:(..)(..)(..)(..)?)|(?:(.)(.)(.)(.)?))$/,
      "$1$5$5$2$6$6$3$7$7$4$8$8"
    )
    .match(/(..)/g)
    .map((rgb) => parseInt("0x" + rgb));
  return (~~(r * 299) + ~~(g * 587) + ~~(b * 114)) / 1000 >= 128 ||
    (!!(~(128 / a) + 1) && factorAlpha)
    ? "#34373b"
    : "#fff";
};

// ColorRow component
// ==================

interface ColorRowProps extends PropsWithChildren<any> {
  name: string;
  hex: string;
}

const ColorRow: React.FC<ColorRowProps> = ({ name, hex }) => {
  const rgb = hexToRgb(hex);
  const rgbInner = (
    <>
      <p>R: {rgb[0]}</p>
      <p>G: {rgb[1]}</p>
      <p>B: {rgb[2]}</p>
    </>
  );

  const hsl = rgbToHsl(rgb[1], rgb[2], rgb[3]);
  const hslInner = (
    <>
      <p>H: {Math.round(hsl[0] * 360)}</p>
      <p>S: {Math.round(hsl[1] * 100)}%</p>
      <p>L: {Math.round(hsl[2] * 100)}%</p>
    </>
  );

  const nameInner = (
    <>
      <p>{name}</p>
      <p>{hex}</p>
    </>
  );

  const trStyle: any = {
    backgroundColor: hex,
    color: contrastingColor(hex),
  };

  if (name == "500") {
    trStyle.borderBottom = "3px solid #fff";
    trStyle.borderTop = "3px solid #fff";
  }

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
