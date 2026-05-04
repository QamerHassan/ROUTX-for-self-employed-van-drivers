import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Contact Us | ROUTX LOGISTICS LTD London',
  description: 'Get in touch with ROUTX LOGISTICS LTD. Professional delivery and courier services across London and the UK. Suite RA01, 195-197 Wood Street, London E17 3NU.',
};

export default function ContactPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Get In Touch
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            Contact <span className="text-orange">Us</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem' }}>
            We're here to help with all your delivery and logistics needs. Reach out to our team today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '60px', alignItems: 'start' }}>
            <div className="animate-fade-left">
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                How can we <span className="text-orange">help?</span>
              </h2>
              <div className="orange-divider" style={{ marginBottom: '30px' }}></div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '50px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <svg width="24" height="24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '5px' }}>Visit Us</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: 1.6 }}>
                      Suite RA01, 195-197 Wood Street<br />London E17 3NU
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <svg width="24" height="24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '5px' }}>Call Us</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem' }}>+44 20 1234 5678</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--off-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                    <svg width="24" height="24" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--navy)', fontWeight: 800, marginBottom: '5px' }}>Email Us</h4>
                    <p style={{ color: 'var(--text-gray)', fontSize: '1rem', marginBottom: '5px' }}>info@routx-logistics.com</p>
                    <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem' }}>Tech Support: tech@routx-logistics.com</p>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                 <img src="/contact-office.png" alt="ROUTX Office" style={{ width: '100%', display: 'block' }} />
              </div>
            </div>

            <div className="animate-fade-right">
               <div style={{ background: 'var(--off-white)', padding: 'clamp(20px, 4vw, 40px)', borderRadius: '30px', border: '1px solid var(--border)', marginBottom: '40px' }}>
                  <h3 style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '24px' }}>Send us a message</h3>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input type="text" placeholder="Full Name" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} required />
                    <input type="email" placeholder="Email Address" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} required />
                    <select style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} required>
                       <option value="">General Enquiry</option>
                       <option value="quote">Request a Quote</option>
                       <option value="support">Technical Support</option>
                       <option value="billing">Billing & Accounts</option>
                    </select>
                    <textarea placeholder="Message" rows={5} style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} required></textarea>
                    <button type="submit" className="btn-primary" style={{ padding: '18px', width: '100%', fontSize: '1.1rem' }}>Send Message</button>
                  </form>
               </div>

               {/* Map Container */}
               <div style={{ 
                 height: '350px', 
                 borderRadius: '30px', 
                 overflow: 'hidden', 
                 border: '1px solid var(--border)',
                 boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
               }}>
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.467475357876!2d-0.007629684227395627!3d51.5835269796482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d78c3c7849f%3A0x67390a1841203650!2s195%20Wood%20St%2C%20London%20E17%203NU!5e0!3m2!1sen!2suk!4v1651586523947!5m2!1sen!2suk" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
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
