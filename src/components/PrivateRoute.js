import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// если маршрут приватный и пользователь залогинен => рендерит компонент
// в противном случае рендерит Redirect на redirectTo

export function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to={redirectTo} />}</>;
}
