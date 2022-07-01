import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css'

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
      >
        LogIn
      </NavLink>
    </div>
  );
}