import styled from "styled-components";

export const Div = styled.div`
  color: #fafafa;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 2rem;
  width: 100vw;

  padding: 2rem 10% 2rem 10%;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`;
