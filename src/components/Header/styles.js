import styled from "styled-components";

export const Header = styled.header`
  width: 50%;
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

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

  @media (max-width: 720px) {
    width: 100%;
    height: auto;
  }
`;
export const Logo = styled.p`
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
  font-variant: italic;
`;
