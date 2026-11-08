// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './Navbar.module.css';

const menuItems = [
  { label: 'Strona główna', href: '/' },
  { label: 'Nasza misja', href: '/about-us' },
  { label: 'Aktualności', href: '/news' },
  { label: 'Galeria', href: '/gallery' },
  { label: 'Kontakt', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo / nazwa ośrodka */}
        <a href="/" className={styles.logo}>
          MojaStrona
        </a>

        {/* Menu nawigacyjne */}
        <nav>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
