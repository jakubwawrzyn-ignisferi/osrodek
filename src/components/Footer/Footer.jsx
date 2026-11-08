// src/components/Footer/Footer.jsx
// Stopka strony: nazwa ośrodka, dane kontaktowe placówek i linki do informacji prawnych.
import React from 'react';
import { organization, units, legalPages, telHref } from '../../data/site.js';
import styles from './Footer.module.css';

const otherLinks = [
  { label: 'O nas', href: '/about-us' },
  { label: 'Aktualności', href: '/news' },
  { label: 'Kontakt', href: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Kolumna 1: nazwa i adres */}
        <div className={styles.brand}>
          <span className={styles.logoTile}>
            <img src="/logo.svg" alt="" width="48" height="51" />
          </span>
          <p className={styles.name}>
            {organization.name}
            <span className={styles.patron}>{organization.patron}</span>
          </p>
          <address className={styles.address}>
            {organization.address.street}
            <br />
            {organization.address.city}
          </address>
        </div>

        {/* Kolumna 2 i 3: placówki */}
        {units.map((unit) => (
          <section key={unit.short} className={styles.column} aria-label={unit.name}>
            <h2 className={styles.heading}>{unit.name}</h2>
            <ul className={styles.list}>
              {unit.phones.slice(0, 1).map((phone) => (
                <li key={phone.number}>
                  {phone.label}:{' '}
                  <a href={telHref(phone.number)} className={styles.link}>
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${unit.email}`} className={styles.link}>
                  {unit.email}
                </a>
              </li>
              <li>
                <a href={unit.facebook} className={styles.link} target="_blank" rel="noopener noreferrer">
                  Facebook {unit.short}
                  <span className={styles.srOnly}> (otwiera się w nowej karcie)</span>
                </a>
              </li>
            </ul>
          </section>
        ))}

        {/* Kolumna 4: informacje */}
        <nav className={styles.column} aria-label="Informacje">
          <h2 className={styles.heading}>Informacje</h2>
          <ul className={styles.list}>
            {legalPages.map((page) => (
              <li key={page.href}>
                <a href={page.href} className={styles.link}>
                  {page.label}
                </a>
              </li>
            ))}
            {otherLinks.map((page) => (
              <li key={page.href}>
                <a href={page.href} className={styles.link}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          &copy; {year} {organization.name} {organization.patron}
        </p>
      </div>
    </footer>
  );
}
