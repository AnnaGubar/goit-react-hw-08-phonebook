import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// если маршрут ограниченный и юзер залогинен => рендерит редирект на redirectTo
// в противном случае рендерит компонент

//* restricted - необязательный булевой пропс
//* если restricted не задан -> добавляется со значением false, если задан -> true

export function PublicRoute({ children, restricted = false, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
}