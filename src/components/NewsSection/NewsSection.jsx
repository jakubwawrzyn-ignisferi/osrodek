// src/components/NewsSection/NewsSection.jsx
// Siatka kafelków z aktualnościami. Używana na stronie głównej (3 najnowsze wpisy)
// i na stronie /news (wszystkie wpisy, bez przycisku "Zobacz wszystkie").
// Wpisy przychodzą już przetworzone przez src/lib/wordpress.js.
import React from 'react';
import styles from './NewsSection.module.css';

export default function NewsSection({ posts = [], showAllLink = true }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Aktualności</h2>

        {posts.length === 0 && (
          <p className={styles.empty}>Nie ma jeszcze żadnych aktualności.</p>
        )}

        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              {/* Opcjonalny obrazek wyróżniający */}
              {post.image && (
                <img src={post.image.url} alt={post.image.alt} className={styles.image} />
              )}

              <div className={styles.body}>
                <h3 className={styles.title}>{post.title}</h3>

                {/* Zajawka z WordPressa */}
                <div
                  className={styles.excerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerptHtml }}
                />

                <a href={`/news/${post.slug}`} className={styles.readMore}>
                  Czytaj więcej &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Przycisk do pełnej listy aktualności */}
        {showAllLink && (
          <div className={styles.allLinkWrapper}>
            <a href="/news" className={styles.allLink}>
              Zobacz wszystkie aktualności
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
