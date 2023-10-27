import Quiz from 'components/Quiz/Quiz';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('../../pages/MainPage/MainPage'))

const App = () => {
  return (
    <Routes>
      <Route path='/' element={
      <Suspense>
        <MainPage/>
        </Suspense>}/>

        {/* <Route
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
        /> */}

      <Route path='quiz/:quizType' element={
       <Suspense>
        <Quiz/>
       </Suspense> }/>
      </Routes>
  );
};
export default App;