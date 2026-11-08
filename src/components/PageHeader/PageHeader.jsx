// src/components/PageHeader/PageHeader.jsx
// Nagłówek podstron: granatowy, zaokrąglony blok z tytułem, opcjonalnym opisem i zdjęciem.
import React from 'react';
import styles from './PageHeader.module.css';

export default function PageHeader({ eyebrow, title, lead, image }) {
  return (
    <div className={styles.wrapper}>
      <header className={`${styles.header} ${image ? styles.withImage : ''}`}>
        <span className={styles.circle} aria-hidden="true" />
        <div className={styles.text}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
        </div>
        {image && (
          <div className={styles.imageWrapper}>
            <img src={image.url} alt={image.alt || ''} className={styles.image} />
          </div>
        )}
      </header>
    </div>
  );
}
