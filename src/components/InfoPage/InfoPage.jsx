// src/components/InfoPage/InfoPage.jsx
// Prosta podstrona tekstowa z treścią z WordPressa (standardy, polityka prywatności, RODO).
// `children` - dodatkowa treść pod tekstem z WP (np. telefony pomocowe).
import React from 'react';
import Banner from '../Banner/Banner.jsx';

export default function InfoPage({ title, contentHtml, children }) {
  return (
    <>
      <Banner titleTop={title} words={['Dokumenty']} />
      <article className="content-card">
        {contentHtml ? (
          <div className="wp-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        ) : (
          <p className="pending">Treść tej strony jest w przygotowaniu.</p>
        )}
        {children}
      </article>
    </>
  );
}
