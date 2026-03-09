import styles from './Education.module.css';

export default function Education() {
  const education = [
    {
      degree: "Masters in Business Administration (MBA)",
      specialization: "Digital Marketing",
      institution: "Chandigarh University",
      period: "Expected completion: 2028 | Chandigarh, India"
    },
    {
      degree: "Bachelor of Commerce (B.COM)",
      institution: "Panjab University",
      period: "Completed: 2024 | Chandigarh, India"
    },
    {
      degree: "12th Standard",
      institution: "Government Model Senior Secondary School",
      period: "Chandigarh, India"
    }
  ];

  const awards = [
    { year: "2024", title: "Tally Certified" },
    { year: "2024", title: "Microsoft Excel 2013 Certified" },
    { year: "2025", title: "Unified Mentor Internship Excellence" }
  ];

  return (
    <section className={styles.educationSection} id="education">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <div className={styles.cardList}>
              {education.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.degree}>{item.degree}</h3>
                    {item.specialization && <span className={styles.badge}>{item.specialization}</span>}
                  </div>
                  <div className={styles.institution}>{item.institution}</div>
                  <div className={styles.period}>{item.period}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.block}>
            <h2 className={styles.sectionTitle}>Awards & <span className={styles.accent}>Certifications</span></h2>
            <div className={styles.cardList}>
              {awards.map((award, index) => (
                <div key={index} className={styles.awardCard}>
                  <div className={styles.awardYear}>{award.year}</div>
                  <div className={styles.awardTitle}>{award.title}</div>
                  <div className={styles.icon}>🏆</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
