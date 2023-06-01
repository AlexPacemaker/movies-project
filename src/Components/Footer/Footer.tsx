//Footer
import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <footer className='page-footer #1e88e5 blue darken-1'>
        <div className='container'></div>
        <div className='white-text footer-copyright'>
          <div className='container'>
            PaceMaker © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
