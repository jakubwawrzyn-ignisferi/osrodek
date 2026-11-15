// src/components/Landscape/Landscape.jsx
// Pejzaż nad stopką: góry, słońce, las i ścieżka, rysowane w SVG (lekkie i ostre na każdym ekranie).
// Dół pejzażu ma kolor stopki, więc obie części łączą się w jeden obraz.
// tagline - odręczne hasło na środku (każda podstrona może mieć własne).
import React from 'react';
import styles from './Landscape.module.css';

// Choinka: trzy nałożone trójkąty. x, y - podstawa pnia, h - wysokość.
function pine(x, y, h) {
  const w = h * 0.5;
  const tier = (top, bottom, width) =>
    `M${x} ${y - h * top} L${x + width / 2} ${y - h * bottom} L${x - width / 2} ${y - h * bottom} Z`;
  return [tier(1, 0.55, w * 0.6), tier(0.78, 0.3, w * 0.8), tier(0.55, 0.05, w)].join(' ') +
    ` M${x - h * 0.03} ${y - h * 0.06} h${h * 0.06} v${h * 0.08} h-${h * 0.06} Z`;
}

// Rząd choinek. Pozycje i wysokości wyliczane deterministycznie (ten sam wynik przy każdym buildzie).
function forest(count, fromX, toX, baseY, minH, maxH, seed) {
  const step = (toX - fromX) / count;
  let d = '';
  for (let i = 0; i < count; i += 1) {
    const r = Math.abs(Math.sin((i + 1) * seed));
    const x = fromX + i * step + r * step * 0.6;
    const h = minH + r * (maxH - minH);
    d += pine(Math.round(x), baseY + Math.round(r * 6), Math.round(h)) + ' ';
  }
  return d;
}

const farForest = forest(70, -20, 1460, 214, 26, 44, 12.9898);
const nearLeft = forest(14, -30, 470, 262, 60, 110, 78.233);
const nearRight = forest(14, 980, 1470, 262, 60, 110, 37.719);

export default function Landscape({ tagline }) {
  return (
    <div className={styles.landscape}>
      <svg
        className={styles.svg}
        viewBox="0 0 1440 260"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
        focusable="false"
      >
        {/* Słońce za górami */}
        <circle cx="560" cy="150" r="46" fill="#f2b14c" />

        {/* Odległe góry */}
        <path
          d="M0 150 L120 110 L230 135 L360 85 L470 128 L560 112 L640 140 L760 95 L880 130 L1010 88 L1130 126 L1250 100 L1360 132 L1440 112 V260 H0 Z"
          fill="#cfdccb"
        />
        {/* Wzgórza */}
        <path
          d="M0 178 C140 150 260 168 380 160 C520 150 600 178 720 172 C860 164 980 146 1110 158 C1240 170 1340 150 1440 158 V260 H0 Z"
          fill="#a8c2a3"
        />
        {/* Kręta ścieżka */}
        <path
          d="M700 260 C690 238 760 226 742 210 C726 196 668 196 690 184 C706 176 750 176 735 168"
          fill="none"
          stroke="#efe3c4"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Las w oddali */}
        <path d={farForest} fill="#6f9773" />
        {/* Jeziorko */}
        <ellipse cx="1080" cy="236" rx="90" ry="9" fill="#b9d4d6" />
        {/* Pierwszy plan: ziemia w kolorze stopki i duże choinki po bokach */}
        <path
          d="M0 232 C200 222 380 240 560 236 C760 232 900 246 1100 238 C1260 232 1360 236 1440 230 V260 H0 Z"
          fill="#2f6646"
        />
        <path d={nearLeft} fill="#1f4d36" />
        <path d={nearRight} fill="#1f4d36" />
        <path d="M0 252 H1440 V260 H0 Z" fill="#173d2b" />
      </svg>

      {tagline && (
        <p className={`script ${styles.tagline}`}>
          {tagline}
          <span className={styles.ornament} aria-hidden="true">
            <svg viewBox="0 0 24 22">
              <path d="M12 20.5C6 16 2 12.4 2 7.9 2 4.9 4.3 2.5 7.2 2.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 2.9 0 5.2 2.4 5.2 5.4 0 4.5-4 8.1-10 12.6z" />
            </svg>
          </span>
        </p>
      )}
    </div>
  );
}
