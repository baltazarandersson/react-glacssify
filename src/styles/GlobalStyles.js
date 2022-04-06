import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  overflow: hidden;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  color: #fafafa;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 2rem;

  padding: 2rem 10% 2rem 10%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
