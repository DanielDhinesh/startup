import React from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenClientModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ paddingTop: '3rem', paddingBottom: '2.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}>
      <div className="container">
        
        <div className="responsive-4col" style={{ marginBottom: '2.5rem' }}>
          
          {/* Brand Info */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem', textDecoration: 'none' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-emerald))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/logo.png" 
                  alt="2xtechnologies Logo" 
                  style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>
                2x<span className="gradient-text">technologies</span>
              </span>
            </a>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginBottom: '1rem', maxWidth: '320px' }}>
              Empowering businesses with custom enterprise software, scalable web solutions, and tailored tech solutions.
            </p>

            <button
              onClick={onOpenClientModal}
              style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', background: 'rgba(56,189,248,0.1)', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(56,189,248,0.25)', fontWeight: '600' }}
            >
              📋 Founder Setup Checklist
            </button>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Core Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
              <li><a href="#live-demo">2xtechnologies Billing Software</a></li>
              <li><a href="#live-demo">Custom SMB Websites</a></li>
              <li><a href="#live-demo">WhatsApp Digital Receipts</a></li>
              <li><a href="#services">Thermal Printer Drivers</a></li>
              <li><a href="#calculator">Store ROI Calculator</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
              <li><a href="#live-demo">Live Demos</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why 2xtechnologies</a></li>
              <li><a href="#pricing">Pricing Plans</a></li>
              <li><a href="#contact">Contact & Support</a></li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.8rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <a href="tel:+918825966704" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>
                  <PhoneCall style={{ width: '15px', height: '15px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>+91 88259 66704</span>
                </a>
                <a href="tel:+916381181934" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.8rem' }}>
                  <PhoneCall style={{ width: '15px', height: '15px', color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>+91 63811 81934</span>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <Mail style={{ width: '15px', height: '15px', color: '#34d399' }} />
                <a href="mailto:business@2xtechnologies.in" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.78rem' }}>business@2xtechnologies.in</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--text-secondary)' }}>
                <MapPin style={{ width: '15px', height: '15px', color: '#a78bfa' }} />
                <span>Tech Park, City Centre 400001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.85rem', fontSize: '0.78rem' }}>
          <div>
            © {new Date().getFullYear()} 2xtechnologies. All rights reserved.
          </div>

          <button 
            onClick={scrollToTop}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-cyan)', background: 'var(--bg-glass)', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
          >
            <span>Back to Top</span>
            <ArrowUp style={{ width: '13px', height: '13px' }} />
          </button>
        </div>

      </div>
    </footer>
  );
}




