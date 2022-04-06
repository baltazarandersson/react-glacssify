import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 2rem;
  border-radius: 1rem;
  gap: 2rem;

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

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const Title = styled.p`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;
export const Description = styled.p`
  display: flex;
  justify-content: center;
  color: rgba(256, 256, 256, 0.6);
`;
