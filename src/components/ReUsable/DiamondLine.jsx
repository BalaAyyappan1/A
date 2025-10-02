import React from "react";

/**
 * DiamondLine
 * Props:
 *  - color (string) : color of line and diamonds (default '#FF9933')
 *  - thickness (number) : line height in px (default 2)
 *  - diamondSize (number) : diamond width/height in px (default 16)
 */
export default function DiamondLine({
  color = "#FF9933",
  thickness = 2,
  diamondSize = 16,
}) {
  const Diamond = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={diamondSize}
      height={diamondSize}
      className="flex-shrink-0 -mx-[5px]" // 👈 overlaps so no gap
      aria-hidden="true"
    >
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        transform="rotate(45 12 12)"
        fill={color}
      />
    </svg>
  );

  return (
    <div className="flex items-center w-full max-w-2xl mx-auto -mt-5">
      {Diamond}
      <div
        className="flex-1"
        style={{ height: `${thickness}px`, background: color }}
        aria-hidden="true"
      />
      {Diamond}
    </div>
  );
}
