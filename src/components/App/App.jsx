import Quiz from 'components/Quiz/Quiz';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));

const App = () => {
  return (
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
              <RegisterPage />
            </Suspense>
          }
        />
        <Route
          path="login"
          element={
            <Suspense>
              <LoginPage />
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
      </Route>
    </Routes>
  );
};
export default App;
