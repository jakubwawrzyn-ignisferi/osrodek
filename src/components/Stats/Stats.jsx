// src/components/Stats/Stats.jsx
// Pas z najważniejszymi liczbami, nachodzący na dół sekcji Hero.
import React from 'react';
import styles from './Stats.module.css';

export default function Stats({ items = [] }) {
  return (
    <section className={styles.wrapper} aria-label="Ośrodek w liczbach">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.label} className={styles.item}>
            <span className={styles.value}>{item.value}</span>
            <span className={styles.label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
