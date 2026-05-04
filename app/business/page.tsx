import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'For Business | ROUTX LOGISTICS LTD',
  description: 'Complete B2B and B2C transport services across London and the UK. Scalable logistics solutions for your business.',
};

const businessFeatures = [
  {
    title: 'Advanced / Timed Deliveries',
    desc: 'Customers are able to request a specific time and date for their item(s) to be delivered.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    title: 'All Drivers are DBS Checked',
    desc: 'Assured that items are delivered by accredited persons with business van and goods-in-transit insurance.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: 'iOS & Android Applications',
    desc: 'Download and use our app from the two most popular mobile phone operating systems for easy management.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    )
  },
  {
    title: 'Instant Quotes',
    desc: 'Transparent pricing with no hidden or extra charges. Know your costs upfront in seconds.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Multi-drop Delivery',
    desc: 'Consignments picked up and divided to unlimited destinations, or picked from many to one location.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    )
  },
  {
    title: 'Secure Payments',
    desc: 'Our app accepts all major debit and credit cards with enterprise-grade security protocols.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    )
  },
  {
    title: 'Real-time Tracking',
    desc: 'Monitor the whereabouts of your delivery in real time with our advanced GPS fleet management.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    title: 'User-Friendly Experience',
    desc: 'Specifically designed interface to make business logistics management as simple as possible.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    )
  }
];

export default function BusinessPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '160px 24px 100px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Enterprise Solutions
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 24, fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <span className="text-orange">ROUTX</span> for Business
          </h1>
          <div className="orange-divider" style={{ margin: '24px auto' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.8, maxWidth: 700, margin: '0 auto' }}>
            Complete B2B and B2C transport services tailored to your timescale. Scalable solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center', marginBottom: 100 }}>
            
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ marginBottom: 30 }}>B2B & B2C <span className="text-orange">Excellence</span></h2>
              <p className="section-desc" style={{ marginBottom: 24 }}>
                ROUTX for Business provides complete B2B and B2C transport services no matter the timescale of the job. From scheduled daily routes to urgent same-day deliveries, we handle it all with professional precision.
              </p>
              <p className="section-desc" style={{ marginBottom: 30 }}>
                ROUTX has over 100 van owner-drivers UK wide and rising, with van sizes from small vans to Luton vans. So we can help with all your delivery needs.
              </p>
              <a href="/#contact" className="btn-primary">Send us a message</a>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden',
                boxShadow: '0 30px 70px rgba(0,0,0,0.1)',
                border: '10px solid var(--off-white)',
              }}>
                <img src="/business-logistics.png" alt="Business Logistics Management" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="section-badge">Platform Highlights</div>
            <h2 className="section-title">Key <span className="text-orange">Features</span></h2>
            <div className="orange-divider" style={{ margin: '24px auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 30 }}>
            {businessFeatures.map((f, i) => (
              <div key={i} className="service-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="service-icon-wrap" style={{ background: 'rgba(249,115,22,0.1)', color: 'var(--orange)' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, color: 'var(--navy)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* CTA */}
      <section className="cta-section section-padding" style={{ textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }} className="animate-fade-up">
          <h2 className="section-title-white" style={{ marginBottom: 24 }}>Scale Your Logistics Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', marginBottom: 40 }}>
            Partner with ROUTX for Business and take advantage of our growing network of professional drivers.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '16px 40px' }}>Inquire About Business Rates</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
