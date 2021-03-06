import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //                    e.target.name / e.target.value
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));

     //очищаем форму
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Page registration</h1>
      
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input type="text" name="name"  value={name} onChange={handleChange}/>
        </label>

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

        <button type="submit" className={s.btn}>Register</button>
      </form>
    </div>

  );
}