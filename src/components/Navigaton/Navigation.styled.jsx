import { LogOut } from 'components/Header/Header.styled';
import { styled } from 'styled-components';

export const HeaderAuthButtons = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const HeaderSignUp = styled(LogOut)`
  margin-bottom: 4px;


  @media (min-width: 480px){
    margin-bottom: 0;
    margin-right: 12px;
  } 


`;

export const HeaderLogIn = styled(LogOut)``;
