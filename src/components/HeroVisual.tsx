import styles from './HeroVisual.module.css';

export default function HeroVisual() {
  return (
    <div className={styles.visualContainer}>
      <div className={styles.imageWrapper}>
        <img 
          src="/images/premium_hero_abstract.png" 
          alt="Premium Silk Texture" 
          className={styles.visualImage}
        />
      </div>
      <div className={styles.floatingAccent}></div>
    </div>
  );
}
