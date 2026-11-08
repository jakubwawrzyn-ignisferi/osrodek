// src/components/NewsArticle/NewsArticle.jsx
// Treść pojedynczej aktualności (strona /news/[slug]).
import React from 'react';
import styles from './NewsArticle.module.css';

export default function NewsArticle({ title, date, dateIso, image, contentHtml }) {
  return (
    <article className={styles.article}>
      <a href="/news" className={styles.backLink}>
        &larr; Wszystkie aktualności
      </a>

      <h1 className={styles.title}>{title}</h1>
      <time dateTime={dateIso} className={styles.date}>
        {date}
      </time>

      {image && <img src={image.url} alt={image.alt} className={styles.image} />}

      {/* Treść wpisu z WordPressa */}
      <div
        className={image ? styles.content : `${styles.content} ${styles.contentNoImage}`}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
