// src/components/Units/Units.jsx
// Strona "O nas": karty placówek wchodzących w skład Domu Młodzieżowego.
import React from 'react';
import Icon from '../Icon/Icon.jsx';
import styles from './Units.module.css';

const colors = ['green', 'brown', 'navy', 'bordo'];

export default function Units({ units = [] }) {
  return (
    <section className={styles.section} aria-labelledby="units-title">
      <h2 id="units-title" className={`section-title ${styles.title}`}>
        Nasze placówki
      </h2>

      <ul className={styles.grid}>
        {units.map((unit, index) => (
          <li key={unit.name} className={styles.card} style={{ '--tile': `var(--c-${colors[index % colors.length]})` }}>
            <span className={styles.icon}>
              <Icon name={unit.icon} size={28} />
            </span>
            <span className={styles.tag}>{unit.short}</span>
            <h3 className={styles.name}>{unit.name}</h3>
            <p className={styles.text}>{unit.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
