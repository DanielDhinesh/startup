import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveSoftwareDemo from './components/InteractiveSoftwareDemo';
import ROICalculator from './components/ROICalculator';
import ServicesGrid from './components/ServicesGrid';
import WhyChooseUs from './components/WhyChooseUs';
import PricingEstimator from './components/PricingEstimator';
import ContactSection from './components/ContactSection';
import ClientInfoNoticeModal from './components/ClientInfoNoticeModal';
import ColorPalettePickerModal from './components/ColorPalettePickerModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [colorPalette, setColorPalette] = useState('default'); // 'default' | 'emerald' | 'violet' | 'amber'
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handlePaletteChange = (newPalette) => {
    setColorPalette(newPalette);
    if (newPalette === 'default') {
      document.documentElement.removeAttribute('data-color-palette');
    } else {
      document.documentElement.setAttribute('data-color-palette', newPalette);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500 selection:text-white" style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      
      {/* Navbar */}
      <Navbar 
        onOpenClientModal={() => setIsClientModalOpen(true)}
        onOpenPaletteModal={() => setIsPaletteModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenDemo={() => {
          const el = document.getElementById('live-demo');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        <InteractiveSoftwareDemo />

        <ROICalculator />

        <ServicesGrid />

        <WhyChooseUs />

        <PricingEstimator />

        <ContactSection onOpenClientModal={() => setIsClientModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenClientModal={() => setIsClientModalOpen(true)} />

      {/* Checklist / Requirements Modal */}
      <ClientInfoNoticeModal 
        isOpen={isClientModalOpen}
        onClose={() => setIsClientModalOpen(false)}
      />

      {/* Live Color Theme Customizer Modal */}
      <ColorPalettePickerModal 
        isOpen={isPaletteModalOpen}
        onClose={() => setIsPaletteModalOpen(false)}
        currentPalette={colorPalette}
        onChangePalette={handlePaletteChange}
      />

    </div>
  );
}
