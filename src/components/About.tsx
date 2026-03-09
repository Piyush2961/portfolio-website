import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.titleSide}>
            <h2 className={styles.miniTitle}>Personal Journey</h2>
            <h3 className={styles.mainTitle}>
              Blending <span className="italic-serif">Analytics</span> with Creative <span className="italic-serif">Vision</span>
            </h3>
          </div>
          <div className={styles.contentSide}>
            <p className={styles.leadParagraph}>
              I am a dedicated digital marketer with professional experience in content marketing, influencer marketing, and developing effective online strategies.
            </p>
            <div className={styles.details}>
              <p>
                I bring a strong enthusiasm for understanding audience behavior and creating campaigns that are both meaningful and result-driven. I have also contributed to my company's website, handling content updates and supporting its overall digital growth.
              </p>
              <p>
                My approach is structured, analytical, and focused on delivering consistent value while continuing to expand my expertise in the digital space.
              </p>
            </div>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>8+</span>
                <span className={styles.statLabel}>Months Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>10+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
