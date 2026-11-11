// src/components/NewsSection/NewsSection.jsx
// Siatka kafelków z aktualnościami. Na stronie głównej z tytułem i linkiem "Wszystkie aktualności",
// na stronie /news bez nich (tytuł strony jest wtedy w nagłówku Banner).
// Wpisy przychodzą już przetworzone przez src/lib/wordpress.js.
import React from 'react';
import { ArrowRight } from 'lucide-react';
import NewsCard from '../NewsCard/NewsCard.jsx';
import styles from './NewsSection.module.css';

export default function NewsSection({ posts = [], title = null, showAllLink = true }) {
  return (
    <section className={styles.section} aria-labelledby={title ? 'news-title' : undefined} aria-label={title ? undefined : 'Aktualności'}>
      {title && (
        <div className={styles.header}>
          <h2 id="news-title" className={`section-title ${styles.heading}`}>
            {title}
          </h2>
          {showAllLink && (
            <a href="/news" className="btn btn-primary">
              Wszystkie aktualności <ArrowRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      )}

      {posts.length === 0 && <p className={styles.empty}>Nie ma jeszcze żadnych aktualności.</p>}

      <div className={styles.grid}>
        {posts.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
