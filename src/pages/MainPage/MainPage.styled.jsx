import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ListItem } from 'components/Answers/Answers.styled';

export const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const MainPageTitle = styled.h1`
  color: #ffffff;
  text-shadow: 2px 3px 3px #000000;
  margin-bottom: 44px;
`;

export const MainPageText = styled.h2`
  color: #ffffff;
  text-shadow: 2px 3px 3px #000000;
  margin-bottom: 16px;
`;

export const MainPageList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MainPageListItem = styled(ListItem)`
  &:first-child {
    margin-bottom: 16px;
  }

  @media (min-width: 768px) {
    &:first-child {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
`;

export const SpanWrapper = styled.li`
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 16px;
  }
`;

export const TextWrapper = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 24px;
`;

export const MainPageHPQuiz = styled(NavLink)`
  position: relative;
  display: flex;
  padding: 8px 16px;

  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  background: radial-gradient(
    circle,
    #ffa700 6%,
    #fb7e00 48%,
    #c50000 84%,
    #890000 94%,
    #5c0000 100%
  );
  box-shadow: 9px 8px 15px 0px rgba(0, 0, 0, 0.64);
  text-decoration: none;
  border: transparent;
  outline: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000000;

  &:active {
    box-shadow: inset 0px 1px 8px 0px rgba(48, 48, 48, 1);
  }
  &:hover {
    background: radial-gradient(
      circle,
      rgba(255, 167, 0, 0.9) 6%,
      rgba(251, 126, 0, 0.7) 48%,
      rgba(197, 0, 0, 0.6) 84%,
      rgba(137, 0, 0, 0.5) 94%,
      rgba(92, 0, 0, 0.4) 100%
    );
  }
`;

export const MainPageSMQuiz = styled(MainPageHPQuiz)`
  margin-right: 0;
  background: radial-gradient(circle, #66e0ff, #00ccff, #0099ff, #0059ff);
  &:hover {
    background: radial-gradient(circle, #4db8e8, #0099cc, #0077b2, #004080);
  }
`;

export const ButtonHPIcon = styled.svg`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 16px;
  top: 10px;
  fill: #fff;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    right: 20px;
    top: 34px;
  }
`;

export const ButtonSMIcon = styled(ButtonHPIcon)`
  width: 44px;
  height: 44px;
  right: 20px;
  top: 4px;
  fill: #fff;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    right: 16px;
    top: 24px;
  }
`;
