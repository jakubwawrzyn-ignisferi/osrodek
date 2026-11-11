// src/components/TileCard/TileCard.jsx
// Kafelek ze zdjęciem u góry i paskiem na dole: kolorowy kwadrat z ikoną, nazwa i okrągła strzałka.
// Cały kafelek jest jednym linkiem. Bez zdjęcia pokazuje tło zastępcze w kolorze kafelka.
// Bez `href` kafelek nie jest linkiem i nie ma strzałki (np. lista metod pracy).
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Icon from '../Icon/Icon.jsx';
import styles from './TileCard.module.css';

export default function TileCard({ href, label, icon, color = 'green', image = null }) {
  const Root = href ? 'a' : 'div';

  return (
    <Root
      {...(href ? { href } : {})}
      className={`${styles.card} ${href ? styles.link : ''}`}
      style={{ '--tile': `var(--c-${color})` }}
    >
      <span className={styles.media}>
        {image ? (
          <img src={image.url} alt="" className={styles.image} loading="lazy" decoding="async" />
        ) : (
          <span className={styles.placeholder} aria-hidden="true">
            <Icon name={icon} size={56} strokeWidth={1.25} />
          </span>
        )}
      </span>

      <span className={styles.bar}>
        <span className={styles.icon}>
          <Icon name={icon} size={30} />
        </span>
        <span className={styles.label}>{label}</span>
        {href && (
          <span className={styles.chevron} aria-hidden="true">
            <ChevronRight size={18} strokeWidth={2.5} />
          </span>
        )}
      </span>
    </Root>
  );
}
