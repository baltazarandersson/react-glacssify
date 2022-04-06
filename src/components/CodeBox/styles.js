import styled from "styled-components";

export const CodeBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  min-height: 150px;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 14px;
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
export const CodeLine = styled.span`
  color: rgba(256, 256, 256, 0.6);
`;

export const ClipboardCopy = styled.button`
  background: none;
  position: absolute;
  border: none;
  right: 1rem;
  top: 1rem;
  cursor: ${(params) => {
    return params.children.props.cursorPointerStatus ? "pointer" : "auto";
  }};

  svg {
    color: #fafafa;
    width: 25px;
    height: 25px;
  }
`;
