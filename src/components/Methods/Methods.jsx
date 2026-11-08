// src/components/Methods/Methods.jsx
// Sekcja "Jak pracujemy": metody pracy (kafelki z ikonami) i zajęcia (lista "Co oferujemy").
import React from 'react';
import Icon from '../Icon/Icon.jsx';
import styles from './Methods.module.css';

export default function Methods({ methods = [], activities = [] }) {
  return (
    <section className={styles.section} aria-labelledby="methods-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className="eyebrow">Jak pracujemy</p>
          <h2 id="methods-title" className="section-title">
            Wychowanie, terapia i&nbsp;nauka w&nbsp;jednym miejscu
          </h2>
          <p className="section-lead">
            Pracujemy w oparciu o system prewencyjny św. Jana Bosko: obecność wychowawcy, zaufanie
            i wspólne życie w grupie.
          </p>
        </div>

        <ul className={styles.grid}>
          {methods.map((method) => (
            <li key={method.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={method.icon} size={26} />
              </span>
              <h3 className={styles.cardTitle}>{method.title}</h3>
            </li>
          ))}
        </ul>

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
      </div>
    </section>
  );
}
