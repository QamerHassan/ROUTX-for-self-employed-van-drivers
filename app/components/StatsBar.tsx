import React from 'react';

const stats = [
  { label: 'Deliveries Completed', value: '5K+' },
  { label: 'Professional Drivers', value: '120+' },
  { label: 'Happy Customers', value: '3.5K+' },
  { label: 'Years Experience', value: '8+' }
];

export default function StatsBar() {
  return (
    <section className="stats-bar" style={{ padding: 'clamp(40px, 8vw, 80px) 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 20 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <span className="stat-number">{s.value}</span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
