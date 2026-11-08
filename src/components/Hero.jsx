// src/components/Hero.jsx
import React from 'react';

export default function Hero({ title, content }) {
  return (
    <section className="hero-section" style={{ padding: '4rem 2rem', backgroundColor: '#f4f4f5' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>
        {title}
      </h1>
      <div 
        style={{ fontSize: '1.2rem', color: '#555' }}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </section>
  );
}