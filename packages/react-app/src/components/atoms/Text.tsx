import React from "react";

export interface TextProps {
  as?: "p" | "span";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  color?: "black" | "dark-gray" | "gray" | "light-gray" | "blue" | "red" | "green" | "yellow" | "white";
  weight?: "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Text: React.FC<TextProps> = ({ as, size, color, weight, align, children, className }) => {
  const HtmlTag = as ? as : "p";

  const sizeClassName =
    size === "xs"
      ? "text-xs"
      : size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-base"
      : size === "lg"
      ? "text-lg"
      : size === "xl"
      ? "text-xl"
      : size === "2xl"
      ? "text-2xl"
      : size === "3xl"
      ? "text-3xl"
      : "text-base";

  const colorClassName =
    color === "black"
      ? "text-gray-800"
      : color === "dark-gray"
      ? "text-gray-600"
      : color === "light-gray"
      ? "text-gray-400"
      : color === "blue"
      ? "text-blue-400"
      : color === "red"
      ? "text-red-400"
      : color === "green"
      ? "text-green-400"
      : color === "yellow"
      ? "text-yellow-400"
      : color === "white"
      ? "text-white"
      : "text-gray-800";

  const weightClassName =
    weight === "normal"
      ? "font-normal"
      : weight === "medium"
      ? "font-medium"
      : weight === "bold"
      ? "font-bold"
      : "font-normal";

  const alignClassName =
    align === "left"
      ? "text-left"
      : align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <HtmlTag className={`${sizeClassName} ${colorClassName} ${alignClassName} ${weightClassName} ${className}`}>
      {children}
    </HtmlTag>
  );
};
