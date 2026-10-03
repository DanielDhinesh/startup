import React from 'react';
import { 
  X, 
  Palette, 
  RotateCcw, 
  Check, 
  Sparkles
} from 'lucide-react';

export default function ColorPalettePickerModal({ isOpen, onClose, currentPalette, onChangePalette }) {
  if (!isOpen) return null;

  const palettes = [
    {
      id: 'default',
      name: 'Cyber Cyan & Teal (Default / Original)',
      desc: 'Sleek electric sky blue & emerald green gradient.',
      colorPills: ['#38bdf8', '#10b981', '#8b5cf6']
    },
    {
      id: 'emerald',
      name: 'Emerald Mint (Fresh Business)',
      desc: 'Vibrant mint green & deep emerald gradient.',
      colorPills: ['#34d399', '#059669', '#06b6d4']
    },
    {
      id: 'violet',
      name: 'Electric Violet & Magenta (SaaS Premium)',
      desc: 'Futuristic purple & neon pink gradient.',
      colorPills: ['#a855f7', '#ec4899', '#6366f1']
    },
    {
      id: 'amber',
      name: 'Royal Amber Gold (Luxury Enterprise)',
      desc: 'Warm sunset gold & deep orange gradient.',
      colorPills: ['#f59e0b', '#f97316', '#10b981']
    }
  ];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(9, 13, 22, 0.85)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      
      <div className="glass-card" style={{ maxWidth: '520px', width: '100%', padding: '1.8rem', borderRadius: '24px', border: '1px solid rgba(56,189,248,0.3)', background: '#090d16', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.8)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div className="badge" style={{ marginBottom: '0.4rem' }}>
              <Palette style={{ width: '14px', height: '14px' }} />
              <span>Theme Customizer</span>
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#fff', margin: 0 }}>
              Choose Website Color Theme
            </h3>
          </div>

          <button 
            onClick={onClose}
            style={{ padding: '0.45rem', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <X style={{ width: '18px', height: '18px' }} />
          </button>
        </div>

        <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '1.25rem' }}>
          Test different color aesthetics live on <strong>2xtechnologies</strong>. If you ever want to switch back, click <strong>"Revert to Original"</strong> anytime!
        </p>

        {/* Palettes Selection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {palettes.map((p) => {
            const isSelected = currentPalette === p.id;
            return (
              <div 
                key={p.id}
                onClick={() => onChangePalette(p.id)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justify: 'space-between', 
                  padding: '0.85rem 1rem', 
                  borderRadius: '14px', 
                  background: isSelected ? 'rgba(56,189,248,0.12)' : 'rgba(255,255,255,0.03)', 
                  border: isSelected ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <div style={{ display: 'flex', gap: '0.2rem' }}>
                      {p.colorPills.map((c, idx) => (
                        <div key={idx} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }}></div>
                      ))}
                    </div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '700', color: isSelected ? '#38bdf8' : '#fff', margin: 0 }}>
                      {p.name}
                    </h4>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0 }}>
                    {p.desc}
                  </p>
                </div>

                {isSelected && (
                  <Check style={{ width: '18px', height: '18px', color: '#38bdf8' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            onClick={() => onChangePalette('default')}
            className="btn-secondary"
            style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', gap: '0.4rem' }}
          >
            <RotateCcw style={{ width: '14px', height: '14px' }} />
            <span>Revert to Original</span>
          </button>

          <button 
            onClick={onClose}
            className="btn-primary"
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.8rem' }}
          >
            <span>Save & Close</span>
          </button>
        </div>

      </div>
    </div>
  );
}



