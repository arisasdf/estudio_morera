import RosariumIcon from "@javascript/components/rosarium/RosariumIcon";
import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useOnClickOutside } from "usehooks-ts";

export const PopoverPicker = ({ color, onChange, fgColor }) => {
  const popoverRef = useRef(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useOnClickOutside(popoverRef, close);

  return (
    <div style={{ position: "relative" }} onClick={() => toggle(true)}>
      <RosariumIcon name="adjust" size="15px" color={fgColor} />
      {isOpen && (
        <div className="picker-popover" ref={popoverRef}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
