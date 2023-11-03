import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectUser, selectToken } from '../../redux/selectors';
import { getCurrentUser, setToken } from '../../redux/user/userOperations';
import { Container, Main } from './SharedLayout.styled';
import Header from '../Header/Header';

const SharedLayout = () => {
  const stateUser = useSelector(selectUser);
  const userToken = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken && !stateUser?._id) {
      setToken(userToken);
      dispatch(getCurrentUser());
    }
  }, [dispatch, stateUser, userToken]);

  return (
    <>
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
