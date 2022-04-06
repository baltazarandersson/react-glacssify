import { useGlassContext } from "../../context/GlassContext";
import { CodeBox } from "../CodeBox";
import { SlidersWrapper } from "../SlidersWrapper";
import { Div, MainWrapper, Title, Description } from "./styles";

export function Main() {
  const { glassStyle } = useGlassContext();

  return (
    <Div glassStyle={glassStyle}>
      <div>
        <Title>GLASS Effect Generator</Title>
        <Description>create your own glass effect!</Description>
      </div>
      <MainWrapper>
        <SlidersWrapper />
      </MainWrapper>
      <CodeBox />
    </Div>
  );
}
