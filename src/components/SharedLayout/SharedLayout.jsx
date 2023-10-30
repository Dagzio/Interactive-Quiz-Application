import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectToken } from '../../redux/selectors';
import { getCurrentUser, setToken } from '../../redux/user/userOperations';

const SharedLayout = () => {
  const stateUser = useSelector(selectUser);
  const userToken = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken && !stateUser) {
      setToken(userToken);
      dispatch(getCurrentUser());
    }
  }, [dispatch, stateUser, userToken]);

  return (<>
    <Header />
    <Container>
      
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
    </>
  );
};

export default SharedLayout;