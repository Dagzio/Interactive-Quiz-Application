import { MainPageText } from "pages/MainPage/MainPage.styled";
import styled from "styled-components";


export const UserScoreWrapper = styled.div`
text-align:center;
margin-bottom: 24px;
`;

export const UserScoreTitle = styled(MainPageText)``;

export const UserScoreText = styled.p`

color: #ffffff;
  text-shadow: 2px 3px 3px #000000;

font-size: 24px;

&:not(:last-child){
    margin-bottom: 16px;
}
`;