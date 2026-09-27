import React from 'react';
import { 
  Receipt, 
  Globe, 
  MessageSquare, 
  Printer, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Receipt style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />,
      title: 'Smart Billing POS',
      badge: 'Popular',
      description: 'Super-fast POS software for Kirana & retail. Thermal print, barcode & stock tracking.',
      tags: ['3-Sec Checkout', 'GST Invoices', 'Stock Alerts', 'Offline Mode']
    },
    {
      icon: <Globe style={{ width: '20px', height: '20px', color: '#10b981' }} />,
      title: 'Custom SMB Websites',
      badge: 'High Conversion',
      description: 'Mobile-ready store websites with Google Maps SEO and direct WhatsApp ordering.',
      tags: ['Mobile Optimized', 'Google Maps SEO', 'Online Catalog', 'WhatsApp Orders']
    },
    {
      icon: <MessageSquare style={{ width: '20px', height: '20px', color: '#8b5cf6' }} />,
      title: 'WhatsApp Automation',
      badge: 'Paperless',
      description: 'Auto-send branded PDF bills on WhatsApp & automated UPI payment reminders.',
      tags: ['Digital PDF Bills', 'UPI Payment Bot', 'Review Booster', 'Customer Loyalty']
    },
    {
      icon: <Printer style={{ width: '20px', height: '20px', color: '#f59e0b' }} />,
      title: 'Hardware & POS Setup',
      badge: 'Full Setup',
      description: 'Supply & setup for thermal receipt printers, barcode scanners & cash drawers.',
      tags: ['Thermal Printers', 'Barcode Scanners', 'Cash Drawers', '1-Yr Support']
    },
    {
      icon: <Cpu style={{ width: '20px', height: '20px', color: '#ec4899' }} />,
      title: 'Custom IT & Automation',
      badge: 'Bespoke',
      description: 'Tailored store tools, multi-branch stock sync, and automated cloud data backups.',
      tags: ['Multi-Branch Sync', 'Supplier POS', 'Sales Analytics', 'Cloud Backups']
    },
    {
      icon: <ShieldCheck style={{ width: '20px', height: '20px', color: '#06b6d4' }} />,
      title: '24/7 Dedicated Support',
      badge: 'Peace of Mind',
      description: '1-on-1 staff training, on-site setup at your shop, and instant phone assistance.',
      tags: ['Staff Training', '0% Hidden Fees', 'Same-Day Help', 'Free Updates']
    },
  ];

  return (
    <section id="services" className="py-12 md:py-16 relative bg-[#090d16]" style={{ paddingTop: '3rem', paddingBottom: '3rem', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2rem auto' }}>
          <div className="badge" style={{ marginBottom: '0.6rem' }}>
            <Sparkles style={{ width: '13px', height: '13px', color: 'var(--accent-cyan)' }} />
            <span>Complete SMB Tech Ecosystem</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
            Everything Your Shop Needs to <span className="gradient-text">Grow & Modernize</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.5' }}>
            High-speed POS billing, custom store websites, and WhatsApp automation by TecqHub under one roof.
          </p>
        </div>

        {/* Compact 3-Column Services Grid */}
        <div className="responsive-3col">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card" 
              style={{ 
                padding: '1.1rem 1.25rem', 
                borderRadius: '16px', 
                display: 'flex', 
                flexDirection: 'column', 
                justify: 'space-between',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ padding: '0.45rem', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#f8fafc', margin: 0, whiteSpace: 'nowrap' }}>
                      {service.title}
                    </h3>
                  </div>
                  <span className="badge" style={{ fontSize: '0.62rem', padding: '0.15rem 0.5rem' }}>
                    {service.badge}
                  </span>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: '1.45', marginBottom: '0.85rem' }}>
                  {service.description}
                </p>

                {/* Feature Tags Pill Grid */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
                  {service.tags.map((t, idx) => (
                    <span 
                      key={idx}
                      style={{ fontSize: '0.68rem', color: '#cbd5e1', background: 'rgba(255,255,255,0.04)', padding: '0.15rem 0.45rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      ✓ {t}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href="#contact" 
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', fontWeight: '700', color: 'var(--accent-cyan)', transition: 'gap 0.2s' }}
              >
                <span>Request Service Demo</span>
                <ArrowRight style={{ width: '13px', height: '13px' }} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
