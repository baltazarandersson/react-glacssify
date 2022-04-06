import styled from "styled-components";

export const Div = styled.div`
  position: relative;
  overflow: hidden;
  color: #fafafa;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 2rem;
  height: 100vh;

  padding: 2rem 10% 2rem 10%;
  @media (max-width: 720px) {
    flex-direction: column;
    height: inherit;
  }
`;
