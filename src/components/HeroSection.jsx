import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Receipt,
  Globe,
  MessageSquare,
  Zap,
  TrendingUp,
  Store,
  Printer
} from 'lucide-react';

export default function HeroSection({ onOpenDemo }) {
  // Quick Mini Simulator state on Hero
  const [items, setItems] = useState([
    { id: 1, name: 'Sample Item A (Grocery)', price: 120, qty: 2 },
    { id: 2, name: 'Sample Service B (Repair)', price: 450, qty: 1 }
  ]);
  const [appliedDiscount, setAppliedDiscount] = useState(50);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst - appliedDiscount;

  const handleAddSampleItem = () => {
    const sampleNames = ['Fresh Snack Pack', 'Custom Product X', 'Hardware Item Y', 'Consultation Service'];
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
    const randomPrice = Math.floor(Math.random() * 200) + 50;
    setItems(prev => [...prev, { id: Date.now(), name: randomName, price: randomPrice, qty: 1 }]);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" style={{ paddingTop: '7.5rem', paddingBottom: '4rem', position: 'relative' }}>

      {/* Background Decorative Glow Orbs */}
      <div className="glow-orb" style={{ top: '10%', left: '15%', width: '350px', height: '350px', background: 'rgba(56, 189, 248, 0.15)' }}></div>
      <div className="glow-orb" style={{ top: '30%', right: '10%', width: '400px', height: '400px', background: 'rgba(16, 185, 129, 0.12)' }}></div>

      <div className="container relative z-10">
        <div className="responsive-hero-grid">

          {/* Left Column: Text & CTAs */}
          <div>
            {/* Top Pill Badge */}
            <div className="badge" style={{ marginBottom: '1.25rem' }}>
              <Sparkles style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)' }} />
              <span>Tailored for Small & Medium Businesses (SMBs)</span>
            </div>

            {/* Main Headline */}
            <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.6rem)', fontWeight: '800', lineHeight: '1.15', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
              Transform Your Shop with <span className="gradient-text">Smart Billing</span> & Modern Websites
            </h1>

            {/* Subheading */}
            <p style={{ fontSize: '1.05rem', color: '#94a3b8', marginBottom: '1.8rem', lineHeight: '1.65', maxWidth: '620px' }}>
              Eliminate slow manual billing, inventory confusion, and missing online presence. <strong style={{ color: '#f8fafc' }}>2xtechnologies</strong> provides fast billing software, high-converting websites, and automated WhatsApp tech built specifically for local retailers, restaurants, and SMBs.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '2rem' }}>
              <a href="#live-demo" className="btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '1rem' }}>
                <span>Try Live Software Demo</span>
                <ArrowRight style={{ width: '18px', height: '18px' }} />
              </a>

              <a href="#contact" className="btn-secondary" style={{ padding: '0.85rem 1.6rem', fontSize: '1rem' }}>
                <Store style={{ width: '18px', height: '18px', color: 'var(--accent-cyan)' }} />
                <span>Get Free Shop Quote</span>
              </a>
            </div>

            {/* Key Value Pill Highlights */}
            <div className="responsive-3col" style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', flexShrink: 0 }}>
                  <Zap style={{ width: '18px', height: '18px' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>3x Faster</h4>
                  <p style={{ fontSize: '0.72rem', color: '#64748b' }}>Bill Checkout</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(16,185,129,0.1)', color: '#10b981', flexShrink: 0 }}>
                  <Globe style={{ width: '18px', height: '18px' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>SMB Web</h4>
                  <p style={{ fontSize: '0.72rem', color: '#64748b' }}>Mobile & Fast</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ padding: '0.4rem', borderRadius: '8px', background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', flexShrink: 0 }}>
                  <MessageSquare style={{ width: '18px', height: '18px' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: '#fff' }}>WhatsApp</h4>
                  <p style={{ fontSize: '0.72rem', color: '#64748b' }}>Digital Bills</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive POS Billing Card Mockup */}
          <div style={{ position: 'relative' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(16,185,129,0.2))', borderRadius: '28px', filter: 'blur(20px)', zIndex: 0 }}></div>

            <div className="glass-card" style={{ position: 'relative', zIndex: 1, padding: '1.25rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(20px)' }}>

              {/* POS Window Top Header */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', paddingBottom: '0.75rem', marginBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#cbd5e1', marginLeft: '0.4rem', fontFamily: 'var(--font-heading)' }}>
                    2xtechnologies Express v2.4 (Live Preview)
                  </span>
                </div>
                <span className="badge" style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span> Live System
                </span>
              </div>

              {/* POS Items Table */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase' }}>Cart Items</span>
                  <button
                    onClick={handleAddSampleItem}
                    style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: '700', background: 'rgba(56,189,248,0.1)', padding: '0.2rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(56,189,248,0.2)' }}
                  >
                    + Add Sample Item
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', maxHeight: '150px', overflowY: 'auto' }}>
                  {items.map((item) => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.03)', padding: '0.5rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <div>
                        <p style={{ fontSize: '0.8rem', fontWeight: '600', color: '#f1f5f9', margin: 0 }}>{item.name}</p>
                        <p style={{ fontSize: '0.68rem', color: '#64748b', margin: 0 }}>₹{item.price} × {item.qty}</p>
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-cyan)' }}>
                        ₹{item.price * item.qty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total Summary */}
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '0.85rem', borderRadius: '12px', marginBottom: '0.85rem', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                  <span>Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '0.25rem' }}>
                  <span>GST (18%):</span>
                  <span>₹{gst}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: '#10b981', marginBottom: '0.4rem' }}>
                  <span>Special Discount:</span>
                  <span>-₹{appliedDiscount}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '800', color: '#fff', paddingTop: '0.4rem', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
                  <span>Grand Total:</span>
                  <span className="gradient-text">₹{grandTotal}</span>
                </div>
              </div>

              {/* Interactive Print & Invoice Buttons */}
              <div className="responsive-form-row">
                <button
                  onClick={() => setShowInvoiceModal(true)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.6rem', fontSize: '0.82rem', borderRadius: '8px' }}
                >
                  <Printer style={{ width: '15px', height: '15px' }} />
                  <span>Print Receipt</span>
                </button>

                <button
                  onClick={() => alert('WhatsApp Receipt sent successfully to client preview!')}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.6rem', fontSize: '0.82rem', borderRadius: '8px', borderColor: 'rgba(16,185,129,0.3)', color: '#34d399' }}
                >
                  <MessageSquare style={{ width: '15px', height: '15px' }} />
                  <span>Send WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Instant Receipt Preview Modal */}
      {showInvoiceModal && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="glass-card" style={{ background: '#fff', color: '#0f172a', maxWidth: '350px', width: '100%', padding: '1.25rem', borderRadius: '16px', fontFamily: 'monospace', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>

            <div style={{ textAlign: 'center', borderBottom: '1px dashed #cbd5e1', paddingBottom: '0.6rem', marginBottom: '0.6rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', margin: 0 }}>2xtechnologies SOLUTIONS</h3>
              <p style={{ fontSize: '0.72rem', color: '#64748b', margin: '2px 0' }}>SMB Billing & Tech Partner</p>
              <p style={{ fontSize: '0.68rem', color: '#94a3b8', margin: 0 }}>Date: {new Date().toLocaleDateString()}</p>
            </div>

            <div style={{ fontSize: '0.78rem', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.2rem', marginBottom: '0.4rem' }}>
                <span>ITEM</span>
                <span>QTY</span>
                <span>AMT</span>
              </div>
              {items.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                  <span>{item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px dashed #cbd5e1', paddingTop: '0.4rem', fontSize: '0.78rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal:</span><span>₹{subtotal}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>GST (18%):</span><span>₹{gst}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#059669', fontWeight: 'bold' }}><span>Discount:</span><span>-₹{appliedDiscount}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: '900', marginTop: '0.3rem', borderTop: '1px solid #000', paddingTop: '0.25rem' }}>
                <span>TOTAL:</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => setShowInvoiceModal(false)}
              style={{ width: '100%', marginTop: '0.85rem', background: '#0f172a', color: '#fff', padding: '0.55rem', borderRadius: '8px', fontWeight: 'bold', fontSize: '0.82rem' }}
            >
              Close Receipt Preview
            </button>
          </div>
        </div>
      )}

    </section>
  );
}




