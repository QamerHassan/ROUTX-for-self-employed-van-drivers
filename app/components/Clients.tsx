'use client';
import React from 'react';

const mainPartners = [
  { name: 'Amazon', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-amazon.png', width: 140 },
  { name: 'LCB', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-lcb.png', width: 100 },
  { name: 'Airportr', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-airportr.png', width: 150 },
  { name: 'Yodel', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-yodel.png', width: 140 }
];

const previousClients = [
  { name: 'DPD', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-dpd.png', width: 100 },
  { name: 'DX', logo: 'https://vanr.co.uk/wp-content/themes/vanr/dist/img/client-dx.png', width: 100 }
];

export default function Clients() {
  return (
    <section className="section-padding" style={{ background: 'white', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Row 1: Delivering for Great Businesses */}
        <div style={{ marginBottom: 'clamp(40px, 8vw, 100px)' }}>
          <p style={{
            textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)',
            textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 30, opacity: 0.8
          }}>
            Delivering for Great Businesses
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'clamp(30px, 6vw, 80px)' }}>
            {mainPartners.map((c, i) => (
              <div key={i} style={{ transition: 'transform 0.3s ease' }} className="hover:scale-110">
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  style={{ width: 'clamp(70px, 18vw, ' + c.width + 'px)', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Previous Clients */}
        <div>
          <p style={{
            textAlign: 'center', fontSize: '0.75rem', fontWeight: 800, color: 'var(--navy)',
            textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 30, opacity: 0.8
          }}>
            Previous Clients
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'clamp(30px, 6vw, 80px)' }}>
            {previousClients.map((c, i) => (
              <div key={i} style={{ transition: 'transform 0.3s ease' }} className="hover:scale-110">
                <img 
                  src={c.logo} 
                  alt={c.name} 
                  style={{ width: 'clamp(70px, 18vw, ' + c.width + 'px)', height: 'auto', display: 'block' }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
