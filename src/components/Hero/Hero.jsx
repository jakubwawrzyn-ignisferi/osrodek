// src/components/Hero/Hero.jsx
// Pierwsza sekcja strony głównej: duże zdjęcie z zaokrąglonymi rogami, hasło i dwa przyciski.
// Gdy nie ma zdjęcia, wyświetla się granatowe tło z kołami w barwach logo.
import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ eyebrow, title, text, image }) {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.hero} ${image ? styles.withImage : ''}`}>
        {image && <img src={image.url} alt={image.alt} className={styles.image} fetchpriority="high" />}

        {/* Dekoracyjne koła w barwach logo */}
        <span className={styles.circleLarge} aria-hidden="true" />
        <span className={styles.circleSmall} aria-hidden="true" />

        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {text && <p className={styles.text}>{text}</p>}
          <div className={styles.actions}>
            <a href="#nabor" className="btn btn-primary">
              Nabór <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="/about-us" className="btn btn-outline-light">
              Poznaj nas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
