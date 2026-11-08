// src/components/NewsSection.jsx
import React from 'react';

export default function NewsSection({ posts = [] }) {
  return (
    <section style={{ padding: '4rem 2rem', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          Aktualności
        </h2>

        {/* Siatka 3 kafelków */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {posts.map((post) => (
            <article key={post.id} style={{ 
              border: '1px solid #e5e7eb', 
              borderRadius: '8px', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              {/* Opcjonalny obrazek wyróżniający */}
              {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                <img 
                  src={post._embedded['wp:featuredmedia'][0].source_url} 
                  alt={post.title.rendered}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              )}

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {post.title.rendered}
                </h3>
                
                {/* Short excerpt / zajawka z WordPressa */}
                <div 
                  style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1.5rem' }}
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                />

                <a 
                  href={`/aktualnosci/${post.slug}`} 
                  style={{ 
                    marginTop: 'auto', 
                    color: '#2563eb', 
                    fontWeight: 'bold', 
                    textDecoration: 'none' 
                  }}
                >
                  Czytaj więcej &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Przycisk do pełnej listy aktualności */}
        <div style={{ textAlign: 'center' }}>
          <a 
            href="/aktualnosci" 
            style={{ 
              display: 'inline-block',
              padding: '0.8rem 2rem', 
              backgroundColor: '#111827', 
              color: '#ffffff', 
              textDecoration: 'none', 
              borderRadius: '6px',
              fontWeight: '500'
            }}
          >
            Zobacz wszystkie aktualności
          </a>
        </div>
      </div>
    </section>
  );
}