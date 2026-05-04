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
    { label: 'ROUTX FOR BUSINESS', href: '/business' },
    { label: 'BECOME A DRIVER', href: '/drive-with-routx' },
    { label: 'MAKE AN ENQUIRY', href: '/enquiry' },
    { label: 'HELP', href: '/help' },
    { label: 'CONTACT', href: '/contact' },
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 80 : 90 }}>
            
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 12px)', textDecoration: 'none', zIndex: 1001 }}>
              <div style={{
                width: scrolled ? 38 : 44, height: scrolled ? 38 : 44, borderRadius: 12,
                background: 'linear-gradient(135deg,#F97316,#e8650a)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: scrolled ? '0 4px 14px rgba(249,115,22,0.3)' : 'none',
                flexShrink: 0,
                transition: 'all 0.3s ease'
              }}>
                <svg width={scrolled ? 20 : 24} height={scrolled ? 20 : 24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <div style={{ visibility: open ? 'hidden' : 'visible' }}>
                <span style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', letterSpacing: '-0.02em', display: 'block', lineHeight: 1 }}>ROUTX</span>
                <span className="hidden sm:block" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>LOGISTICS LTD</span>
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
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(11, 22, 40, 0.98)',
        backdropFilter: 'blur(30px)',
        zIndex: 10000, // Very high z-index
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          gap: '20px', 
          textAlign: 'center',
          marginTop: '40px'
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
                fontSize: '2.8rem', 
                fontWeight: 900,
                letterSpacing: '0.02em',
                transition: 'all 0.3s ease',
                animationDelay: `${i * 0.05}s`
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              {l.label}
            </Link>
          ))}
        </div>
        
        <div style={{ 
          position: 'absolute', 
          bottom: 60, 
          textAlign: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.9rem'
        }}>
          <p>© 2026 ROUTX LOGISTICS LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </>
  );
}
