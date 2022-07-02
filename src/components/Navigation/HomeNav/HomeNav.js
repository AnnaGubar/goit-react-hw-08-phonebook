import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Container from '../../Container';
import s from './HomeNav.module.css';

function HomeNav() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? s['activeLink'] : s['link'])}
        >
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? s['activeLink'] : s['link']
            }
          >
            Contacts
          </NavLink>
        )}
      </Container>
    </nav>
  );
}

export default HomeNav;
