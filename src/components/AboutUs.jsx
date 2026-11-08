// src/components/MissionContent.jsx
import React from 'react';

export default function MissionContent({ title, bannerUrl, contentHtml }) {
  return (
    <div>
      {/* 1. Baner główny */}
      <section style={{ 
        backgroundColor: '#111827', 
        color: '#ffffff',
        padding: '3rem 2rem'
      }}>
        {/* Kontener ograniczający szerokość z marginesem auto i paddingiem */}
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem', // Odstęp między kolumną tekstu a obrazkiem
          flexWrap: 'wrap' // RWD: na urządzeniach mobilnych obrazek zjedzie pod tekst
        }}>
          
          {/* Lewa strona: Tekst i Nagłówek */}
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ 
              fontSize: '2.75rem', 
              margin: '0 0 1.25rem 0', 
              fontWeight: 'bold',
              lineHeight: '1.2' 
            }}>
              {title}
            </h1>
            <p style={{ 
              fontSize: '1.15rem', 
              margin: 0, 
              color: '#d1d5db', 
              lineHeight: '1.7' 
            }}>
              Tutaj znajduje się tekst baneru wyświetlany po lewej stronie, z zachowaniem odpowiednich marginesów.
            </p>
          </div>

          {/* Prawa strona: Zmniejszony Obrazek */}
          {bannerUrl && (
            <div style={{ 
              flex: '0 1 380px', // Ograniczenie maksymalnej szerokości obrazka (np. 380px)
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img 
                src={bannerUrl} 
                alt={title} 
                style={{ 
                  width: '100%', 
                  maxHeight: '320px', 
                  objectFit: 'cover', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          )}

        </div>
      </section>

      {/* 2. Dalsza treść strony (z WordPressa) */}
      <section style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <div 
          style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#374151' }}
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </section>
    </div>
  );
}