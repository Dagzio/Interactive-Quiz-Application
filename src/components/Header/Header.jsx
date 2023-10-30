import Navigation from '../Navigaton/Navigation'
import {
  CurrentUser,
  Headerbar,
  HeaderLink,
  LogOut,
  UserName,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { userLogOut } from 'redux/user/userOperations';


const Header = () => {
    const stateIsLoggedIn = useSelector(selectIsLoggedIn);
    const stateCurrentUser = useSelector(selectUser);
    const dispatch = useDispatch();
  
    return (
      <Headerbar>
        <nav>
          <HeaderLink to={'/'}>Change Quiz</HeaderLink>
  
          <HeaderLink to={'settings'}>Settings</HeaderLink>
        </nav>
        {stateIsLoggedIn ? (
          <CurrentUser>
            <UserName>Hello, {stateCurrentUser?.name}</UserName>
            <LogOut type="button" onClick={() => dispatch(userLogOut())}>
              Log Out
            </LogOut>
          </CurrentUser>
        ) : (
          <Navigation />
        )}
      </Headerbar>
    );
  };

export default Header;