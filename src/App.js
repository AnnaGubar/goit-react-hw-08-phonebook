import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {PublicRoute} from './components/PublicRoute'
import {PrivateRoute} from './components/PrivateRoute'

import AppBar from './components/Navigation/AppBar';
import { authOperations } from './redux/auth';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));

function App() {
  const dispatch = useDispatch();

  // статус pending
  const isFetchingCurrentUser = useSelector(state => state.auth.isFetchingCurrentUser);
  // console.log("⭐ ~ getIsFetchingCurrentUser", isFetchingCurrentUser)

  // рефреш токена
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    // рендерим только когда статус pending = false (то есть данные получены и статус fullfilled)
    !isFetchingCurrentUser && (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {/* в любом случае рендерится HomePage */}
          <Route path="/" element={<PublicRoute><HomePage /></PublicRoute>}/>

          {/* если залогинен => PhonebookPage, если нет => редирект на /login */}
          <Route path="contacts" element={<PrivateRoute redirectTo="/login"><PhonebookPage /></PrivateRoute>}/>

           {/* если залогинен => редирект на /contacts, если нет => LoginPage */}
          <Route path="login" element={<PublicRoute redirectTo="/contacts" restricted><LoginPage /></PublicRoute>}/>

           {/*  в любом случае рендерится RegisterPage */}
          <Route path="register" element={<PublicRoute restricted><RegisterPage /></PublicRoute>}/>

        </Routes>
      </Suspense>
    </>
  ));
}

export default App;
