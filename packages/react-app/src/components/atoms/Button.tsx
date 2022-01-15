import React from "react";

export interface ButtonProps {
  color?: "gray" | "green" | "red" | "pink" | any;
  textColor?: any;
  rounded?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ color, textColor, children, rounded, disabled, className, onClick }) => {
  const colorClassName =
    color === "gray"
      ? "bg-gray-400"
      : color === "green"
      ? "bg-green-500"
      : color === "red"
      ? "bg-red-500"
      : color === "pink"
      ? "bg-red-400"
      : color;

  const textColorClassName = textColor || "text-white";
  const roundedClassName = rounded ? "rounded-xl" : "";
  const disabledClassName = disabled ? "opacity-25" : "hover:opacity-95";

  return (
    <button
      className={`w-full p-3 focus:outline-none text-center ${textColorClassName} ${colorClassName} ${roundedClassName} ${disabledClassName} ${className}`}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
