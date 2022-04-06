import { useGlassContext } from "../../context/GlassContext";
import { Header, Logo } from "./styles";

export function AppHeader() {
  const { glassStyle } = useGlassContext();

  return (
    <Header glassStyle={glassStyle}>
      <Logo>GLACSSIFY</Logo>
      <div></div>
    </Header>
  );
}
