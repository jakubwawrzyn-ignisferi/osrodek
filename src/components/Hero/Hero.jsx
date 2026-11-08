// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ title, content }) {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </section>
  );
}
