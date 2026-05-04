import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'About Us | ROUTX LOGISTICS LTD',
  description: 'Learn more about ROUTX LOGISTICS LTD, our mission, and our network of professional drivers across London.',
};

export default function AboutPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Page Header */}
      <section className="hero-section" style={{ padding: '160px 24px 100px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Our Story
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 24, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            About <span className="text-orange">ROUTX</span>
          </h1>
          <div className="orange-divider" style={{ margin: '24px auto' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            Reliable, efficient, and technology-driven logistics solutions for businesses and consumers across the UK.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 60, alignItems: 'center' }}>
            
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ marginBottom: 30 }}>Who We <span className="text-orange">Are</span></h2>
              <p className="section-desc" style={{ marginBottom: 24 }}>
                The ROUTX logistics company has been created to allow both businesses and consumers to utilise self-employed van drivers. We bridge the gap between those who need items moved and professional drivers who have the capacity to move them.
              </p>
              <p className="section-desc">
                ROUTX have over 100 drivers, ready to fulfil all your logistical needs. Our network is constantly growing, ensuring that we can provide fast, reliable service no matter where you are in London or the surrounding areas.
              </p>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                marginBottom: '30px'
              }}>
                <img src="/about-team.png" alt="ROUTX Logistics Team" style={{ width: '100%', display: 'block' }} />
              </div>
              <div style={{ 
                background: 'var(--off-white)', 
                padding: '40px', 
                borderRadius: '30px', 
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', top: '-20px', left: '40px', 
                  background: 'var(--orange)', color: 'white', 
                  padding: '10px 20px', borderRadius: '12px', 
                  fontWeight: 800, boxShadow: '0 8px 20px rgba(249,115,22,0.3)'
                }}>
                  100+ Active Drivers
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {[
                    { label: 'Nationwide Reach', value: 'We cover all of UK with focus on London' },
                    { label: 'Real-time Tech', value: 'GPS tracking and instant communications' },
                    { label: 'Verified Drivers', value: 'All our drivers are background checked' }
                  ].map((item, i) => (
                    <div key={i}>
                      <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{item.label}</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* Stats or CTA */}
      <section className="section-padding" style={{ background: 'var(--navy)', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24 }}>Ready to experience better logistics?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 40, fontSize: '1.1rem' }}>
            Whether you are a business looking for a delivery partner or a consumer moving home, we are here to help.
          </p>
          <a href="/#contact" className="btn-primary">Get a Free Quote</a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
