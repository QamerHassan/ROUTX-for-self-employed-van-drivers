import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Clients from '../components/Clients';

export const metadata = {
  title: 'Help & FAQ | ROUTX LOGISTICS LTD',
  description: 'Find answers to common questions about ROUTX delivery services, insurance, tracking, and more.',
};

const faqs = [
  {
    category: 'General Questions',
    items: [
      { q: 'Do you deliver food?', a: 'Yes we do.' },
      { q: 'Do you provide international services?', a: 'Not yet, but we plan on offering this service soon.' },
      { q: 'What are ROUTX’s working hours?', a: 'The ROUTX app operates 24 hours a day, 7 days a week.' },
      { q: 'What areas do you operate in?', a: 'We operate all over England, Scotland and Wales.' }
    ]
  },
  {
    category: 'Security & Insurance',
    items: [
      { q: 'Is my information safe?', a: 'Yes, we take our customers security very seriously. We use a secure payment provider (Braintree) to manage transactions; this means that we do not have direct access to your card details. Braintree is fully PCI compliant. Your personal information is secured and stored on PCI compliant servers on Google’s cloud platform.' },
      { q: 'Is my item insured?', a: 'Yes, all our drivers are fully insured with goods in transit insurance. Please note our policy only covers for the material cost of the items.' },
      { q: 'All Drivers are DBS Checked?', a: 'Yes, customers can feel assured that their items are being delivered by an accredited person with business van insurance.' }
    ]
  },
  {
    category: 'Booking & Payments',
    items: [
      { q: 'Do you accept cash on arrival?', a: 'Sorry, no cash. For both security and administrative reasons we do not accept any form of cash payments. You may tip your driver in cash at your own discretion.' },
      { q: 'What cards are accepted?', a: 'We accept Visa and MasterCard upon booking. American Express and PayPal are not accepted as of now.' },
      { q: 'When do I receive my receipt?', a: 'Once the booking is completed you will automatically receive a receipt via email.' }
    ]
  },
  {
    category: 'Vehicle Information',
    items: [
      { q: 'What vehicle should I choose?', a: 'Small Van (Payload: 500kg), Medium Van (Payload: 1000kg), Large Van (Payload: 1800kg), Luton Van (Payload: 3000kg).' }
    ]
  }
];

export default function HelpPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            Support Center
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            How Can We <span className="text-orange">Help?</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            Find answers to common questions or reach out to our dedicated support team.
          </p>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: 'clamp(40px, 8vw, 80px)' }}>
            {/* Sidebar info */}
            <div className="animate-fade-left">
              <div style={{ position: 'relative', top: 0 }} className="md:sticky md:top-[100px]">
                <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '30px', border: '1px solid var(--border)' }}>
                  <img src="/customer-support.png" alt="Customer Support" style={{ width: '100%', display: 'block' }} />
                </div>
                <h3 style={{ color: 'var(--navy)', fontWeight: 800, fontSize: '1.5rem', marginBottom: '15px' }}>Still have questions?</h3>
                <p style={{ color: 'var(--text-gray)', marginBottom: '30px', lineHeight: 1.6 }}>
                  If you can't find what you're looking for, our support team is available 24/7 to assist you.
                </p>
                <a href="/enquiry" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contact Support</a>
              </div>
            </div>

            {/* FAQ List */}
            <div className="animate-fade-right">
              {faqs.map((cat, i) => (
                <div key={i} style={{ marginBottom: '50px' }}>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 800, 
                    color: 'var(--navy)', 
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <span style={{ width: '30px', height: '4px', background: 'var(--orange)', borderRadius: '2px' }}></span>
                    {cat.category}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {cat.items.map((item, j) => (
                      <div key={j} style={{ 
                        padding: '24px', 
                        background: 'var(--off-white)', 
                        borderRadius: '16px',
                        border: '1px solid var(--border)'
                      }}>
                        <h4 style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '10px', fontSize: '1.05rem' }}>
                          {item.q}
                        </h4>
                        <p style={{ color: 'var(--text-gray)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Partners Section */}
      <Clients />

      <Footer />
    </main>
  );
}
