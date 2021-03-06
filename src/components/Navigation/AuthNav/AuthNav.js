import { NavLink } from 'react-router-dom';
import s from '../HomeNav/HomeNav.module.css'

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
      >
        LogIn
      </NavLink>
    </div>
  );
}