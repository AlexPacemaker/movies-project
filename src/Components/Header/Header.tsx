// Header component
import React from "react";
import styles from "./Header.module.scss";

const Header = (): JSX.Element => {
  //функция для бэка на главную страницу
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className={styles.navMaine}>
      <nav className='#1e88e5 blue darken-1'>
        <div className='nav-wrapper'>
          <div className={styles.refs}>
            <span onClick={handleClick} className={styles.brandLogo}>
              React Movie DB
            </span>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='https://github.com/AlexPacemaker' target='blank'>
                  GitHub
                </a>
              </li>
              <li>
                <a href='https://alexpacemaker.github.io/portfolio/' target='blank'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='https://github.com/AlexPacemaker/movies-project' target='blank'>
                  Code Source
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
