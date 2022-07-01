// import { useDispatch, useSelector } from 'react-redux';
// import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UserMenu.module.css'

export default function UserMenu() {
  // const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img src={defaultAvatar} alt="" width="32" className={s.avatar} />
      {/* <span style={styles.name}>Добро пожаловать, {name}</span> */}
      <span className={s.name}>Welcome, ---- </span>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}> */}
      <button type="button" onClick={(e) => console.log(e)} className={s.btn}>
        LogOut
      </button>
    </div>
  );
}