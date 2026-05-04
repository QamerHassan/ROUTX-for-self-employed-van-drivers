import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Courier Service London | Same Day Delivery | ROUTX LOGISTICS LTD',
  description: 'ROUTX provides an excellent courier service in London via our seamless delivery app. Same day and timed bookings available.',
};

export default function CourierServicePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Premium Delivery
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Courier <span className="text-orange">Service</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            Efficient, reliable, and controlled entirely from your smartphone. Delivery simplified.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Courier Service in London, <span className="text-orange">Same Day in London</span>
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              <p style={{ color: 'var(--navy)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '24px', fontWeight: 600 }}>
                ROUTX aim to provide an excellent courier service in London via our seamless delivery app.
              </p>
              <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '24px' }}>
                Customers can take advantage of timed, advanced booking and same day delivery services in London as well as a multi-drop service too. Whether it's a single envelope or a bulk consignment, our fleet is ready to move.
              </p>
              <div style={{ padding: '30px', background: 'var(--off-white)', borderRadius: '24px', border: '1px solid var(--border)', marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '15px' }}>Got your attention?</h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '1rem' }}>
                  Join hundreds of businesses in London who trust ROUTX for their critical same-day deliveries. Experience the precision of modern logistics.
                </p>
              </div>
              <a href="/enquiry" className="btn-primary" style={{ padding: '16px 40px' }}>Start Your Shipment</a>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <img src="/courier-service.png" alt="Courier Service in Action" style={{ width: '100%', display: 'block' }} />
                <div style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,22,40,0.3))'
                }}></div>
              </div>
            </div>
          </div>

          {/* Stats/Features row */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '40px', 
            marginTop: '100px',
            textAlign: 'center'
          }}>
            {[
              { icon: '⏱️', title: 'Timed Bookings', text: 'Schedule deliveries to the minute with our advanced planning tools.' },
              { icon: '🚚', title: 'Multi-Drop', text: 'Optimized routes for multiple deliveries in a single run.' },
              { icon: '🛡️', title: 'Fully Insured', text: 'Your items are covered by comprehensive goods-in-transit insurance.' },
              { icon: '📱', title: 'App Control', text: 'Track, book, and manage everything from your mobile device.' }
            ].map((f, i) => (
              <div key={i} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{f.icon}</div>
                <h4 style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '12px' }}>{f.title}</h4>
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
