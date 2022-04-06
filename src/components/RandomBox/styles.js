import styled from "styled-components";
export const GlassBox = styled.div`
  position: absolute;
  border-radius: 1rem;

  width: ${(prop) => prop.width}px;
  height: ${(prop) => prop.height}px;
  left: ${(prop) => prop.left}%;
  top: ${(prop) => prop.top}%;
  transform: rotate(${(prop) => prop.rotate}deg);

  backdrop-filter: blur(${(props) => props.glassStyle.blur}px);

  box-shadow: 0px 0px ${(props) => props.glassStyle.shadow * 2}px
    ${(props) => props.glassStyle.shadow}px
    rgba(0, 0, 0, ${(props) => props.glassStyle.shadowTransparency / 10});

  border: ${(props) => props.glassStyle.outline}px solid
    rgba(
      ${(props) => props.glassStyle.outlineColor},
      ${(props) => props.glassStyle.outlineColor},
      ${(props) => props.glassStyle.outlineColor},
      ${(props) => props.glassStyle.outlineTransparency / 10}
    );
`;
