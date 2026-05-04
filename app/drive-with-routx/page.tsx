import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Become a Driver | Join the ROUTX Delivery Team London',
  description: 'Want to become a ROUTX driver? Join London\'s most efficient delivery network. Enter your details and we\'ll be in touch.',
};

export default function DriveWithRoutxPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Join Our Team
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Become a <span className="text-orange">Driver</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            Ready to join the ROUTX delivery network? We're looking for professional, reliable drivers to join our growing team in London.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'center' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                Join the <span className="text-orange">ROUTX Revolution</span>
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              <p style={{ color: 'var(--navy)', fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '24px', fontWeight: 600 }}>
                Want to become a ROUTX driver? Enter your details below and we will be in touch.
              </p>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <input type="text" placeholder="First Name" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }} required />
                  <input type="text" placeholder="Last Name" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }} required />
                </div>
                <input type="email" placeholder="Email Address" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }} required />
                <input type="tel" placeholder="Phone Number" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }} required />
                <select style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }} required>
                  <option value="">Vehicle Type</option>
                  <option value="bike">Bicycle / E-bike</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="car">Small Car</option>
                  <option value="van">Small Van</option>
                  <option value="large-van">Large Van (Luton)</option>
                </select>
                <textarea placeholder="Tell us about your experience..." rows={4} style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--off-white)' }}></textarea>
                <button type="submit" className="btn-primary" style={{ padding: '18px', width: '100%', fontSize: '1.1rem' }}>Submit Application</button>
              </form>
            </div>

            <div className="animate-fade-right">
              <div style={{ 
                borderRadius: '30px', 
                overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid var(--border)',
                position: 'relative'
              }}>
                <img 
                  src="/driver-hero.png" 
                  alt="Join our driver team" 
                  style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block' }} 
                />
                <div style={{
                  position: 'absolute', inset: 0, 
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(11,22,40,0.3))'
                }}></div>
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
                   <div style={{ background: 'rgba(255,255,255,0.95)', padding: '24px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
                      <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '8px' }}>Flexible Hours</h4>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Work when it suits you. Be your own boss with ROUTX.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div style={{ marginTop: '100px', padding: 'clamp(30px, 5vw, 60px)', background: 'var(--navy)', borderRadius: '40px', color: 'white' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '60px', fontWeight: 800 }}>Why drive with <span className="text-orange">ROUTX?</span></h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '40px' }}>
               {[
                 { title: 'Competitive Pay', text: 'Earn more with our efficient routing and high demand across London.' },
                 { title: 'Full Support', text: 'Our team is here to help you 24/7. You\'re never alone on the road.' },
                 { title: 'Simple App', text: 'Manage all your bookings, routes, and earnings in one easy-to-use app.' }
               ].map((b, i) => (
                 <div key={i}>
                    <h4 style={{ color: 'var(--orange)', fontWeight: 800, marginBottom: '15px' }}>{b.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{b.text}</p>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>

      <Clients />
      <Footer />
    </main>
  );
}
