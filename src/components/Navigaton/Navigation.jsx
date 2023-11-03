import { useNavigate } from 'react-router-dom';
import {
  HeaderAuthButtons,
  HeaderLogIn,
  HeaderSignUp,
} from './Navigation.styled';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <HeaderAuthButtons>
      <HeaderSignUp
        type="button"
        onClick={() => {navigate('/register')}}>
        Sign Up
      </HeaderSignUp>
      <HeaderLogIn
        type="button"
        onClick={() => {navigate('/login')}}>
        Log in
      </HeaderLogIn>
    </HeaderAuthButtons>
  );
};

export default Navigation;
