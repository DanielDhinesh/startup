import React from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export default function PricingEstimator() {
  const plans = [
    {
      id: 'starter',
      name: 'Starter Shop POS',
      badge: 'Billing Only',
      price: '₹4,999',
      period: 'one-time setup',
      description: 'Ideal for small retail stores & Kirana counters wanting fast, error-free billing.',
      features: [
        'TecqPOS Express Billing',
        'Thermal Printer Drivers',
        'GST & Non-GST Invoices',
        'Stock & Inventory Tracker',
        'WhatsApp Bill Link Bot',
        '1-on-1 Staff Training'
      ],
      popular: false,
      cta: 'Get Starter Plan'
    },
    {
      id: 'growth',
      name: 'Digital Growth Pack',
      badge: '★ Most Popular',
      price: '₹11,999',
      period: 'complete package',
      description: 'The ultimate package! Get POS billing software PLUS a modern website to attract local customers.',
      features: [
        'Everything in Starter POS',
        'Custom 5-Page SMB Website',
        'Google Maps & Local SEO',
        'Instant WhatsApp Orders',
        '1-Yr Domain & High-Speed Host',
        '12 Months Priority Support'
      ],
      popular: true,
      cta: 'Get Growth Pack'
    },
    {
      id: 'enterprise',
      name: 'Omnichannel Enterprise',
      badge: 'Custom Tech',
      price: '₹24,999',
      period: 'tailored setup',
      description: 'For growing businesses, restaurants & multi-branch stores needing advanced automation.',
      features: [
        'Multi-Branch POS Sync',
        'E-Commerce Catalog Web',
        'Automated WhatsApp Bot',
        'Supplier Purchase Orders',
        'Hardware Printer & Scanner',
        'Dedicated Tech Manager'
      ],
      popular: false,
      cta: 'Request Quote'
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 relative bg-[#090d16]" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2rem auto' }}>
          <div className="badge" style={{ marginBottom: '0.75rem', background: 'rgba(139,92,246,0.1)', color: '#a78bfa', border: '1px solid rgba(139,92,246,0.3)' }}>
            <Sparkles style={{ width: '14px', height: '14px' }} />
            <span>Transparent & Affordable Pricing</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '0.5rem' }}>
            Simple Packages for <span className="gradient-text">Every Store Size</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5' }}>
            No hidden monthly commissions! Pay once for setup and enjoy reliable, long-term tech solutions.
          </p>
        </div>

        {/* Compact Horizontal Cards on Desktop / Vertical Cards on Mobile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '1100px', margin: '0 auto' }}>
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className="glass-card" 
              style={{ 
                padding: '1.25rem 1.5rem', 
                borderRadius: '18px', 
                position: 'relative',
                borderColor: plan.popular ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.08)',
                boxShadow: plan.popular ? '0 0 30px -5px rgba(56,189,248,0.25)' : 'none',
                background: plan.popular ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.65)'
              }}
            >
              {plan.popular && (
                <div style={{ position: 'absolute', top: '-11px', right: '2rem', background: 'linear-gradient(135deg, var(--accent-cyan), #10b981)', color: '#090d16', fontWeight: '800', fontSize: '0.68rem', padding: '0.2rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Recommended Package
                </div>
              )}

              {/* Flex Container: Row on Desktop, Column on Mobile */}
              <div className="pricing-card-layout">
                
                {/* 1. Plan Name & Price Box */}
                <div className="pricing-left-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#fff', margin: 0, whiteSpace: 'nowrap' }}>
                      {plan.name}
                    </h3>
                    <span className="badge" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                      {plan.badge}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 0.5rem 0', lineHeight: '1.4', maxWidth: '280px' }}>
                    {plan.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: '900', color: plan.popular ? 'var(--accent-cyan)' : '#fff', lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* 2. Middle Features Grid */}
                <div className="pricing-middle-box">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.4rem 1rem' }}>
                    {plan.features.map((feat, fidx) => (
                      <div key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                        <Check style={{ width: '14px', height: '14px', color: '#10b981', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Right CTA Action */}
                <div className="pricing-right-box">
                  <a 
                    href="#contact" 
                    className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                    style={{ padding: '0.75rem 1.4rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight style={{ width: '15px', height: '15px' }} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
