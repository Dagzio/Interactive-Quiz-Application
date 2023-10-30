import styled from "styled-components";

export const Container = styled.div`
max-width: 1200px;
  margin: 0 auto;
`;

export const Main = styled.main`
  height: 89vh;
  padding: 4px 16px;
  display: flex;
  align-items:center;
  justify-content:center;
  background-color: #1a1f25;

    @media (min-width: 768px) {
      padding: 0 30px;
    }
`;