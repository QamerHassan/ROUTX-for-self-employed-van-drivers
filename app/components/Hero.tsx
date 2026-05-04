import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 72 }}>
      <div className="hero-grid-pattern" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="hero-grid-layout">

          {/* Left */}
          <div className="animate-fade-up">
            <div className="section-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><circle cx="6" cy="6" r="6"/></svg>
              Live Delivery Service · London & UK
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24 }}>
              Your Trusted<br />
              <span style={{ background: 'linear-gradient(135deg,#F97316,#fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Logistics
              </span>{' '}Partner
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 40, maxWidth: 480 }}>
              Whether you&apos;re moving home, sending parcels, or need a reliable courier — ROUTX LOGISTICS LTD is here to deliver on time, every time across London and the UK.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
                Make an Enquiry
              </a>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[['✓', 'Same-Day Delivery'], ['✓', 'Fully Insured'], ['✓', 'GPS Tracked']].map(([icon, text]) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#F97316', fontWeight: 800 }}>{icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="animate-fade-right animate-float" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.08)',
              position: 'relative',
            }}>
              <Image src="/hero-van.png" alt="ROUTX Logistics delivery van" width={620} height={420} style={{ width: '100%', height: 'auto', display: 'block' }} priority />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,22,40,0.5) 0%, transparent 60%)' }} />
            </div>

            {/* Floating card */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20,
              background: 'rgba(11,22,40,0.9)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(249,115,22,0.3)', borderRadius: 16,
              padding: '16px 22px', display: 'flex', alignItems: 'center', gap: 14,
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg,#F97316,#e8650a)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <div style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>5,000+ Deliveries</div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem' }}>Completed successfully</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 80L60 68C120 56 240 32 360 26.7C480 21.3 600 34.7 720 40C840 45.3 960 42.7 1080 37.3C1200 32 1320 24 1380 20L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
