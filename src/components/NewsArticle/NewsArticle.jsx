// src/components/NewsArticle/NewsArticle.jsx
// Treść pojedynczej aktualności (strona /aktualnosci/[slug]/): biała karta z tytułem, datą i treścią z WP.
// Obrazek wyróżniający wpisu jest zdjęciem w nagłówku (Banner) nad kartą.
import React from 'react';
import styles from './NewsArticle.module.css';

export default function NewsArticle({ title, date, dateIso, contentHtml }) {
  return (
    <article className={`content-card ${styles.article}`}>
      <a href="/aktualnosci/" className={styles.backLink}>
        &larr; Wszystkie aktualności
      </a>

      <h1 className={styles.title}>{title}</h1>
      <time dateTime={dateIso} className={styles.date}>
        {date}
      </time>

      {/* Treść wpisu z WordPressa (wygląd w src/styles/wp-content.css) */}
      <div className={`wp-content ${styles.content}`} dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
