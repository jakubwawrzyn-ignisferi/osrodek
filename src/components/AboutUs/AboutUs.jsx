// src/components/AboutUs/AboutUs.jsx
// Strona "Nasza misja": baner (tytuł + obrazek wyróżniający) i treść z WordPressa.
import React from 'react';
import styles from './AboutUs.module.css';

export default function AboutUs({ title, bannerUrl, contentHtml }) {
  return (
    <div>
      {/* Baner główny */}
      <section className={styles.banner}>
        <div className={styles.bannerInner}>
          {/* Lewa strona: tekst i nagłówek */}
          <div className={styles.bannerText}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.lead}>
              Tutaj znajduje się tekst baneru wyświetlany po lewej stronie, z zachowaniem odpowiednich marginesów.
            </p>
          </div>

          {/* Prawa strona: obrazek */}
          {bannerUrl && (
            <div className={styles.bannerImageWrapper}>
              <img src={bannerUrl} alt={title} className={styles.bannerImage} />
            </div>
          )}
        </div>
      </section>

      {/* Dalsza treść strony (z WordPressa) */}
      <section className={styles.contentSection}>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </section>
    </div>
  );
}
