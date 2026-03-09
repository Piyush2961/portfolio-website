import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brand}>
            <span className={styles.logo}>M<span className={styles.logoSerif}>S.</span></span>
            <p className={styles.brandTagline}>Digital Marketing & Content Strategy Executive</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkGroup}>
              <h5 className={styles.groupTitle}>Contact</h5>
              <a href="mailto:meghnasaxena2002@gmail.com" className={styles.footerLink}>Email</a>
              <a href="tel:+918968667307" className={styles.footerLink}>+91 8968667307</a>
            </div>
            
              <a href="https://www.linkedin.com/in/meghna-saxena-0b2370266/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>LinkedIn</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h5 className={styles.groupTitle}>Location</h5>
              <span className={styles.locationText}>Mohali, Punjab, IN</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Meghna Saxena. <span className="italic-serif">All Rights Reserved.</span>
          </p>
          <div className={styles.credits}>
            Built with <span className={styles.accentText}>Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
