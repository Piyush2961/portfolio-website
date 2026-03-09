import styles from './HowIWork.module.css';

export default function HowIWork() {
  const steps = [
    {
      id: "01",
      title: "Discovery & Insight",
      description: "Deeply understanding your brand goals, target audience behavior, and competitive landscape to build a solid foundation."
    },
    {
      id: "02",
      title: "Keyword Intelligence",
      description: "Leveraging data-driven research to identify high-value search opportunities that convert intent into measurable growth."
    },
    {
      id: "03",
      title: "Strategic Optimization",
      description: "Refining on-page architecture and content systems to ensure maximum technical performance and semantic relevance."
    },
    {
      id: "04",
      title: "Authority Building",
      description: "Executing precise off-page campaigns to build high-authority backlink profiles and strengthen digital reputation."
    },
    {
      id: "05",
      title: "Creator Collaboration",
      description: "Integrating influencer strategies to amplify brand reach and build authentic connections within your niche communities."
    },
    {
      id: "06",
      title: "Continuous Evolution",
      description: "Monitoring performance metrics and iterating strategies to maintain high rankings and sustainable long-term success."
    }
  ];

  return (
    <section className={styles.howIWork} id="how-i-work">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.miniTitle}>Process</h2>
          <h3 className={styles.mainTitle}>How I Drive <span className="italic-serif">Results</span></h3>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemId}>{step.id}</span>
                <h4 className={styles.itemTitle}>{step.title}</h4>
              </div>
              <div className={styles.itemContent}>
                <p className={styles.itemDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
