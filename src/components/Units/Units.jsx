// src/components/Units/Units.jsx
// Sekcja "Nasze placówki": karty MOS, MOW i szkół.
import React from 'react';
import Icon from '../Icon/Icon.jsx';
import styles from './Units.module.css';

export default function Units({ units = [] }) {
  return (
    <section id="placowki" className={styles.section} aria-labelledby="units-title">
      <div className={styles.inner}>
        <p className="eyebrow">Nasze placówki</p>
        <h2 id="units-title" className="section-title">
          Salezjański Dom Młodzieżowy w&nbsp;Różanymstoku
        </h2>
        <p className="section-lead">
          W jednym miejscu działają dwa ośrodki wychowawcze, szkoły i bursa.
        </p>

        <ul className={styles.grid}>
          {units.map((unit) => (
            <li key={unit.name} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={unit.icon} size={28} />
              </span>
              <span className={styles.tag}>{unit.short}</span>
              <h3 className={styles.name}>{unit.name}</h3>
              <p className={styles.text}>{unit.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
