import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Main } from './SharedLayout.styled';
import Header from '../Header/Header'
import { useSelector } from 'react-redux';
import { selectUser, selectToken } from '../../redux/selectors';
import {setToken } from '../../redux/user/userOperations';

const SharedLayout = () => {
  const stateUser = useSelector(selectUser);
  const userToken = useSelector(selectToken);


  useEffect(() => {
    if (userToken && !stateUser?._id) {
      setToken(userToken);

    }
  }, [ stateUser, userToken]);

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