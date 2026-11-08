// src/components/Navbar/Navbar.jsx
// Górna część strony: pasek z kontaktem, logo z nazwą, menu i przycisk "Nabór".
// Na wąskich ekranach menu chowa się pod przyciskiem "Menu". Komponent jest "ożywiany"
// w przeglądarce tylko na małych ekranach (client:media w Layout.astro), więc na komputerze
// nie pobiera żadnego JavaScriptu.
import React, { useState } from 'react';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { organization, units, telHref } from '../../data/site.js';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'O nas', href: '/about-us' },
  { label: 'Placówki', href: '/#placowki' },
  { label: 'Aktualności', href: '/news' },
  { label: 'Galeria', href: '/gallery' },
  { label: 'Kontakt', href: '/contact' },
];

// Główny kontakt w pasku nad menu: Młodzieżowy Ośrodek Socjoterapii.
const mainUnit = units[0];

function isActive(href, currentPath) {
  if (href === '/') return currentPath === '/';
  if (href.includes('#')) return false;
  return currentPath === href || currentPath.startsWith(`${href}/`);
}

export default function Navbar({ currentPath = '/' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Pasek z kontaktem (ukryty na telefonach) */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span className={styles.topItem}>
            <MapPin size={15} aria-hidden="true" />
            {organization.address.street}, {organization.address.city}
          </span>
          <span className={styles.topContacts}>
            <a href={telHref(mainUnit.phones[0].number)} className={styles.topItem}>
              <Phone size={15} aria-hidden="true" />
              {mainUnit.phones[0].number}
            </a>
            <a href={`mailto:${mainUnit.email}`} className={styles.topItem}>
              <Mail size={15} aria-hidden="true" />
              {mainUnit.email}
            </a>
          </span>
        </div>
      </div>

      <div className={styles.main}>
        <a href="/" className={styles.brand}>
          <img src="/logo.svg" alt="" width="44" height="47" className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{organization.name}</span>
            <span className={styles.brandPlace}>w Różanymstoku</span>
          </span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span className={styles.toggleLabel}>Menu</span>
        </button>

        <nav
          id="main-menu"
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Menu główne"
        >
          <ul className={styles.menu}>
            {menuItems.map((item) => {
              const active = isActive(item.href, currentPath);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`${styles.link} ${active ? styles.active : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="/#nabor" className={`btn btn-primary ${styles.cta}`} onClick={() => setOpen(false)}>
            Nabór
          </a>
        </nav>
      </div>
    </header>
  );
}
