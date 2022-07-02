import { useDispatch, useSelector } from 'react-redux';
import {authOperations } from '../../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Добро пожаловать, {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        LogOut
      </button>
    </div>
  );
}