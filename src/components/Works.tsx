import { Reveal } from './Reveal';
import styles from './Works.module.css';

export default function Works() {
  const works = [
    {
      title: "Technical SEO Audit",
      client: "ShoutMeLoud",
      description: "A comprehensive technical diagnostic and optimization project focusing on site architecture, structured data, and core web vitals.",
      highlight: "Optimization & Speed",
      linkUrl: "#",
      linkText: "Case Study"
    },
    {
      title: "E-Learning Platform",
      client: "SkillBloom",
      description: "End-to-end development of a custom WordPress learning environment equipped with specialized SEO content systems.",
      highlight: "Full Stack Growth",
      linkUrl: "#",
      linkText: "Case Study"
    },
    {
      title: "Local Search Strategy",
      client: "GMB Optimization",
      description: "Precision-engineered local SEO setup driving high-intent organic traffic through regional keyword leadership.",
      highlight: "Visibility Engine",
      linkUrl: "#",
      linkText: "Case Study"
    },
    {
      title: "Sustainable Living Blog",
      client: "Go Green With Me",
      description: "A niche digital authority project demonstrating organic audience growth through value-driven content strategy.",
      highlight: "Organic Authority",
      linkUrl: "#",
      linkText: "Case Study"
    },
    {
      title: "Editorial Blogging",
      client: "Aap Ka Bazar",
      description: "High-volume content production focusing on consumer engagement and brand authority across diverse sectors.",
      highlight: "Engagement Strategy",
      linkUrl: "https://blog.aapkabazar.co/?s=sector+8",
      linkText: "Read Blogs"
    }
  ];

  return (
    <section className={styles.works} id="works">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.miniTitle}>Portfolio</h2>
          <h3 className={styles.mainTitle}>Selected <span className="italic-serif">Case</span> Studies</h3>
        </div>
        
        <div className={styles.grid}>
          {works.map((work, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <div className={styles.workCard}>
                <div className={styles.workContent}>
                  <div className={styles.workHeader}>
                    <span className={styles.clientLabel}>{work.client}</span>
                    <h4 className={styles.workTitle}>{work.title}</h4>
                  </div>
                  <p className={styles.workDescription}>{work.description}</p>
                  <div className={styles.workFooter}>
                    <span className={styles.workHighlight}>{work.highlight}</span>
                    <a href={work.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.linkAction}>
                      {work.linkText} <span className={styles.arrow}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
