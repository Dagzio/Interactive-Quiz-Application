import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ListItem = styled.li`
  width: 296px;
  height: 64px;

  @media (min-width: 768px) {
    flex-basis: calc((100% - 8px) / 2);
    max-width: 380px;
    height: 100px;
  }
`;

export const AnswerBtn = styled.button`
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: ${props => props.color};
  border: transparent;
  border-radius: 8px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000000;
  

  &:active {
    box-shadow: inset 0px 1px 8px 0px rgba(48, 48, 48, 1);
  }

`;

export const VolumeBtn = styled.svg`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: #fff;
`;

export const ResetBtn = styled(AnswerBtn)`
  width: 220px;
  height: 120px;
  background-color: grey;
  box-shadow: 9px 8px 15px 0px rgba(0, 0, 0, 0.64);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:active {
    box-shadow: inset 0px 1px 8px 0px rgba(48, 48, 48, 1);
  }
  &:hover{
    background-color: #646262;
  }
`;
