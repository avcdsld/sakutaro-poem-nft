import p5Types from "p5"; //Import this for typechecking and intellisense

export default function sketch(p5: any) {
  p5.setup = () => {
    if (p5.windowWidth > 720) {
      p5.createCanvas(720, 720);
    } else {
      p5.createCanvas(p5.windowWidth, p5.windowWidth).parent("p5-canvas");
    }
  };
  p5.draw = () => {
    p5.background(245);
  };
}
