// src/components/InfoPage/InfoPage.jsx
// Prosta podstrona tekstowa z treścią z WordPressa (standardy, polityka prywatności, RODO).
// `children` - dodatkowa treść pod tekstem z WP (np. telefony pomocowe).
import React from 'react';
import styles from './InfoPage.module.css';

export default function InfoPage({ title, contentHtml, children }) {
  return (
    <article className={styles.page}>
      <h1 className={styles.title}>{title}</h1>

      {contentHtml ? (
        <div className="wp-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      ) : (
        <p className={styles.pending}>Treść tej strony jest w przygotowaniu.</p>
      )}

      {children}
    </article>
  );
}
