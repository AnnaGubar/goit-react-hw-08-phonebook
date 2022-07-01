import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import s from './AppBar.module.css'

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <header className={s.header}>
      <Navigation />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
  );
}