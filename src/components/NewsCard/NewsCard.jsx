// src/components/NewsCard/NewsCard.jsx
// Pojedynczy kafelek aktualności: obraz z datą, wyróżniony tytuł, krótka zajawka.
// Cały kafelek jest klikalny (link w tytule rozciągnięty na całą kartę), a czytniki
// ekranu odczytują go jako jeden link z tytułem wpisu.
import React from 'react';
import styles from './NewsCard.module.css';

export default function NewsCard({ post }) {
  const { slug, title, excerpt, date, dateLabel, cardImage } = post;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {cardImage ? (
          <img
            src={cardImage.url}
            alt={cardImage.alt}
            className={styles.image}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span>Aktualności</span>
          </div>
        )}
        <time dateTime={date} className={styles.date}>
          {dateLabel}
        </time>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>
          <a href={`/news/${slug}`} className={styles.link}>
            {title}
          </a>
        </h3>

        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

        <span className={styles.readMore} aria-hidden="true">
          Czytaj więcej <span className={styles.arrow}>&rarr;</span>
        </span>
      </div>
    </article>
  );
}
