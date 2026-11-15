// src/components/Footer/Footer.jsx
// Stopka strony: nazwa ośrodka, dane kontaktowe placówek i linki do informacji prawnych.
import React from 'react';
import { organization, units, telHref } from '../../data/site.js';
import styles from './Footer.module.css';

// legalLinks - strony prawne do pokazania (availableLegalPages() z src/data/site.js,
// wyliczane w Layout.astro, bo wymagają listy stron z WordPressa).

const otherLinks = [
  { label: 'Dokumenty', href: '/dokumenty/' },
  { label: 'O nas', href: '/o-nas/' },
  { label: 'Aktualności', href: '/aktualnosci/' },
  { label: 'Galeria', href: '/galeria/' },
  { label: 'Kontakt', href: '/kontakt/' },
];

export default function Footer({ legalLinks = [] }) {
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
            {organization.name}{' '}
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
            {legalLinks.map((page) => (
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
