import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { blogPosts } from '../../data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Clients from '../../components/Clients';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  return {
    title: post ? `${post.title} | ROUTX Blog` : 'Post Not Found',
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      
      {/* Article Header */}
      <section className="hero-section" style={{ padding: '160px 24px 80px', textAlign: 'center' }}>
        <div className="hero-grid-pattern" />
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }} className="animate-fade-up">
          <Link href="/blog" style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '8px', 
            color: 'rgba(255,255,255,0.6)', textDecoration: 'none', 
            marginBottom: '30px', fontSize: '0.9rem', fontWeight: 600
          }} className="hover:text-orange">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to Blog
          </Link>
          <div className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
            {post.date} / By {post.author}
          </div>
          <h1 className="section-title-white" style={{ marginBottom: 20, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            {post.title}
          </h1>
          <div className="orange-divider" style={{ margin: '24px auto' }}></div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: '80px 24px', background: 'white', flexGrow: 1 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          
          <div style={{ 
            borderRadius: '30px', 
            overflow: 'hidden', 
            marginBottom: '60px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
            border: '1px solid var(--border)'
          }} className="animate-fade-up">
            <img src={post.image} alt={post.title} style={{ width: '100%', display: 'block' }} />
          </div>

          <div 
            className="animate-fade-up" 
            style={{ 
              color: 'var(--navy)', 
              lineHeight: 1.8, 
              fontSize: '1.15rem' 
            }}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="blog-content-container"
            />
          </div>

          <div style={{ 
            marginTop: '80px', 
            padding: '40px', 
            background: 'var(--off-white)', 
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '30px'
          }}>
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              background: 'var(--navy)', color: 'white', 
              display: 'flex', alignItems: 'center', justifyContent: 'center', 
              fontSize: '2rem', fontWeight: 900 
            }}>
              {post.author.charAt(0)}
            </div>
            <div>
              <h4 style={{ fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>About {post.author}</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '1rem' }}>
                Expert in London logistics and same-day delivery solutions. Helping businesses and individuals move items with precision and care.
              </p>
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
