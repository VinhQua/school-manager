import React from "react";

const Button = ({
  icon,
  size,
  text,
  borderRadius,
  width,
  handleClick,
  color,
  bgColor,
}) => {
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      style={{ borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-lg text-${color} bg-${bgColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
