// Header component

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.navMaine}>
      <nav className='#4db6ac teal lighten-2'>
        <div className='nav-wrapper'>
          <div className={styles.refs}>
            <a href='#s' className='brand-logo'>
              Logo
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='sass.html'>Sass</a>
              </li>
              <li>
                <a href='badges.html'>Components</a>
              </li>
              <li>
                <a href='collapsible.html'>JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
