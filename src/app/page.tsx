import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Works from "@/components/Works";
import HowIWork from "@/components/HowIWork";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Reveal width="100%">
        <About />
      </Reveal>
      <Reveal width="100%">
        <Services />
      </Reveal>
      <Reveal width="100%">
        <Works />
      </Reveal>
      <Reveal width="100%">
        <HowIWork />
      </Reveal>
    </main>
  );
}
