import React from 'react';

const features = [
  {
    title: 'Live Tracking',
    desc: 'Monitor your delivery in real-time with our advanced GPS tracking system.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    title: 'Instant Quotes',
    desc: 'Get a transparent, no-obligation price estimate in seconds using our app.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Secure Handling',
    desc: 'Our professional drivers are fully insured and trained for delicate items.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ background: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center' }}>
          
          <div className="animate-fade-left">
            <div className="section-badge">Why Choose Us</div>
            <h2 className="section-title">Time to Take <span className="text-orange">Full Control</span></h2>
            <div className="orange-divider"></div>
            <p className="section-desc" style={{ marginBottom: 40 }}>
              ROUTX LOGISTICS LTD isn't just another delivery company. We leverage technology to give you a seamless, stress-free logistics experience.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
              {features.map((f, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-check">
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8, color: 'var(--navy)' }}>{f.title}</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-right" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 30, overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
              border: '10px solid var(--off-white)',
            }}>
              <img src="/city-logistics.png" alt="Logistics network" style={{ width: '100%', display: 'block' }} />
            </div>
            
            {/* Decoration */}
            <div style={{
              position: 'absolute', top: -30, right: -30, width: 120, height: 120,
              background: 'rgba(249,115,22,0.1)', borderRadius: '50%', zIndex: -1
            }}></div>
          </div>

        </div>
      </div>
    </section>
  );
}
