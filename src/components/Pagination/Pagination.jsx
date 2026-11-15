// src/components/Pagination/Pagination.jsx
// Numery stron pod listą aktualności. Pierwsza strona to /aktualnosci/, kolejne /aktualnosci/strona/2/ itd.
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsPageHref } from '../../lib/news.js';
import styles from './Pagination.module.css';

export default function Pagination({ current, total }) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, index) => index + 1);

  return (
    <nav className={styles.pagination} aria-label="Strony aktualności">
      {current > 1 && (
        <a href={newsPageHref(current - 1)} className={styles.link} rel="prev">
          <ChevronLeft size={18} aria-hidden="true" />
          <span className="sr-only">Poprzednia strona</span>
        </a>
      )}

      <ul className={styles.list}>
        {pages.map((page) => (
          <li key={page}>
            <a
              href={newsPageHref(page)}
              className={`${styles.link} ${page === current ? styles.current : ''}`}
              aria-current={page === current ? 'page' : undefined}
            >
              <span className="sr-only">Strona </span>
              {page}
            </a>
          </li>
        ))}
      </ul>

      {current < total && (
        <a href={newsPageHref(current + 1)} className={styles.link} rel="next">
          <ChevronRight size={18} aria-hidden="true" />
          <span className="sr-only">Następna strona</span>
        </a>
      )}
    </nav>
  );
}
