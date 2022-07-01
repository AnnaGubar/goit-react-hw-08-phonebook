// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import s from './LoginPage.module.css'

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function LoginPage() {
  // const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(authOperations.logIn({ email, password }));
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div>
      <h1  className={s.title}>Page LogIn</h1>

      {/* <form onSubmit={handleSubmit} style={styles.form} autoComplete="off"> */}
      <form className={s.form} autoComplete="off">
        <label className={s.label}>
          Почта
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Пароль
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>

        <button type="submit"  className={s.btn}>Войти</button>
      </form>
    </div>
  );
}