import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  Info
} from 'lucide-react';

export default function ContactSection({ onOpenClientModal }) {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    phone: '',
    serviceNeeded: 'Both Billing & Website',
    businessType: 'Retail Store',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do I need internet for TecqPOS billing software to work?',
      a: 'No! TecqPOS works 100% offline for instant billing. Your sales are saved locally and automatically synced whenever internet connection becomes available.'
    },
    {
      q: 'Can I use my existing laptop or thermal printer?',
      a: 'Yes, absolutely! TecqPOS works smoothly on Windows laptops, desktops, and Android POS devices. We will configure your existing thermal printer or scanner free of charge.'
    },
    {
      q: 'How long does it take to get my custom website ready?',
      a: 'For standard SMB store websites, we deliver a fully functional, mobile-responsive website linked with Google Maps and WhatsApp in just 48 to 72 hours!'
    },
    {
      q: 'How will I receive training on how to use the software?',
      a: 'We provide 1-on-1 hands-on training for you and your store staff (either in person at your shop or via screen-share). We also give you simple video guides.'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-[#0f172a]" style={{ paddingTop: '4rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge" style={{ marginBottom: '0.85rem', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56,189,248,0.25)' }}>
            <PhoneCall style={{ width: '14px', height: '14px' }} />
            <span>Get Free Consultation & Demo</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: '800', marginBottom: '0.85rem' }}>
            Let's Modernize Your Shop <span className="gradient-text">Today</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
            Fill out the form below or chat directly on WhatsApp to get a customized proposal for your store.
          </p>
        </div>

        <div className="responsive-2col" style={{ alignItems: 'start', marginBottom: '3rem' }}>
          
          {/* Left Column: Glassmorphism Contact Form */}
          <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
            
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 style={{ width: '30px', height: '30px' }} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>Demo Request Received!</h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Thank you <strong>{formData.name}</strong> ({formData.shopName}). Our TecqHub specialist will reach out to <strong>{formData.phone}</strong> shortly with your custom shop proposal.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.1rem', color: '#fff' }}>
                  Request Free Shop Consultation
                </h3>

                <div className="responsive-form-row">
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>Shop / Business Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Royal Mart"
                      value={formData.shopName}
                      onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>

                <div className="responsive-form-row">
                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>Mobile / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>Store Type</label>
                    <select 
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      style={{ width: '100%', background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                    >
                      <option value="Retail Store">Kirana / Retail Store</option>
                      <option value="Apparel / Fashion">Apparel & Boutique</option>
                      <option value="Restaurant / Cafe">Restaurant / Cafe</option>
                      <option value="Electronics / Hardware">Electronics & Hardware</option>
                      <option value="Services / Clinic">Service Shop / Clinic</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>What Do You Need?</label>
                  <select 
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    style={{ width: '100%', background: '#090d16', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  >
                    <option value="Billing POS Software">Smart Billing POS Software</option>
                    <option value="Custom Website">Custom Store Website</option>
                    <option value="Both Billing & Website">Both Billing Software & Website (Recommended)</option>
                    <option value="WhatsApp Automation">WhatsApp Automation & Hardware Setup</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', fontWeight: '600', color: '#cbd5e1', display: 'block', marginBottom: '0.25rem' }}>Additional Details (Optional)</label>
                  <textarea 
                    rows="3"
                    placeholder="Tell us any specific features or questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.65rem', borderRadius: '8px', color: '#fff', fontSize: '0.85rem' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}>
                  <Send style={{ width: '16px', height: '16px' }} />
                  <span>Submit Demo Request</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Contact Details Cards & Direct WhatsApp Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Note banner for editable details */}
            <div style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.3)', padding: '0.85rem', borderRadius: '14px', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <Info style={{ width: '18px', height: '18px', color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-cyan)', margin: '0 0 0.15rem 0' }}>
                  Placeholder Contact Info Active
                </h4>
                <p style={{ fontSize: '0.78rem', color: '#cbd5e1', margin: 0, lineHeight: '1.45' }}>
                  We've configured realistic sample contact details below. You can easily give us your real address & phone number anytime!
                </p>
                <button 
                  onClick={onOpenClientModal}
                  style={{ fontSize: '0.72rem', color: 'var(--accent-cyan)', fontWeight: 'bold', textDecoration: 'underline', marginTop: '0.35rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Click here to see what else you can provide →
                </button>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="responsive-form-row">
              
              <div className="glass-card" style={{ padding: '1rem', borderRadius: '14px' }}>
                <div style={{ padding: '0.45rem', borderRadius: '8px', background: 'rgba(16,185,129,0.15)', color: '#34d399', display: 'inline-block', marginBottom: '0.6rem' }}>
                  <PhoneCall style={{ width: '18px', height: '18px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase' }}>Phone / WhatsApp</span>
                <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginTop: '0.15rem' }}>+91 98765 43210</strong>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Mon-Sat (9 AM - 8 PM)</span>
              </div>

              <div className="glass-card" style={{ padding: '1rem', borderRadius: '14px' }}>
                <div style={{ padding: '0.45rem', borderRadius: '8px', background: 'rgba(56,189,248,0.15)', color: 'var(--accent-cyan)', display: 'inline-block', marginBottom: '0.6rem' }}>
                  <Mail style={{ width: '18px', height: '18px' }} />
                </div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase' }}>Email Inquiry</span>
                <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block', marginTop: '0.15rem' }}>contact@tecqhub.com</strong>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Fast 2-hour reply</span>
              </div>

            </div>

            {/* Address Card */}
            <div className="glass-card" style={{ padding: '1rem', borderRadius: '14px', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(139,92,246,0.15)', color: '#a78bfa', flexShrink: 0 }}>
                <MapPin style={{ width: '20px', height: '20px' }} />
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8', display: 'block', textTransform: 'uppercase' }}>Office & Experience Center</span>
                <strong style={{ fontSize: '0.88rem', color: '#fff', display: 'block' }}>Plot 42, Tech Park Avenue, Business District</strong>
                <span style={{ fontSize: '0.72rem', color: '#64748b' }}>City Centre, Pin 400001 (Placeholder Address)</span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Card */}
            <div style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(56,189,248,0.15))', border: '1px solid rgba(16,185,129,0.3)', padding: '1.25rem', borderRadius: '16px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '800', color: '#fff', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                <MessageSquare style={{ width: '18px', height: '18px', color: '#34d399' }} />
                Need Instant Answers?
              </h4>
              <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '0.85rem' }}>
                Chat directly with a TecqHub specialist on WhatsApp right now!
              </p>
              <a 
                href="https://wa.me/919876543210?text=Hi%20TecqHub!%20I%20am%20interested%20in%20a%20billing%20software%20and%20website%20demo%20for%20my%20shop." 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', background: '#10b981', color: '#000', boxShadow: '0 4px 20px rgba(16,185,129,0.4)', padding: '0.7rem' }}
              >
                <MessageSquare style={{ width: '16px', height: '16px' }} />
                <span>Chat on WhatsApp (+91 98765 43210)</span>
              </a>
            </div>

          </div>

        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '850px', margin: '3rem auto 0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <HelpCircle style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />
              Frequently Asked Questions by Store Owners
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="glass-card" 
                style={{ padding: '1rem 1.25rem', borderRadius: '14px', cursor: 'pointer' }}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: '700', color: '#f8fafc', margin: 0 }}>
                    {faq.q}
                  </h4>
                  <ChevronDown style={{ width: '16px', height: '16px', color: 'var(--accent-cyan)', transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }} />
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: '0.65rem', fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.55', paddingTop: '0.65rem', borderTop: '1px solid rgba(255,255,255,0.06)', margin: 0 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
