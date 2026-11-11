// src/components/TileGrid/TileGrid.jsx
// Siatka kafelków ze zdjęciami (podstrony sekcji, Dokumenty, System pracy).
// Niepełny ostatni rząd jest wyśrodkowany, jak w projekcie.
// tiles: [{ href, label, icon, color, image }]
// maxColumns: najwięcej kafelków w rzędzie (domyślnie 5)
import React from 'react';
import TileCard from '../TileCard/TileCard.jsx';
import styles from './TileGrid.module.css';

export default function TileGrid({ tiles = [], label, maxColumns }) {
  return (
    <ul
      className={styles.grid}
      aria-label={label}
      style={maxColumns ? { '--max-cols': maxColumns } : undefined}
    >
      {tiles.map((tile) => (
        <li key={tile.label} className={styles.item}>
          <TileCard {...tile} />
        </li>
      ))}
    </ul>
  );
}
