import { useSelector } from 'react-redux';
import HomeNav from '../HomeNav';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import s from './AppBar.module.css'

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  
  return (
    <header className={s.header}>
      <HomeNav />
       {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
  );
}