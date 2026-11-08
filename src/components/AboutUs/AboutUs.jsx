// src/components/AboutUs/AboutUs.jsx
// Strona "O nas" (w WP: "Nasza misja"): nagłówek z obrazkiem wyróżniającym i treść z WordPressa.
import React from 'react';
import PageHeader from '../PageHeader/PageHeader.jsx';
import styles from './AboutUs.module.css';

export default function AboutUs({ title, bannerUrl, contentHtml }) {
  return (
    <>
      <PageHeader
        eyebrow="O nas"
        title={title}
        image={bannerUrl ? { url: bannerUrl, alt: '' } : null}
      />

      {/* Treść strony z WordPressa */}
      <div className={styles.contentSection}>
        <div className={`wp-content ${styles.content}`} dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}
