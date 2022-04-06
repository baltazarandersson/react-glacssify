import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useGlassContext } from "../../context/GlassContext";
import { SocialLinks } from "./styles";

export function SocialContainer() {
  const { glassStyle } = useGlassContext();

  return (
    <SocialLinks glassStyle={glassStyle}>
      <p>Made by Baltazar Andersson</p>
      <a
        href="https://www.linkedin.com/in/baltazar-andersson/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/baltazarandersson"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </SocialLinks>
  );
}
