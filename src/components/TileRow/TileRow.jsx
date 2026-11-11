// src/components/TileRow/TileRow.jsx
// Poziomy kafelek ze strony głównej: kolorowy kwadrat z ikoną, nazwa, zdjęcie wtapiające się
// w tło po prawej i strzałka. Cały kafelek jest jednym linkiem.
// Bez `href` (podstrona jeszcze nie istnieje) kafelek nie jest linkiem i nie ma strzałki.
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Icon from '../Icon/Icon.jsx';
import styles from './TileRow.module.css';

export default function TileRow({ href, label, icon, color = 'green', image = null }) {
  const Root = href ? 'a' : 'div';

  return (
    <Root
      {...(href ? { href } : {})}
      className={`${styles.row} ${href ? styles.link : ''}`}
      style={{ '--tile': `var(--c-${color})` }}
    >
      <span className={styles.icon}>
        <Icon name={icon} size={30} />
      </span>
      <span className={styles.label}>{label}</span>
      {image && <img src={image.url} alt="" className={styles.image} loading="lazy" decoding="async" />}
      {href && (
        <span className={styles.chevron} aria-hidden="true">
          <ChevronRight size={22} strokeWidth={2.5} />
        </span>
      )}
    </Root>
  );
}
