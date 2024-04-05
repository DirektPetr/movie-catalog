// rafce - Создание компонента

import { NavLink } from 'react-router-dom';
import styles from '../Navi/Navi.module.css';

const Navi = () => {
  return (
    <>
      <h1 className={styles.title}>
        {/* <img src={logo} alt="" className={styles.logo} /> */}
        <NavLink to=".">Кино каталог</NavLink>
      </h1>
      <ul className={styles.menu__list}>
        <li className={styles.menu__item}>
          <NavLink to="about">About</NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="contacts">Contacts</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navi;
