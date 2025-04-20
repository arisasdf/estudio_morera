import React, { PropsWithChildren, useEffect, useState } from "react";
import { PopoverPicker } from "./PopoverPicker";
import RosariumIcon from "@javascript/components/rosarium/RosariumIcon";

// Color utilities
// ===============

const hexToRgb = (hex: string): number[] => {
  // Grab the hex representation of each color (pair) and convert to decimal (base 10).
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

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
  hex: string
): string => {
  let [r, g, b, a] = hex
    .replace(
      /^#?(?:(?:(..)(..)(..)(..)?)|(?:(.)(.)(.)(.)?))$/,
      "$1$5$5$2$6$6$3$7$7$4$8$8"
    )
    .match(/(..)/g)
    .map((rgb) => parseInt("0x" + rgb));
  // debugger
  return (~~(r * 299) + ~~(g * 587) + ~~(b * 114)) / 1000 >= 128
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
  const [currentHex, setCurrentHex] = useState(hex);
  const [currentRgb, setCurrentRgb] = useState(hexToRgb(hex));
  const [currentHsl, setCurrentHsl] = useState([0, 0, 0]);
  const [fgColor, setFgColor] = useState("#ffffff");

  useEffect(() => {
    const rgb = hexToRgb(currentHex);
    setCurrentRgb(rgb);
    setCurrentHsl(rgbToHsl(rgb[0], rgb[1], rgb[2]));
    setFgColor(
      contrastingColor(currentHex)
    );
    // setFgColor(currentHex);
  }, [currentHex]);

  const pStyle: any = {
    color: fgColor,
  };

  const rgbInner = (
    <>
      <p style={pStyle}>R: {currentRgb[0]}</p>
      <p style={pStyle}>G: {currentRgb[1]}</p>
      <p style={pStyle}>B: {currentRgb[2]}</p>
    </>
  );

  const hslInner = (
    <>
      <p style={pStyle}>H: {Math.round(currentHsl[0] * 360)}</p>
      <p style={pStyle}>S: {Math.round(currentHsl[1] * 100)}%</p>
      <p style={pStyle}>L: {Math.round(currentHsl[2] * 100)}%</p>
    </>
  );

  const nameInner = (
    <>
      <p style={pStyle}>{name}</p>
      <input style={{
        color: fgColor,
        height: "14px",
        fontSize: "12px",
        backgroundColor: "transparent",
        textAlign: "center",
        width: "100%",
      }} value={currentHex} onChange={(i) => {setCurrentHex(i.target.value)}}></input>
    </>
  );

  const trStyle: any = {
    backgroundColor: currentHex,
  };

  return (
    <>
      <tr style={trStyle}>
        <td style={{ padding: "20px 5px 20px 10px", width: "70px" }}>
          {hslInner}
        </td>
        <td style={{ padding: "20px 10px 20px 5px", width: "60px" }}>
          {rgbInner}
        </td>
        <td style={{ textAlign: "center", padding: "10px", width: "80px" }}>
          {nameInner}
          <div
            style={{
              display: "flex",
              gap: "5px",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            <PopoverPicker
              color={currentHex}
              onChange={(hex: string) => {
                setCurrentHex(hex);
              }}
              fgColor={fgColor}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ColorRow;
