import { ListItem } from "components/Answers/Answers.styled";
import { Main } from "components/App/App.styled";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainPageWrapper = styled(Main)``;

export const MainPageList = styled.ul`

@media (min-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;

}

`;

export const MainPageListItem = styled(ListItem)`
&:first-child{
    margin-bottom: 16px;
}

@media (min-width: 768px){
    &:first-child{
        margin-bottom: 0;
        margin-right:16px;
    }
}
`;

export const SpanWrapper = styled.li`
text-align: center;
margin-bottom:16px;

@media (min-width: 768px){
    margin-bottom:0;
    margin-right:16px;
}
`;

export const TextWrapper = styled.span`
color: #FFF;
font-weight:700;
`;

export const MainPageHPQuiz = styled(NavLink)`
display:flex;
padding: 8px 16px;

width: 100%;
height: 100%;
align-items: center;
justify-content:center;
font-size:16px;
color: #FFF;
background-color: orange;
text-decoration:none;
border: transparent;
border-radius: 8px;
cursor: pointer;
text-shadow: 1px 1px 1px #000000;

&:active{
    box-shadow: inset 0px 1px 8px 0px rgba(48,48,48,1);
}
`;

export const MainPageSMQuiz = styled(MainPageHPQuiz)`
margin-right: 0;`
;



// export const ButtonList = styled.ul`
// display: flex;
// // flex-direction: column;
// align-items: center;
// justify-content: center;
// margin-bottom: 24px;
// flex-wrap: wrap;
// gap: 8px;


// `;

// export const ListItem = styled.li`
// width: 296px;
// height: 64px;

// @media (min-width: 768px){
//     flex-basis: calc((100% - 8px) / 2);
//     max-width: 380px;
//     height: 100px;

// }

// `;