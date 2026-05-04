'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Business', href: '/business' },
    { label: 'Enquiry', href: '/enquiry' },
    { label: 'Help', href: '/help' },
    { label: 'Blog', href: '/blog' },
  ];

  const fullMenuLinks = [
    { label: 'ABOUT', href: '/about' },
    { label: 'BUSINESS', href: '/business' },
    { label: 'ENQUIRY', href: '/enquiry' },
    { label: 'HELP', href: '/help' },
    { label: 'BLOG', href: '/blog' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`} style={{ transition: 'all 0.3s ease' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px, 4vw, 40px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 70 : 80 }}>
            
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', textDecoration: 'none', zIndex: 1001 }}>
              <div style={{
                width: scrolled ? 34 : 40, height: scrolled ? 34 : 40, borderRadius: 10,
                background: 'linear-gradient(135deg,#F97316,#e8650a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                <svg width={scrolled ? 18 : 22} height={scrolled ? 18 : 22} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div style={{ visibility: open ? 'hidden' : 'visible' }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.02em', display: 'block', lineHeight: 1 }}>ROUTX</span>
              </div>
            </Link>
 
            {/* Desktop Center Links - STRICTLY hidden on mobile/tablet via CSS */}
            <div className="hidden xl:flex" style={{ 
                gap: 'clamp(20px, 3vw, 40px)', 
                alignItems: 'center', 
                position: 'absolute', 
                left: '50%', 
                transform: 'translateX(-50%)',
                visibility: open ? 'hidden' : 'visible'
            }}>
              {links.map(l => (
                <Link key={l.label} href={l.href} className="nav-link" style={{ 
                  fontSize: '0.95rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>
                  {l.label}
                </Link>
              ))}
            </div>
 
            {/* Main Hamburger */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: 'white', 
                  padding: '10px',
                  zIndex: 1001,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="hover:scale-110"
                aria-label="Open menu"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Horizontal Sub-Nav (The "Khali Jaga" fix) */}
        <div 
          className="xl:hidden" 
          style={{ 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            background: scrolled ? 'rgba(11,22,40,0.8)' : 'transparent',
            backdropFilter: 'blur(10px)',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            padding: '10px 16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div style={{ display: 'inline-flex', gap: '20px', paddingRight: '20px' }}>
            {[
              { label: 'About', href: '/about' },
              { label: 'Business', href: '/business' },
              { label: 'Enquiry', href: '/enquiry' },
              { label: 'Help', href: '/help' },
              { label: 'Blog', href: '/blog' }
            ].map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                style={{ 
                  color: 'rgba(255,255,255,0.85)', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem', 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
                className="hover:text-orange"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(11, 22, 40, 0.98)',
        backdropFilter: 'blur(30px)',
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        overflowY: 'auto', // Ensure it's scrollable
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transform: open ? 'translateY(0)' : 'translateY(-100%)',
      }}>
        
        {/* Internal Close Button (INSIDE the menu overlay) */}
        <button 
          onClick={() => setOpen(false)}
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'white',
            padding: '15px'
          }}
          className="hover:rotate-90 transition-transform duration-300"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Brand Logo in Menu */}
        <div style={{ position: 'absolute', top: 40, left: 40 }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: 'linear-gradient(135deg,#F97316,#e8650a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <span style={{ color: 'white', fontWeight: 900, fontSize: '1.4rem' }}>ROUTX</span>
           </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px', 
          textAlign: 'center',
          width: '100%',
          padding: '0 24px'
        }}>
          {fullMenuLinks.map((l, i) => (
            <Link 
              key={l.label} 
              href={l.href} 
              onClick={() => setOpen(false)}
              className="animate-fade-up"
              style={{ 
                color: 'white', 
                textDecoration: 'none', 
                fontSize: 'min(2.2rem, 8vw)', 
                fontWeight: 900,
                letterSpacing: '0.02em',
                transition: 'all 0.3s ease',
                animationDelay: `${i * 0.04}s`,
                display: 'block',
                padding: '8px 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              {l.label}
            </Link>
          ))}
        </div>
        
        <div style={{ 
          marginTop: '40px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem'
        }}>
          <p>© 2026 ROUTX LOGISTICS LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </>
  );
}
