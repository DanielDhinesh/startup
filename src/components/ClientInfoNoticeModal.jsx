import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  Sparkles, 
  Phone, 
  MapPin, 
  FileText, 
  Image, 
  CreditCard, 
  Globe
} from 'lucide-react';

export default function ClientInfoNoticeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const requirements = [
    {
      id: 'contact_details',
      icon: <Phone style={{ width: '20px', height: '20px', color: 'var(--accent-cyan)' }} />,
      title: '1. Official Contact Details',
      desc: 'Your actual Phone / WhatsApp number, Business Email address, and working hours for the contact section.'
    },
    {
      id: 'address',
      icon: <MapPin style={{ width: '20px', height: '20px', color: '#10b981' }} />,
      title: '2. Shop / Office Physical Address',
      desc: 'Your exact shop address, city, state, and pincode (plus Google Maps location link).'
    },
    {
      id: 'branding',
      icon: <Image style={{ width: '20px', height: '20px', color: '#8b5cf6' }} />,
      title: '3. Brand Assets & Logo',
      desc: 'Your high-resolution logo PNG/SVG file, brand color preferences (if any), and company slogan.'
    },
    {
      id: 'catalog',
      icon: <FileText style={{ width: '20px', height: '20px', color: '#f59e0b' }} />,
      title: '4. Store Catalog & Pricing List',
      desc: 'Sample list of 10-20 top products or services with prices to pre-load into your POS billing system.'
    },
    {
      id: 'gst_legal',
      icon: <CreditCard style={{ width: '20px', height: '20px', color: '#ec4899' }} />,
      title: '5. GSTIN & Tax Details (If applicable)',
      desc: 'Your GST number and registered legal company name to display on thermal customer receipts.'
    },
    {
      id: 'social',
      icon: <Globe style={{ width: '20px', height: '20px', color: '#06b6d4' }} />,
      title: '6. Social & Google Business Links',
      desc: 'Links to your Instagram page, Facebook, or Google Business review page.'
    }
  ];

  const totalCount = requirements.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(9, 13, 22, 0.85)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      
      <div className="glass-card" style={{ maxWidth: '680px', width: '100%', maxHeight: '90vh', overflowY: 'auto', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(56,189,248,0.3)', background: '#090d16', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div className="badge" style={{ marginBottom: '0.5rem', background: 'rgba(16,185,129,0.15)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}>
              <Sparkles style={{ width: '14px', height: '14px' }} />
              <span>What We Need From You</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', margin: 0 }}>
              Founder Setup Checklist for TecqHub
            </h3>
          </div>

          <button 
            onClick={onClose}
            style={{ padding: '0.5rem', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* Introduction */}
        <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Here is a quick checklist of details you can share with TecqHub whenever you're ready. Don't worry if you don't have everything right now — we have already put placeholder data so your website looks 100% complete!
        </p>

        {/* Progress Bar */}
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '14px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem', color: '#f8fafc' }}>
            <span>Checklist Readiness Progress:</span>
            <span style={{ color: 'var(--accent-cyan)' }}>{completedCount} / {totalCount} Completed ({progressPercent}%)</span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--gradient-brand)', transition: 'width 0.3s ease' }}></div>
          </div>
        </div>

        {/* Requirements List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.8rem' }}>
          {requirements.map((req) => {
            const isDone = checkedItems[req.id];
            return (
              <div 
                key={req.id} 
                onClick={() => toggleCheck(req.id)}
                style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  alignItems: 'flex-start', 
                  padding: '1rem', 
                  borderRadius: '14px', 
                  background: isDone ? 'rgba(16,185,129,0.08)' : 'rgba(255,255,255,0.03)', 
                  border: isDone ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ marginTop: '2px' }}>
                  {isDone ? (
                    <CheckSquare style={{ width: '22px', height: '22px', color: '#10b981' }} />
                  ) : (
                    <Square style={{ width: '22px', height: '22px', color: '#64748b' }} />
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    {req.icon}
                    <h4 style={{ fontSize: '0.98rem', fontWeight: '700', color: isDone ? '#34d399' : '#f8fafc', margin: 0 }}>
                      {req.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.83rem', color: '#94a3b8', margin: 0, lineHeight: '1.5' }}>
                    {req.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Got your info? Send it to us via chat!
          </span>
          <button 
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
          >
            <span>Got It, Thanks!</span>
          </button>
        </div>

      </div>
    </div>
  );
}
