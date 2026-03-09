import { Reveal } from './Reveal';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Content Marketing",
      description: "Crafting keyword-optimized blogs, high-converting ad copy, and strategic long-form articles that resonate with target audiences."
    },
    {
      id: "02",
      title: "Influencer Marketing",
      description: "Strategically connecting brands with the right creators to build authentic engagement and high-impact digital presence."
    },
    {
      id: "03",
      title: "Off-Page SEO",
      description: "Developing robust link-building strategies, including forum growth, link outreach, and high-authority link acquisitions."
    },
    {
      id: "04",
      title: "On-Page Excellence",
      description: "Optimizing content structure, technical tags, and internal linking models to secure top-tier search visibility."
    },
    {
      id: "05",
      title: "Keyword & Ranking",
      description: "Deep-data analysis to identify high-value opportunities and drive sustainable ranking growth in competitive markets."
    }
  ];

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.miniTitle}>Capabilities</h2>
          <h3 className={styles.mainTitle}>Strategic <span className="italic-serif">Solutions</span> for Digital <span className="italic-serif">Growth</span></h3>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Reveal key={index} width="100%" delay={index * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardId}>{service.id}</div>
                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{service.title}</h4>
                  <p className={styles.cardDescription}>{service.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
