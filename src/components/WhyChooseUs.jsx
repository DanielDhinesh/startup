import React from 'react';
import { 
  Headphones, 
  DollarSign, 
  Store, 
  Clock,
  Award
} from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Store style={{ width: '22px', height: '22px', color: 'var(--accent-cyan)' }} />,
      title: 'Designed Specially for Small Shops',
      text: 'You do not need to be a tech expert! Our billing software and website dashboards are clean and simple for anyone in your store.'
    },
    {
      icon: <Headphones style={{ width: '22px', height: '22px', color: '#10b981' }} />,
      title: 'Hands-On Setup & Personal Training',
      text: 'We don’t just send a download link. We assist with hardware connections, barcode scanner pairing, printer setup, and staff training.'
    },
    {
      icon: <DollarSign style={{ width: '22px', height: '22px', color: '#f59e0b' }} />,
      title: 'Affordable Pricing & Zero Hidden Fees',
      text: 'No high recurring commissions. 2xtechnologies offers clear, transparent pricing built for small business budgets.'
    },
    {
      icon: <Clock style={{ width: '22px', height: '22px', color: '#8b5cf6' }} />,
      title: 'Fast Turnaround & 24/7 Support',
      text: 'Get your website live in 48 hours and your billing system configured instantly. Continuous priority support whenever needed.'
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 relative bg-[#0f172a]" style={{ paddingTop: '4rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        
        <div className="responsive-2col">
          
          {/* Left Text Column */}
          <div>
            <div className="badge" style={{ marginBottom: '0.85rem', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56,189,248,0.25)' }}>
              <Award style={{ width: '14px', height: '14px' }} />
              <span>Why Shopkeepers Trust 2xtechnologies</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.2' }}>
              Your Local Technology Partner Dedicated to <span className="gradient-text">Your Success</span>
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
              We understand the real challenges local business owners face — busy billing counters, inventory tracking errors, and missing out on local online customers. 2xtechnologies delivers modern technology with personal service.
            </p>

            <div className="responsive-form-row" style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--accent-cyan)', marginBottom: '0.1rem' }}>100%</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Dedicated SMB Focus</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#10b981', marginBottom: '0.1rem' }}>48 Hrs</h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>Fast Website Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {points.map((point, index) => (
              <div 
                key={index} 
                className="glass-card" 
                style={{ padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start', borderRadius: '16px' }}
              >
                <div style={{ padding: '0.5rem', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
                  {point.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: '700', marginBottom: '0.25rem', color: '#f8fafc' }}>
                    {point.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}



