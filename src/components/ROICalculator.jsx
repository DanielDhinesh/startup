import React, { useState } from 'react';
import { 
  Calculator, 
  ArrowRight
} from 'lucide-react';

export default function ROICalculator() {
  const [dailyBills, setDailyBills] = useState(60);
  const [manualMinutesPerBill, setManualMinutesPerBill] = useState(3);
  const [avgBillValue, setAvgBillValue] = useState(450);

  // Calculations
  const manualTimePerDayMin = dailyBills * manualMinutesPerBill;
  const automatedTimePerDayMin = dailyBills * 0.5; // TecqPOS takes ~30s per bill
  
  const minutesSavedPerDay = manualTimePerDayMin - automatedTimePerDayMin;
  const hoursSavedPerMonth = Math.round((minutesSavedPerDay * 30) / 60);

  // Estimate revenue leakage prevented (approx 1.5% from manual math errors, forgotten stock items, paper waste)
  const monthlyRevenue = dailyBills * avgBillValue * 30;
  const estimatedLeakagePrevented = Math.round(monthlyRevenue * 0.015);

  return (
    <section id="calculator" className="py-16 md:py-24 relative bg-[#0f172a]" style={{ paddingTop: '4rem', paddingBottom: '4rem', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge" style={{ marginBottom: '0.85rem', background: 'rgba(16,185,129,0.1)', color: '#34d399', border: '1px solid rgba(16,185,129,0.3)' }}>
            <Calculator style={{ width: '14px', height: '14px' }} />
            <span>Interactive ROI & Time Savings Estimator</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)', fontWeight: '800', marginBottom: '0.85rem' }}>
            Calculate How Much <span className="gradient-text">Time & Money</span> You Will Save
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.6' }}>
            Slide the controls below based on your store's daily activity to see your immediate monthly efficiency gains.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.12)', maxWidth: '1000px', margin: '0 auto' }}>
          <div className="responsive-2col">
            
            {/* Sliders Input Column */}
            <div>
              
              {/* Slider 1: Daily Bills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#f1f5f9' }}>
                    Daily Customers / Bills Generated:
                  </label>
                  <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--accent-cyan)', background: 'rgba(56,189,248,0.15)', padding: '0.15rem 0.6rem', borderRadius: '6px' }}>
                    {dailyBills} bills / day
                  </span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="300" 
                  step="5"
                  value={dailyBills} 
                  onChange={(e) => setDailyBills(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer', height: '6px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                  <span>10 bills</span>
                  <span>150 bills</span>
                  <span>300+ bills</span>
                </div>
              </div>

              {/* Slider 2: Manual Time per bill */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#f1f5f9' }}>
                    Manual Billing Time Per Customer:
                  </label>
                  <span style={{ fontSize: '1rem', fontWeight: '800', color: '#34d399', background: 'rgba(16,185,129,0.15)', padding: '0.15rem 0.6rem', borderRadius: '6px' }}>
                    {manualMinutesPerBill} Mins
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="5" 
                  step="0.5"
                  value={manualMinutesPerBill} 
                  onChange={(e) => setManualMinutesPerBill(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#34d399', cursor: 'pointer', height: '6px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                  <span>1 Min</span>
                  <span>3 Mins</span>
                  <span>5 Mins</span>
                </div>
              </div>

              {/* Slider 3: Average Bill Value */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.3rem' }}>
                  <label style={{ fontWeight: '700', fontSize: '0.88rem', color: '#f1f5f9' }}>
                    Average Customer Bill Amount:
                  </label>
                  <span style={{ fontSize: '1rem', fontWeight: '800', color: '#a78bfa', background: 'rgba(139,92,246,0.15)', padding: '0.15rem 0.6rem', borderRadius: '6px' }}>
                    ₹{avgBillValue}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="3000" 
                  step="50"
                  value={avgBillValue} 
                  onChange={(e) => setAvgBillValue(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#a78bfa', cursor: 'pointer', height: '6px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#64748b', marginTop: '0.25rem' }}>
                  <span>₹100</span>
                  <span>₹1,500</span>
                  <span>₹3,000+</span>
                </div>
              </div>

            </div>

            {/* Live Result Summary Card */}
            <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.9))', padding: '1.5rem', borderRadius: '18px', border: '1px solid rgba(56,189,248,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)', textAlign: 'center' }}>
              
              <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                  Monthly Time Saved
                </span>
                <div style={{ fontSize: '2.8rem', fontWeight: '900', marginTop: '0.2rem', color: 'var(--accent-cyan)', lineHeight: 1 }}>
                  {hoursSavedPerMonth} <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>Hrs/Mo</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#34d399', marginTop: '0.35rem', fontWeight: '600' }}>
                  ⚡ Equal to {Math.round(hoursSavedPerMonth / 8)} Full Workdays Saved Every Month!
                </p>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                  Math Errors & Waste Saved
                </span>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#10b981', marginTop: '0.2rem' }}>
                  +₹{estimatedLeakagePrevented.toLocaleString()} / Mo
                </div>
              </div>

              <a href="#contact" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
                <span>Claim Your Store Setup</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
