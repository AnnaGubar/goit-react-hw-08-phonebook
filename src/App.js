import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register " element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<PhonebookPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
