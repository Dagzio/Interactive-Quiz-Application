import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

const PrivateRoute = ({ children }) => {
  const userIsLoggedIn = useSelector(selectToken);
  const location = useLocation();

  if (!userIsLoggedIn) {
    return <Navigate to="/login" state={location} />;
  }

  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default PrivateRoute;
