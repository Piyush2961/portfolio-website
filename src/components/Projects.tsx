import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "Content Strategy for Organic Traffic",
      subtitle: "Designed & Executed Content Strategy",
      description: "Built topical authority through strategic interlinking between blog posts to drive organic traffic and engagement.",
      points: [
        "Authored SEO-optimized blogs targeting high-intent keywords.",
        "Structured content with proper keyword density and readability optimization."
      ],
      tags: ["Content Strategy", "SEO", "Copywriting"]
    },
    {
      title: "SEO-Optimized E-Learning Website",
      subtitle: "Development & SEO Management",
      description: "Developed and managed an SEO-optimized e-learning website using WordPress, ensuring mobile responsiveness and user-friendly site architecture.",
      points: [
        "Implemented on-page and technical SEO strategies including keyword research, meta tag optimization, internal linking, sitemap submission, and indexing improvements.",
        "Created and published SEO-driven blog content while tracking performance through Google Analytics and Google Search Console."
      ],
      tags: ["WordPress", "Technical SEO", "Google Analytics", "GSC"]
    }
  ];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured <span className={styles.accent}>Projects</span></h2>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardContent}>
                <span className={styles.subtitle}>{project.subtitle}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <ul className={styles.points}>
                  {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.tags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
