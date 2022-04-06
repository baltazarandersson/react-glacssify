import styled from "styled-components";

export const Div = styled.div`
  color: #fafafa;
  display: flex;
  flex-direction: row-reverse;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  background-image: url("https://i.imgur.com/xr1ZZp9.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 10% 2rem 10%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
