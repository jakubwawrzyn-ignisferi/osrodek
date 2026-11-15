// src/components/Banner/Banner.jsx
// Nagłówek podstrony: szeroki pas ze zdjęciem, a na środku tytuł na białej plamie
// "pociągniętej pędzlem" (postrzępione brzegi daje filtr #brush-edge z Layout.astro).
//
// titleTop    - pierwsza linia tytułu (zielona)
// titleBottom - druga linia (brązowa), opcjonalna
// words       - hasła pod tytułem, rozdzielone kropkami
// note        - odręczne hasło w prawym rogu (tylko na szerokich ekranach)
// image       - zdjęcie w tle ({ url }); bez niego jasne tło zastępcze
// as          - znacznik tytułu; "p", gdy tytułem strony (<h1>) jest coś innego, np. tytuł wpisu
import React from 'react';
import styles from './Banner.module.css';

export default function Banner({ titleTop, titleBottom, words = [], note, image = null, as: Title = 'h1' }) {
  return (
    <header
      className={`${styles.banner} ${image ? styles.withImage : ''}`}
      style={image ? { '--banner-image': `url("${image.url}")` } : undefined}
    >
      <div className={styles.plate}>
        <Title className={styles.title}>
          <span className={styles.top}>{titleTop}</span>
          {titleBottom && <span className={styles.bottom}>{titleBottom}</span>}
        </Title>
        {words.length > 0 && (
          <p className={styles.words}>
            {words.map((word, index) => (
              <React.Fragment key={word}>
                {index > 0 && <span aria-hidden="true"> • </span>}
                {word}
              </React.Fragment>
            ))}
          </p>
        )}
      </div>

      {note && (
        <p className={`script ${styles.note}`}>
          {note}
          <svg className={styles.heart} viewBox="0 0 24 22" aria-hidden="true">
            <path d="M12 20.5C6 16 2 12.4 2 7.9 2 4.9 4.3 2.5 7.2 2.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 2.9 0 5.2 2.4 5.2 5.4 0 4.5-4 8.1-10 12.6z" />
          </svg>
        </p>
      )}
    </header>
  );
}
