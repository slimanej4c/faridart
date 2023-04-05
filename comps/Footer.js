import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
  <footer className={styles.footer}>
  <div className={styles.footerlogo}>
  <h1>LOGO</h1>
  </div>
  <div className={styles.footercontact}>
  <div className={styles.contactinfo}>
 
  <p>Faridart@farid.com</p>
  </div>
  <div className={styles.verticalline}></div>
  <div className={styles.contactinfo}>
 
  <p>123 Main Street, CANADA</p>
  </div>
  </div>
  <div className={styles.footercopyright}>
  © 2023 FARID Aluminium
  </div>
  </footer>
  );
  }
  


export default Footer;
