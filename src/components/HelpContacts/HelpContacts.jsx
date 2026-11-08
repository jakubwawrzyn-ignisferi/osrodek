// src/components/HelpContacts/HelpContacts.jsx
// Ramka "Gdzie szukać pomocy" na podstronie standardów ochrony małoletnich:
// telefony pomocowe i kontakt do placówek.
import React from 'react';
import { helplines, units, telHref } from '../../data/site.js';
import styles from './HelpContacts.module.css';

export default function HelpContacts() {
  return (
    <section className={styles.box} aria-labelledby="help-contacts-title">
      <h2 id="help-contacts-title" className={styles.title}>
        Gdzie szukać pomocy
      </h2>

      <div className={styles.grid}>
        <div>
          <h3 className={styles.subtitle}>Bezpłatne telefony zaufania</h3>
          <ul className={styles.list}>
            {helplines.map((line) => (
              <li key={line.number}>
                <a href={telHref(line.number)} className={styles.number}>
                  {line.number}
                </a>
                <span className={styles.label}>{line.label}</span>
              </li>
            ))}
            <li>
              <a href="tel:112" className={styles.number}>
                112
              </a>
              <span className={styles.label}>Numer alarmowy - w sytuacji zagrożenia życia lub zdrowia</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.subtitle}>Kontakt z ośrodkiem</h3>
          <ul className={styles.list}>
            {units.map((unit) => (
              <li key={unit.short}>
                <a href={telHref(unit.phones[0].number)} className={styles.number}>
                  {unit.phones[0].number}
                </a>
                <span className={styles.label}>
                  {unit.name} ({unit.short})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
