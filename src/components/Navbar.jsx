import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  PhoneCall,
  Menu,
  X,
  Sun,
  Moon,
  Info,
  ChevronRight,
  Palette
} from 'lucide-react';

export default function Navbar({ onOpenClientModal, onOpenPaletteModal, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Demos', href: '#live-demo' },
    { name: 'Services', href: '#services' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px', flexShrink: 0 }}>
            <img
              src="/logo.png"
              alt="2xtechnologies Logo"
              style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#fff', whiteSpace: 'nowrap', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
              2x<span className="gradient-text">technologies</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Visible on Large Screens) */}
        <nav className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ fontSize: '0.9rem', fontWeight: '600', color: '#cbd5e1', whiteSpace: 'nowrap', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Controls (Visible on Large Screens) */}
        <div className="nav-desktop-actions">
          <button
            onClick={onOpenPaletteModal}
            title="Change website color theme"
            style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Palette style={{ width: '18px', height: '18px' }} />
          </button>

          <button
            onClick={toggleTheme}
            title="Toggle light/dark theme"
            style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {theme === 'dark' ? <Sun style={{ width: '18px', height: '18px' }} /> : <Moon style={{ width: '18px', height: '18px' }} />}
          </button>

          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
          >
            <PhoneCall style={{ width: '16px', height: '16px' }} />
            <span>Get Free Demo</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="nav-mobile-toggle" style={{ alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={onOpenPaletteModal}
            style={{ padding: '0.45rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-cyan)' }}
          >
            <Palette style={{ width: '18px', height: '18px' }} />
          </button>

          <button
            onClick={toggleTheme}
            style={{ padding: '0.45rem', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1' }}
          >
            {theme === 'dark' ? <Sun style={{ width: '18px', height: '18px' }} /> : <Moon style={{ width: '18px', height: '18px' }} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd5e1', padding: '0.5rem', borderRadius: '10px' }}
          >
            {mobileMenuOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Full Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#090d16', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.8)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '1.05rem', fontWeight: '600', color: '#e2e8f0', padding: '0.4rem 0', textDecoration: 'none' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPaletteModal(); }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', borderRadius: '12px', background: 'rgba(56,189,248,0.12)', color: 'var(--accent-cyan)', border: '1px solid rgba(56,189,248,0.3)', width: '100%', fontSize: '0.9rem', fontWeight: '600' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Palette style={{ width: '16px', height: '16px' }} /> Change Color Theme
              </span>
              <ChevronRight style={{ width: '16px', height: '16px' }} />
            </button>



            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}
            >
              <PhoneCall style={{ width: '18px', height: '18px' }} />
              <span>Get Free Demo & Quote</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}



