// src/components/NewsArticle.jsx
// Treść pojedynczej aktualności (strona /news/[slug]).
import React from 'react';

export default function NewsArticle({ title, date, dateIso, image, contentHtml }) {
  return (
    <article style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 2rem 4rem' }}>
      <a href="/news" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>
        &larr; Wszystkie aktualności
      </a>

      <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', margin: '1.5rem 0 0.5rem', color: '#111827' }}>
        {title}
      </h1>
      <time dateTime={dateIso} style={{ color: '#6b7280' }}>
        {date}
      </time>

      {image && (
        <img
          src={image.url}
          alt={image.alt}
          style={{
            display: 'block',
            width: '100%',
            maxHeight: '420px',
            objectFit: 'cover',
            borderRadius: '12px',
            margin: '2rem 0'
          }}
        />
      )}

      {/* Treść wpisu z WordPressa */}
      <div
        style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#374151', marginTop: image ? 0 : '2rem' }}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
