import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      company: "AAP KA BAZAR",
      role: "Digital Marketing Executive",
      period: "June 2025 – present | Delhi, Remote",
      highlights: [
        "Performance Impact: Successfully improved website Keyword Ranking by 80% through targeted on-page optimizations and high-quality content strategies.",
        "Off-Page SEO: Executed daily submissions including Web 2.0, infographics, social bookmarking, classifieds, and forum participation to build high-quality backlinks, Business Listing, Back linking.",
        "Content Strategy: Authored blogs and articles for the company website to drive organic traffic and enhance brand visibility.",
        "On-Page SEO: Optimized blog content using strategic keyword placement, internal linking, meta tags, header structuring (H1–H3), and URL optimization to improve crawlability, user engagement, and search engine rankings."
      ]
    },
    {
      company: "UNIFIED MENTOR",
      role: "Digital Marketing Intern",
      period: "April 2025 – June 2025 | Gurgaon, Hybrid",
      highlights: [
        "SEO & Auditing: Conducted technical SEO audits using Google Search Console; identified and fixed broken links, speed issues, and mobile-friendliness errors.",
        "Web Development: Designed an e-learning website on WordPress, optimizing layout, menus, and mobile responsiveness for better User Experience (UX).",
        "Paid Campaigns: Managed Facebook Ad campaigns via Meta Ads Manager; oversaw audience targeting, budgeting, and performance tracking.",
        "Local SEO: Created and optimized a Google My Business (GMB) profile, ensuring NAP consistency and utilizing Insights to track local search performance."
      ]
    }
  ];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My <span className={styles.accent}>Experience</span></h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3>{exp.role}</h3>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <div className={styles.period}>{exp.period}</div>
                <ul className={styles.highlights}>
                  {exp.highlights.map((highlight, idx) => {
                    const [boldStart, rest] = highlight.split(': ');
                    return (
                      <li key={idx}>
                        {rest ? (
                          <>
                            <strong>{boldStart}:</strong> {rest}
                          </>
                        ) : (
                          highlight
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
