import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerlogo}>
 
        <h1>LOGO</h1>
      </div>
      <div className={styles.footercontact}>
        <p>Contact us: info@ninja-list.com</p>
        <div className={styles.verticalline}></div>
        <p>123 Main Street, Anytown USA</p>
      </div>
      <div className={styles.footercopyright}>
        &copy; 2023 Ninja List
      </div>
    </footer>
  );
}

export default Footer;
