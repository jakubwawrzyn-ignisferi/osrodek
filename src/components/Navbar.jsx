// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  const menuItems = [
    { label: 'Strona główna', href: '/' },
    { label: 'Nasza misja', href: '/about-us' },
    { label: 'Aktualności', href: '/news' },
    { label: 'Galeria', href: '/gallery' },
    { label: 'Kontakt', href: '/contact' },
  ];

  return (
    <header style={{ 
      borderBottom: '1px solid #e5e7eb', 
      backgroundColor: '#ffffff', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000 
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '1rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        {/* Logo / Nazwa firmy */}
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
          <a href="/" style={{ textDecoration: 'none', color: '#111827' }}>
            MojaStrona
          </a>
        </div>

        {/* Menu nawigacyjne */}
        <nav>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '2rem', 
            margin: 0, 
            padding: 0,
            alignItems: 'center' 
          }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  style={{ 
                    textDecoration: 'none', 
                    color: '#4b5563', 
                    fontWeight: '500',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#2563eb'}
                  onMouseOut={(e) => e.target.style.color = '#4b5563'}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}