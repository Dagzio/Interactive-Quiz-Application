import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import Quiz from 'components/Quiz/Quiz';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SettingsPage from 'pages/SettingsPage/SettingsPage';
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectIsLoading } from 'redux/selectors';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Suspense>
              <MainPage />
            </Suspense>
          }
        />

        <Route
          path="register"
          element={
            <Suspense>
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense>
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            </Suspense>
          }
        />

        <Route
          path="quiz/:quizType"
          element={
            <Suspense>
              <Quiz />
            </Suspense>
          }
        />

        <Route
          path="settings"
          element={
            <Suspense>
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
