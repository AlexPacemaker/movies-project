// Header component

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.navMaine}>
      <nav className='#1e88e5 blue darken-1'>
        <div className='nav-wrapper'>
          <div className={styles.refs}>
            <a href='#s' className={styles.brandLogo}>
              React Movie DB
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='https://github.com/AlexPacemaker' target='blank'>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://alexpacemaker.github.io/portfolio/'
                  target='blank'
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a href='https://github.com/AlexPacemaker/movies-project'>
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
