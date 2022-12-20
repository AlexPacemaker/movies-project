//Footer

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className='page-footer #4db6ac teal lighten-2'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='black-text'>Footer Content</h5>
              <p className='black-text text-lighten-4'>You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <div className={styles.refs}>
                <h5 className='black-text'>Links</h5>
                <ul>
                  <li>
                    <a className='black-text' href='#!'>
                      Link 1
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='black-text footer-copyright'>
          <div className='container'>
            PaceMaker © {new Date().getFullYear()}
            <a className='black-text text-lighten-4 right' href='#!'>
              More Links
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
