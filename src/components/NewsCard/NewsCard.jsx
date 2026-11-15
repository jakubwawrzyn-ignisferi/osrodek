// src/components/NewsCard/NewsCard.jsx
// Kafelek aktualności w stylu pozostałych kafelków: zdjęcie, kwadrat z ikoną gazety, tytuł,
// zajawka i okrągła strzałka. Cały kafelek jest klikalny (link w tytule rozciągnięty na całą
// kartę), a czytniki ekranu odczytują go jako jeden link z tytułem wpisu.
import React from 'react';
import { ChevronRight, Newspaper } from 'lucide-react';
import styles from './NewsCard.module.css';

export default function NewsCard({ post }) {
  const { slug, title, excerpt, date, dateLabel, cardImage } = post;

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {cardImage ? (
          <img src={cardImage.url} alt={cardImage.alt} className={styles.image} loading="lazy" decoding="async" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <Newspaper size={56} strokeWidth={1.25} />
          </div>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.icon} aria-hidden="true">
          <Newspaper size={26} strokeWidth={1.75} />
        </span>
        <div className={styles.text}>
          <time dateTime={date} className={styles.date}>
            {dateLabel}
          </time>
          <h3 className={styles.title}>
            <a href={`/aktualnosci/${slug}/`} className={styles.link}>
              {title}
            </a>
          </h3>
          {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        </div>
        <span className={styles.chevron} aria-hidden="true">
          <ChevronRight size={18} strokeWidth={2.5} />
        </span>
      </div>
    </article>
  );
}
