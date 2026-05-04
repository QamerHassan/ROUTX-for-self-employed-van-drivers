import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Professional Removals London | Home & Office | ROUTX LOGISTICS LTD',
  description: 'ROUTX is the most efficient and reliable removal company in London. DBS checked drivers and real-time tracking for your peace of mind.',
};

export default function RemovalPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Expert Movers
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Professional <span className="text-orange">Removal</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            Efficient, reliable, and secure removal services for your home or office, managed via our seamless app.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Do you need a <span className="text-orange">Removal Company?</span> Are you based in London?
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              <p style={{ color: 'var(--navy)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '24px', fontWeight: 600 }}>
                ROUTX is the most efficient and reliable removal company in London.
              </p>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
                All ROUTX drivers are DBS (Disclosure and Barring Service) checked for the safety of our customers. Every job performed includes a digital proof of delivery signature, so you know exactly who handled your items.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                  <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginTop: '-4px' }}>✓</div>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Track your items live via our mobile app.</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                  <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginTop: '-4px' }}>✓</div>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600 }}>DBS checked and fully insured professionals.</p>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'start' }}>
                  <div style={{ color: 'var(--orange)', fontSize: '1.5rem', marginTop: '-4px' }}>✓</div>
                  <p style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Perfect for when you want it moved NOW.</p>
                </div>
              </div>

              <a href="/enquiry" className="btn-primary" style={{ padding: '16px 40px' }}>Get a Removal Quote</a>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <img src="/removal.png" alt="Professional Removal Team" style={{ width: '100%', display: 'block' }} />
                <div style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,22,40,0.2))'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Clients />
      <Footer />
    </main>
  );
}
