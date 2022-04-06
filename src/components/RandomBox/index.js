import { useState } from "react";
import { useGlassContext } from "../../context/GlassContext";
import { GlassBox } from "./styles";

export function RandomBox() {
  const { glassStyle } = useGlassContext();

  const [randomProps, setRandomProps] = useState({
    rotate: Math.floor(Math.random() * (90 - 0) + 0),
    top: Math.floor(Math.random() * (80 - 0) + 0),
    left: Math.floor(Math.random() * (90 - 30) + 30),
    height: Math.floor(Math.random() * (400 - 200) + 200),
    width: Math.floor(Math.random() * (400 - 200) + 200),
  });

  return (
    <GlassBox
      key={randomProps.rotate}
      rotate={randomProps.rotate}
      top={randomProps.top}
      left={randomProps.left}
      height={randomProps.height}
      width={randomProps.width}
      glassStyle={glassStyle}
    ></GlassBox>
  );
}
