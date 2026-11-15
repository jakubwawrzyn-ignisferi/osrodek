// src/components/Methods/Methods.jsx
// Strona "System pracy": metody pracy jako kafelki z ikonami i lista zajęć ("Co oferujemy").
import React from 'react';
import TileGrid from '../TileGrid/TileGrid.jsx';
import styles from './Methods.module.css';

// Kolory kafelków na zmianę: zieleń i brąz, jak w projekcie.
const colors = ['green', 'brown'];

export default function Methods({ methods = [], activities = [] }) {
  const tiles = methods.map((method, index) => ({
    label: method.title,
    icon: method.icon,
    color: colors[index % colors.length],
  }));

  return (
    <section className={styles.section} aria-labelledby="methods-title">
      <h2 id="methods-title" className={`section-title ${styles.title}`}>
        Jak pracujemy
      </h2>
      <TileGrid tiles={tiles} label="Metody pracy" maxColumns={3} />

      {activities.length > 0 && (
        <div className={styles.activities}>
          <h3 className={styles.activitiesTitle}>Co oferujemy</h3>
          <ul className={styles.chips}>
            {activities.map((activity) => (
              <li key={activity} className={styles.chip}>
                {activity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
