'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="site-footer" style={{ padding: '80px 24px 60px', background: '#0B1628' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 2fr 2fr 2fr 1.5fr', 
          gap: '40px', 
          alignItems: 'start',
          marginBottom: '60px'
        }} className="footer-grid">
          
          {/* ROUTX Logo */}
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'linear-gradient(135deg,#F97316,#e8650a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div>
                <span style={{ color: 'white', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.02em', display: 'block', lineHeight: 1 }}>ROUTX</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>LOGISTICS LTD</span>
              </div>
            </Link>
          </div>

          {/* Column 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/about" className="footer-link-v2">About</Link>
            <Link href="/business" className="footer-link-v2">ROUTX for Business</Link>
            <Link href="/drive-with-routx" className="footer-link-v2">Become a driver</Link>
          </div>

          {/* Column 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/contact" className="footer-link-v2">Contact</Link>
            <Link href="/help" className="footer-link-v2">Help</Link>
          </div>

          {/* Column 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link href="/man-with-van" className="footer-link-v2">Man with a van</Link>
            <Link href="/delivery-service" className="footer-link-v2">Delivery service</Link>
            <Link href="/courier-service" className="footer-link-v2">Courier service</Link>
            <Link href="/removal" className="footer-link-v2">Removal</Link>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
            {[
              { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
              { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01' },
              { name: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z' }
            ].map((social, i) => (
              <a key={i} href="#" style={{ 
                width: 32, height: 32, borderRadius: '50%', border: '1px solid white',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' 
              }} className="hover:bg-white hover:text-navy">
                <svg width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  {social.name === 'Instagram' ? (
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  ) : null}
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Credits */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.08)', 
          paddingTop: '30px', 
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '10px',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.8rem'
        }}>
          <span>© {currentYear} ROUTX LOGISTICS LTD. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>

      </div>


    </footer>
  );
}
