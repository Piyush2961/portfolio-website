"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const sections = ["about", "services", "works", "how-i-work"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          M<span className={styles.logoSerif}>S.</span>
        </Link>
        
        <button 
          className={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li>
            <Link 
              href="#about" 
              className={activeSection === "about" ? styles.activeLink : ""} 
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="#services" 
              className={activeSection === "services" ? styles.activeLink : ""} 
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="#works" 
              className={activeSection === "works" ? styles.activeLink : ""} 
              onClick={() => setMenuOpen(false)}
            >
              Selected Works
            </Link>
          </li>
          <li>
            <Link 
              href="#how-i-work" 
              className={activeSection === "how-i-work" ? styles.activeLink : ""} 
              onClick={() => setMenuOpen(false)}
            >
              How I Work
            </Link>
          </li>
          <li><a href="mailto:meghnasaxena2002@gmail.com" className={styles.hireBtn}>Connect</a></li>
        </ul>
      </div>
    </nav>
  );
}
