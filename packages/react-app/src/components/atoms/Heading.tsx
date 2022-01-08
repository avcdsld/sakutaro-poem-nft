import React from "react";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  color?: "black" | "dark-gray" | "white";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ as, size, color, align, children, className }) => {
  const HtmlTag = as ? as : "h3";

  const sizeClassName =
    size === "sm"
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
      : color === "white"
      ? "text-white"
      : "text-gray-700";

  const alignClassName =
    align === "left"
      ? "text-left"
      : align === "center"
      ? "text-center"
      : align === "right"
      ? "text-right"
      : "text-left";
  return (
    <HtmlTag className={`font-bold ${sizeClassName} ${colorClassName} ${alignClassName} ${className}`}>
      {children}
    </HtmlTag>
  );
};
