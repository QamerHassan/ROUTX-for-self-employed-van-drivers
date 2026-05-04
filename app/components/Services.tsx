import React from 'react';

const services = [
  {
    title: 'Man with a Van',
    desc: 'Perfect for small moves, furniture delivery, or single items. Professional and careful handling.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z"/><path d="M16 8h4l3 5v3h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    )
  },
  {
    title: 'Courier Service',
    desc: 'Fast, secure, and reliable parcel delivery locally and nationwide. Tracking included for peace of mind.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: 'Home Removal',
    desc: 'Complete residential moving services. We handle everything from packing to final placement.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    title: 'Business Logistics',
    desc: 'Specialized logistics solutions for businesses of all sizes. Reliable scheduled deliveries.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding" style={{ background: 'var(--off-white)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="animate-fade-up">
          <div className="section-badge">Our Services</div>
          <h2 className="section-title">Specialized Solutions for <br /><span className="text-orange">Every Delivery Need</span></h2>
          <div className="orange-divider" style={{ margin: '24px auto' }}></div>
          <p className="section-desc" style={{ maxWidth: 600, margin: '0 auto' }}>
            We provide a comprehensive range of logistics and delivery services tailored to meet your specific requirements.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 30 }}>
          {services.map((s, i) => (
            <div key={i} className={`service-card animate-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon-wrap">
                <div style={{ color: 'var(--orange)' }}>{s.icon}</div>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, color: 'var(--navy)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, fontSize: '0.95rem' }}>{s.desc}</p>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, color: 'var(--orange)', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
