// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { authOperations } from '../../redux/auth';
import s from './RegisterPage.module.css'



export default function RegisterPage() {

  
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
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
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div>
      <h1 className={s.title}>Page registration</h1>

      {/* <form onSubmit={handleSubmit} style={styles.form} autoComplete="off"> */}
      <form className={s.form} autoComplete="off">
        <label className={s.label}>
          Имя
          {/* <input type="text" name="name" value={name} onChange={handleChange} /> */}
          <input type="text" name="name" />
        </label>

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

        <button type="submit" className={s.btn}>Зарегистрироваться</button>
      </form>
    </div>

  );
}