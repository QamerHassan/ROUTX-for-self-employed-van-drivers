'use client';
import React from 'react';
import Link from 'next/link';
import { blogPosts } from '../data/blogData';

export default function BlogFeed() {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', 
      gap: '40px' 
    }}>
      {blogPosts.map((post, i) => (
        <Link key={i} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
          <article className="animate-fade-up" style={{ 
            animationDelay: `${i * 0.1}s`,
            background: 'white',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            height: '100%'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
          }}
          >
            {/* Post Image */}
            <div style={{ height: '200px', overflow: 'hidden' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--orange)', textTransform: 'uppercase' }}>Logistics</span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-gray)' }}></span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>{post.date}</span>
              </div>
              
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '15px', lineHeight: 1.3 }}>
                {post.title}
              </h2>
              
              <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                {post.excerpt}
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'var(--navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 800 }}>
                    {post.author.charAt(0)}
                  </div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)' }}>{post.author}</span>
                </div>
                <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Read More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
