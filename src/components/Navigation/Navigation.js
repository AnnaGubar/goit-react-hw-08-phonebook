import { NavLink } from 'react-router-dom';
import Container from '../Container';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav>
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
        >
          Home
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
        >
          Contacts
        </NavLink>
        
      </Container>
    </nav>
  );
}

export default Navigation;