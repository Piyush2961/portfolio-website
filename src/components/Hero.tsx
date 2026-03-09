import styles from './Hero.module.css';
import HeroVisual from './HeroVisual';

export default function Hero() {
  return (
    <section className={`grain ${styles.hero}`} id="home">
      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          <div className={styles.textContent}>
            <div className={styles.badgeWrapper}>
              <span className={styles.badge}>Meghna Saxena</span>
            </div>
            <h1 className={styles.editorialTitle}>
              Crafting <span className="italic-serif">Digital</span>, Influencer & Content <span className="italic-serif">Strategies</span> That Drive Growth
            </h1>
            <p className={styles.description}>
              Elevating brands through sophisticated content systems and high-impact digital marketing.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#about" className={styles.primaryBtn}>Explore My Work</a>
              <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
            </div>
          </div>
          <div className={styles.visualContent}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
