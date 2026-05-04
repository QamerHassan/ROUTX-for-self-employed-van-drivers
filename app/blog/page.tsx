import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogFeed from '../components/BlogFeed';

export const metadata = {
  title: 'Blog | ROUTX LOGISTICS LTD',
  description: 'Stay updated with the latest news, tips, and insights from the world of logistics and delivery in London.',
};

export default function BlogPage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Hero */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            News & Insights
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20 }}>
            ROUTX <span className="text-orange">Blog</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>
            Latest updates, delivery tips, and logistics news from London's favorite courier service.
          </p>
        </div>
      </section>

      {/* Blog Feed */}
      <section style={{ padding: '80px 24px', background: 'var(--off-white)', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          <BlogFeed />

          {/* Pagination Placeholder */}
          <div style={{ marginTop: '60px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--navy)', color: 'white', border: 'none', fontWeight: 700 }}>1</button>
            <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'white', color: 'var(--navy)', border: '1px solid var(--border)', fontWeight: 700 }}>2</button>
            <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'white', color: 'var(--navy)', border: '1px solid var(--border)', fontWeight: 700 }}>3</button>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
