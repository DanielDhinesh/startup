import React from 'react';
import { PhoneCall, Mail, MessageSquare, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';



export default function ContactSection() {
  return (
    <section id="contact" style={{ paddingTop: '5rem', paddingBottom: '5rem', position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <div className="badge" style={{ marginBottom: '1rem', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', border: '1px solid rgba(56,189,248,0.25)' }}>
            <PhoneCall style={{ width: '14px', height: '14px' }} />
            <span>Fast &amp; Easy Contact</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginBottom: '1rem' }}>
            Let's Talk <span className="gradient-text">Business</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6' }}>
            No long forms to fill. Just drop your number or click to chat. We'll get back to you instantly!
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Direct Contact Call to Action */}
          <div className="glass-card" style={{ padding: '2.5rem 2rem', borderRadius: '24px', textAlign: 'center', background: 'linear-gradient(145deg, rgba(16,185,129,0.05), rgba(16,185,129,0.01))', border: '1px solid rgba(16,185,129,0.2)' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <MessageSquare style={{ width: '30px', height: '30px' }} />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.75rem' }}>Want Instant Answers?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1.05rem', maxWidth: '450px', margin: '0 auto 1.75rem auto', lineHeight: '1.5' }}>
              Skip the forms. Chat with our specialist directly on WhatsApp and get a tailored proposal for your business right now.
            </p>
            <a 
              href="https://wa.me/918825966704?text=Hi%202xtechnologies!%20I%20am%20interested%20in%20your%20services." 
              target="_blank" rel="noreferrer"
              className="btn-primary" 
              style={{ padding: '1rem 2.5rem', borderRadius: '14px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 8px 25px rgba(16,185,129,0.35)' }}
            >
              <MessageSquare style={{ width: '22px', height: '22px' }} />
              <span>Chat on WhatsApp (+91 88259 66704)</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {/* WhatsApp Direct */}
            <a href="https://wa.me/918825966704?text=Hi%202xtechnologies!%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <div className="glass-card contact-hover" style={{ padding: '1.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.05)', height: '100%' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(16,185,129,0.15)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <MessageSquare style={{ width: '24px', height: '24px' }} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Chat on WhatsApp</h4>
                <p style={{ color: '#10b981', fontWeight: '600', fontSize: '0.9rem' }}>+91 88259 66704</p>
                <p style={{ color: '#34d399', fontWeight: '600', fontSize: '0.9rem' }}>+91 63811 81934</p>
              </div>
            </a>

            {/* Email Direct */}
            <a href="mailto:business@2xtechnologies.in" style={{ textDecoration: 'none' }}>
              <div className="glass-card contact-hover" style={{ padding: '1.5rem', borderRadius: '20px', textAlign: 'center', border: '1px solid rgba(56,189,248,0.3)', background: 'rgba(56,189,248,0.05)', height: '100%' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(56,189,248,0.15)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Mail style={{ width: '24px', height: '24px' }} />
                </div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>Send an Email</h4>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: '600', fontSize: '0.9rem' }}>business@2xtechnologies.in</p>
              </div>
            </a>
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .contact-hover {
              transition: all 0.3s ease;
            }
            .contact-hover:hover {
              transform: translateY(-5px);
              box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            }
          `}} />

        </div>
      </div>
    </section>
  );
}
