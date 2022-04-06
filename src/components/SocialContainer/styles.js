import styled from "styled-components";

export const SocialLinks = styled.div`
  position: fixed;
  display: fixed;
  align-items: center;
  right: 10%;
  bottom: 2rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;

  a {
    color: inherit;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 720px) {
    padding: 0.5rem 1rem;
    p {
      display: none;
    }
  }

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
