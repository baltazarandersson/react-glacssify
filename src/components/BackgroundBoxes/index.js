import { RandomBox } from "../RandomBox";
import { Background } from "./styles";

export function BackgroundBoxes() {
  return (
    <Background>
      {[0, 1, 2].map((id) => {
        return <RandomBox />;
      })}
    </Background>
  );
}
