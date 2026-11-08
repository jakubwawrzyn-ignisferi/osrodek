// src/components/Admission/Admission.jsx
// Sekcja "Nabór": trzy kroki przyjęcia i kontakt (granatowy blok z kołami w barwach logo).
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Icon from '../Icon/Icon.jsx';
import { units, telHref } from '../../data/site.js';
import styles from './Admission.module.css';

// Nabór dotyczy Młodzieżowego Ośrodka Socjoterapii.
const mos = units[0];

export default function Admission({ title, text, steps = [] }) {
  return (
    <section id="nabor" className={styles.wrapper} aria-labelledby="admission-title">
      <div className={styles.box}>
        <span className={styles.circle} aria-hidden="true" />

        <div className={styles.intro}>
          <p className={styles.eyebrow}>Nabór</p>
          <h2 id="admission-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <a href={telHref(mos.phones[0].number)} className="btn btn-primary">
              <Phone size={18} aria-hidden="true" /> {mos.phones[0].number}
            </a>
            <a href={`mailto:${mos.email}`} className="btn btn-outline-light">
              <Mail size={18} aria-hidden="true" /> Napisz do nas
            </a>
          </div>
        </div>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number}>{index + 1}</span>
              <div>
                <h3 className={styles.stepTitle}>
                  <Icon name={step.icon} size={20} className={styles.stepIcon} />
                  {step.title}
                </h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
