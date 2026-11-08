// src/components/HelpBar/HelpBar.jsx
// Pasek "Potrzebujesz pomocy?" nad stopką, na każdej stronie.
// Bezpłatne telefony pomocowe + link do standardów ochrony małoletnich.
import React from 'react';
import { helplines, telHref } from '../../data/site.js';
import styles from './HelpBar.module.css';

export default function HelpBar() {
  return (
    <aside className={styles.bar} aria-labelledby="helpbar-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 id="helpbar-title" className={styles.title}>
            Potrzebujesz pomocy lub rozmowy?
          </h2>
          <p className={styles.text}>Możesz zadzwonić bezpłatnie i anonimowo.</p>
        </div>

        <ul className={styles.phones}>
          {helplines.map((line) => (
            <li key={line.number}>
              <a href={telHref(line.number)} className={styles.phone}>
                <span className={styles.number}>{line.number}</span>
                <span className={styles.label}>{line.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="/standardy-ochrony" className={styles.cta}>
          Standardy ochrony małoletnich <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </aside>
  );
}
