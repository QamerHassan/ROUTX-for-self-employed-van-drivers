import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Professional Delivery Service London | ROUTX LOGISTICS LTD',
  description: 'ROUTX provides an efficient and reliable delivery service in London. Instant man with a van and courier services to fulfil all logistical demands.',
};

export default function DeliveryServicePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Reliable Logistics
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Delivery <span className="text-orange">Service</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            Efficient, reliable, and controlled entirely from your smartphone. Your premier delivery partner in London.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Delivery service in <span className="text-orange">London</span>
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              <p style={{ color: 'var(--navy)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '24px', fontWeight: 600 }}>
                ROUTX is for you, when you need an efficient and reliable delivery service.
              </p>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '30px' }}>
                There are many delivery services in London but none quite like ROUTX that provide an instant 'man with a van' delivery service in London to fulfil all of our customers logistical demands. Our seamless technology allows you to order and track your delivery in real-time.
              </p>
              
              <div style={{ padding: '30px', background: 'var(--off-white)', borderRadius: '24px', border: '1px solid var(--border)', marginBottom: '40px' }}>
                 <p style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '1.1rem', fontStyle: 'italic' }}>
                   "Ordering a reliable delivery service couldn't be easier!"
                 </p>
              </div>

              <a href="/enquiry" className="btn-primary" style={{ padding: '16px 40px' }}>Book a Delivery</a>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <img src="/delivery-service.png" alt="ROUTX Delivery Service" style={{ width: '100%', display: 'block' }} />
                <div style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,22,40,0.1))'
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
