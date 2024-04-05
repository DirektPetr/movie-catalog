import { NavLink } from 'react-router-dom';
import Navi from '../Navi/Navi';
import styles from './Header.module.css';
// import logo from './android-chrome-512x512.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Navi />
      </div>
    </header>
  );
};
