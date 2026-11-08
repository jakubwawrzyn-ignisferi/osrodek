// src/components/NewsSection/NewsSection.jsx
// Siatka kafelków z aktualnościami. Używana na stronie głównej (3 najnowsze wpisy)
// i na stronie /news (wszystkie wpisy, bez linku "Zobacz wszystkie", tytuł jako <h1>).
// Wpisy przychodzą już przetworzone przez src/lib/wordpress.js.
import React from 'react';
import { ArrowRight } from 'lucide-react';
import NewsCard from '../NewsCard/NewsCard.jsx';
import styles from './NewsSection.module.css';

// backgroundImage: opcjonalne zdjęcie w tle sekcji ({ url, alt }), np. z pola ACF.
// isPageTitle: true na stronie /news - nagłówek "Aktualności" jest wtedy tytułem strony (<h1>).
export default function NewsSection({
  posts = [],
  showAllLink = true,
  backgroundImage = null,
  isPageTitle = false,
}) {
  // Adres zdjęcia jest znany dopiero po pobraniu z WP, więc przekazujemy go do CSS
  // przez zmienną --section-bg. Cały wygląd tła jest w NewsSection.module.css.
  const sectionProps = backgroundImage
    ? {
        className: `${styles.section} ${styles.withBackground}`,
        style: { '--section-bg': `url("${backgroundImage.url}")` },
      }
    : { className: styles.section };

  const Heading = isPageTitle ? 'h1' : 'h2';

  return (
    <section {...sectionProps} aria-labelledby="news-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={`eyebrow ${styles.eyebrow}`}>Z życia ośrodka</p>
            <Heading id="news-title" className={`section-title ${styles.heading}`}>
              Aktualności
            </Heading>
          </div>

          {showAllLink && (
            <a href="/news" className={`btn ${backgroundImage ? 'btn-light' : 'btn-dark'}`}>
              Wszystkie aktualności <ArrowRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>

        {posts.length === 0 && (
          <p className={styles.empty}>Nie ma jeszcze żadnych aktualności.</p>
        )}

        <div className={styles.grid}>
          {posts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
