// src/components/HomeSplit/HomeSplit.jsx
// Strona główna: dwie połowy (szkoła branżowa w ciepłych brązach, szkoła podstawowa w zieleni)
// z kafelkami-linkami, a pośrodku logo z hasłem.
// Tło połówek to sam gradient (bez zdjęć).
// halves: dane z src/data/sections.js uzupełnione o `href` (link w tytule, gdy szkoła ma swoją
// stronę w WP) i kafelki z adresami i zdjęciami.
import React from 'react';
import TileRow from '../TileRow/TileRow.jsx';
import styles from './HomeSplit.module.css';

function Half({ half }) {
  const titleId = `half-${half.slug}`;

  return (
    <section className={`${styles.half} ${styles[half.theme]}`} aria-labelledby={titleId}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{half.eyebrow}</p>
        <h2 id={titleId} className={styles.title}>
          {half.href ? <a href={half.href}>{half.title}</a> : half.title}
        </h2>
        <p className={styles.lead}>
          {half.lead.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && (half.lead.length > 2 ? <span aria-hidden="true"> • </span> : <br />)}
              {item}
            </React.Fragment>
          ))}
        </p>
      </div>

      <ul className={styles.rows}>
        {half.tiles.map((tile) => (
          <li key={tile.label}>
            <TileRow {...tile} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HomeSplit({ halves = [], slogan }) {
  const [left, right] = halves;

  return (
    <div className={styles.split}>
      <h1 className="sr-only">Salezjański Dom Młodzieżowy w Różanymstoku</h1>
      <Half half={left} />

      <div className={styles.center}>
        <span className={styles.logo}>
          <img src="/logo.svg" alt="" width="84" height="90" />
        </span>
        <p className={styles.slogan}>{slogan}</p>
        <span className={styles.sun} aria-hidden="true" />
      </div>

      <Half half={right} />
    </div>
  );
}
