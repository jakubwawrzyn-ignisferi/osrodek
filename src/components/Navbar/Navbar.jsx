// src/components/Navbar/Navbar.jsx
// Górna część strony: logo z nazwą i hasłem oraz menu z ikonami nad napisami.
// Na wąskich ekranach menu chowa się pod przyciskiem "Menu". Komponent jest "ożywiany"
// w przeglądarce tylko na małych ekranach (client:media w Layout.astro), więc na komputerze
// nie pobiera żadnego JavaScriptu.
import React, { useState } from 'react';
import { FileText, GraduationCap, Menu, Phone, Settings, Users, X } from 'lucide-react';
import { organization } from '../../data/site.js';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Dokumenty', href: '/dokumenty/', Icon: FileText },
  { label: 'O nas', href: '/o-nas/', Icon: Users },
  { label: 'System pracy', href: '/system-pracy/', Icon: Settings },
  { label: 'Rekrutacja', href: '/rekrutacja/', Icon: GraduationCap },
  { label: 'Kontakt', href: '/kontakt/', Icon: Phone },
];

// Adresy w menu kończą się ukośnikiem (/o-nas/). Bieżąca ścieżka może być z nim albo bez,
// więc przed porównaniem dopisujemy go.
function isActive(href, currentPath) {
  const path = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  return path.startsWith(href);
}

export default function Navbar({ currentPath = '/' }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand}>
          <img src="/logo.svg" alt="" width="52" height="56" className={styles.logo} />
          <span className={styles.brandText}>
            <span className={styles.brandName}>{organization.name}</span>
            <span className={styles.brandTagline}>
              Rozwój <span aria-hidden="true">•</span> Wsparcie <span aria-hidden="true">•</span> Możliwości
            </span>
          </span>
        </a>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">Menu</span>
        </button>

        <nav id="main-menu" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Menu główne">
          <ul className={styles.menu}>
            {menuItems.map(({ label, href, Icon }) => {
              const active = isActive(href, currentPath);
              return (
                <li key={href} className={styles.item}>
                  <a
                    href={href}
                    className={`${styles.link} ${active ? styles.active : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <Icon size={26} strokeWidth={1.75} aria-hidden="true" className={styles.icon} />
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
