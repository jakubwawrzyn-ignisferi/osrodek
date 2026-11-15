// src/components/Contact/Contact.jsx
// Strona Kontakt: adres z linkiem do mapy oraz karty obu placówek z telefonami i e-mailami.
// Mapa nie jest osadzona na stronie (osadzona mapa Google przesyła dane odwiedzających do Google),
// zamiast tego jest link otwierający mapę w nowej karcie.
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { organization, units, telHref } from '../../data/site.js';
import styles from './Contact.module.css';

const address = `${organization.address.street}, ${organization.address.city}`;
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function Contact() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {/* Adres */}
        <section className={`${styles.card} ${styles.addressCard}`} aria-labelledby="contact-address">
          <span className={styles.icon}>
            <MapPin size={26} aria-hidden="true" />
          </span>
          <h2 id="contact-address" className={styles.cardTitle}>
            Adres
          </h2>
          <p className={styles.address}>
            {organization.name}
            <br />
            {organization.patron}
            <br />
            {organization.address.street}
            <br />
            {organization.address.city}
          </p>
          <a href={mapUrl} className="btn btn-light" target="_blank" rel="noopener noreferrer">
            Jak dojechać
            <span className="sr-only"> (mapa otwiera się w nowej karcie)</span>
          </a>
        </section>

        {/* Placówki */}
        {units.map((unit) => (
          <section key={unit.short} className={styles.card} aria-label={unit.name}>
            <span className={styles.tag}>{unit.short}</span>
            <h2 className={styles.cardTitle}>{unit.name}</h2>

            <ul className={styles.list}>
              {unit.phones.map((phone) => (
                <li key={phone.number}>
                  <Phone size={18} aria-hidden="true" className={styles.listIcon} />
                  <span className={styles.label}>{phone.label}</span>
                  <a href={telHref(phone.number)} className={styles.value}>
                    {phone.number}
                  </a>
                </li>
              ))}
              <li>
                <Mail size={18} aria-hidden="true" className={styles.listIcon} />
                <span className={styles.label}>E-mail</span>
                <a href={`mailto:${unit.email}`} className={styles.value}>
                  {unit.email}
                </a>
              </li>
            </ul>

            <a href={unit.facebook} className={styles.social} target="_blank" rel="noopener noreferrer">
              Facebook {unit.short}
              <span className="sr-only"> (otwiera się w nowej karcie)</span>
            </a>
          </section>
        ))}
      </div>
    </div>
  );
}
