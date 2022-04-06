import { useGlassContext } from "../../context/GlassContext";
import { CodeBoxContainer } from "./styles";

export function CodeBox() {
  const { glassStyle } = useGlassContext();

  return (
    <CodeBoxContainer glassStyle={glassStyle}>
      <span>backdrop-filter: blur({glassStyle.blur}px);</span>
      <span>
        box-shadow: 0px 0px {glassStyle.shadow * 2}px rgba(0, 0, 0,{" "}
        {glassStyle.shadowTransparency / 10});
      </span>
      <span>
        {" "}
        border: {glassStyle.outline}px solid rgba(
        {glassStyle.outlineColor},{glassStyle.outlineColor},
        {glassStyle.outlineColor},{glassStyle.outlineTransparency / 10}
        );
      </span>
    </CodeBoxContainer>
  );
}
