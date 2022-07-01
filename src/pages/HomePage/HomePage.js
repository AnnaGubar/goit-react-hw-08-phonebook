import s from './HomePage.module.css'

export default function HomePage() {
  return (
  <div className={s.home_page}>
    <h1 className={s.title}>This is the PhoneBook Application </h1>
    <p className={s.text}> Enjoy using </p>
    </div>
    );
  }