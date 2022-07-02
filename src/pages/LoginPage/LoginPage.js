import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './LoginPage.module.css'

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 //                     e.target.name / e.target.value
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    //отправляем введенные данные в бекенд
    dispatch(authOperations.logIn({ email, password }));

    //очищаем форму
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1  className={s.title}>Page LogIn</h1>

      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit"  className={s.btn}>LogIn</button>
      </form>
    </div>
  );
}