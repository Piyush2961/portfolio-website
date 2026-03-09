import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/meghna_saxena.jpg" 
          alt="Meghna Saxena" 
          className={styles.visualImage}
        />
      </div>
      <div className={styles.floatingAccent}></div>
    </div>
  );
}
