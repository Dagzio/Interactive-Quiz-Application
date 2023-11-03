import styled from 'styled-components';

export const QuestionBar = styled.div`
  border-radius: 4px;
  max-width: inherit;
  text-align: center;
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: #f6f4f3;

  @media (min-width: 768px) {
    width: 768px;
  }
`;

export const QuestionContent = styled.p`
  font-weight: 700;
`;
