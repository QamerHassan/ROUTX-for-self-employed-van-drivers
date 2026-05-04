import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Man with a Van London | ROUTX LOGISTICS LTD',
  description: 'ROUTX can instantly provide customers with a man with a van in London. Book your van delivery today.',
};

export default function ManWithVanPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Service Spotlight
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Man with a <span className="text-orange">Van</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            The easiest way to order and control a professional van service from your smartphone.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Do you need a <span className="text-orange">Man with a Van?</span> Are you based in London?
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              <p style={{ color: 'var(--text-dark)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '24px' }}>
                ROUTX can instantly provide customers with a man with a van in London. Consumers may need to replace a particular type of furniture as their present furniture maybe worn out, broken or its just time for an interior change.
              </p>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px' }}>
                Why waste time searching for a man with a van in London, when you can use ROUTX. Our service is designed to be fast, reliable, and completely transparent, giving you full control over your delivery.
              </p>
              <a href="/enquiry" className="btn-primary" style={{ padding: '16px 40px' }}>Book Your Van Now</a>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <img src="/man-with-van.png" alt="Man with a Van Service" style={{ width: '100%', display: 'block' }} />
                <div style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,22,40,0.4))'
                }}></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '30px', 
            marginTop: '100px' 
          }}>
            {[
              { title: 'On-Demand Booking', text: 'Book your van in seconds using our streamlined platform.' },
              { title: 'Real-Time Tracking', text: 'Know exactly where your items are at every step of the journey.' },
              { title: 'DBS Checked Drivers', text: 'All our drivers are fully vetted and professional.' },
              { title: 'Transparent Pricing', text: 'No hidden fees. You see exactly what you pay before you book.' }
            ].map((f, i) => (
              <div key={i} style={{ 
                padding: '40px', background: 'var(--off-white)', borderRadius: '24px', 
                border: '1px solid var(--border)', transition: 'transform 0.3s'
              }} className="hover:scale-105">
                <div style={{ width: '40px', height: '4px', background: 'var(--orange)', marginBottom: '20px', borderRadius: '2px' }}></div>
                <h4 style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '15px' }}>{f.title}</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6 }}>{f.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Clients />
      <Footer />
    </main>
  );
}
