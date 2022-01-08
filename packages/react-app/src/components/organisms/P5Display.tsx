import React from "react";
import { ReactP5Wrapper } from "./P5Wrapper";
import sketch from "./sketch";

interface P5DisplayProps {
  index: string;
}

export const P5Display: React.FC<P5DisplayProps> = ({ index }) => {
  return (
    <>
      <div id="p5-canvas"></div>
      <ReactP5Wrapper sketch={sketch} tokenId={Number(index)} />
    </>
  );
};
