'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Crosshair, Server, Shield, Zap, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Decorative Top Line (Only visible at top) */}
      <div className={`fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent z-[60] transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}></div>

      {/* Main Navigation Bar */}
      <nav 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b
        ${scrolled 
          ? 'top-0 bg-dark-950/95 backdrop-blur-xl border-white/5 py-2 shadow-2xl' 
          : 'top-6 bg-transparent border-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className={`relative flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-transparent' : 'bg-dark-900/60 backdrop-blur-md border border-white/5 rounded-2xl px-8 py-2'}`}>
            
            {/* Background Texture for Unscrolled State */}
            {!scrolled && (
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 rounded-2xl pointer-events-none"></div>
            )}

            {/* Left Side: Logo Area */}
            <div className="flex items-center gap-4 cursor-pointer group relative z-10" onClick={() => scrollToSection('home')}>
              {/* Logo Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-gold-500/20 rotate-45 rounded-sm transition-transform group-hover:rotate-90 duration-500"></div>
                <div className="absolute inset-0 border border-gold-500 rotate-45 rounded-sm scale-75 group-hover:scale-90 transition-transform duration-500"></div>
                <Crosshair className="w-6 h-6 text-gold-500 relative z-10" />
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="font-display text-2xl font-black tracking-tighter text-white leading-none group-hover:text-gold-500 transition-colors">
                  TESKILAT-I
                </span>
                <div className="flex items-center gap-2">
                  <span className="h-px w-4 bg-gold-500"></span>
                  <span className="font-display text-sm font-bold tracking-[0.3em] text-gray-400 group-hover:text-white transition-colors">
                    ALA
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Desktop Menu (Tactical HUD Style) */}
            <div className="hidden lg:flex items-center gap-1 relative z-10">
              {/* Decorative brackets */}
              <span className="text-white/10 text-3xl font-thin font-display select-none">[</span>
              
              <div className="flex items-center gap-1">
                <NavButton onClick={() => scrollToSection('home')}>ANA SAYFA</NavButton>
                <NavDivider />
                <NavButton onClick={() => scrollToSection('server-info')}>SUNUCU</NavButton>
                <NavDivider />
                <NavButton onClick={() => scrollToSection('partnership')}>MAĞAZA</NavButton>
                <NavDivider />
                <NavButton onClick={() => scrollToSection('staff')}>KADRO</NavButton>
                <NavDivider />
                <NavButton onClick={() => scrollToSection('features')}>ÖZELLİKLER</NavButton>
                <NavDivider />
                <NavButton onClick={() => scrollToSection('rules')}>KURALLAR</NavButton>
              </div>

              <span className="text-white/10 text-3xl font-thin font-display select-none">]</span>
            </div>

            {/* Right Side: Action Button */}
            <div className="hidden md:flex items-center gap-4 relative z-10">
               <button 
                onClick={() => scrollToSection('server-info')}
                className="group relative px-6 py-2 overflow-hidden bg-transparent"
              >
                {/* Button Borders */}
                <div className="absolute inset-0 border border-gold-500/30 skew-x-[-12deg] group-hover:border-gold-500 transition-colors bg-gold-500/5 group-hover:bg-gold-500/10"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-gold-500 skew-x-[-12deg]"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-gold-500 skew-x-[-12deg]"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                  <span className="font-display font-bold text-sm tracking-wider text-gold-500 group-hover:text-white transition-colors">
                    OYUNA KATIL
                  </span>
                  <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden relative z-50 p-2 text-white hover:text-gold-500 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-dark-950/98 backdrop-blur-xl transition-all duration-500 ease-in-out lg:hidden flex flex-col items-center justify-center
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="flex flex-col gap-4 w-full px-8 relative z-10 max-w-sm">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl font-bold text-white mb-2">MENÜ</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <MobileNavButton onClick={() => scrollToSection('home')}>ANA SAYFA</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection('server-info')}>SUNUCU BİLGİLERİ</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection('partnership')}>MAĞAZA & VIP</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection('staff')}>YÖNETİM KADROSU</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection('features')}>ÖZELLİKLER</MobileNavButton>
          <MobileNavButton onClick={() => scrollToSection('rules')}>KURALLAR</MobileNavButton>
          
          <div className="w-full h-px bg-white/10 my-4"></div>
          
          <button 
              onClick={() => scrollToSection('server-info')}
              className="w-full py-4 bg-gold-500 hover:bg-white text-black font-bold clip-button flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold-500/20"
            >
              <Server size={18} />
              BAĞLAN
          </button>
        </div>
      </div>
    </>
  );
};

// Tactical Nav Divider
const NavDivider = () => (
  <div className="w-px h-4 bg-white/10 rotate-12 mx-1"></div>
);

// Desktop Nav Button Component
const NavButton: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="group relative px-4 py-2"
  >
    {/* Text */}
    <span className="relative z-10 text-gray-400 font-bold text-xs tracking-widest font-display transition-colors group-hover:text-white">
      {children}
    </span>
    
    {/* Hover Effects */}
    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center shadow-[0_0_10px_#f59e0b]"></div>
    <div className="absolute inset-0 bg-gold-500/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
    
    {/* Tech Corner Accents */}
    <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
    <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity delay-100"></div>
  </button>
);

// Mobile Nav Button Component
const MobileNavButton: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="group flex items-center justify-between w-full p-4 border border-white/5 bg-white/5 hover:bg-gold-500/10 hover:border-gold-500/50 rounded transition-all duration-300 clip-diagonal"
  >
    <div className="flex items-center gap-3">
      <span className="w-1.5 h-1.5 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span className="font-display font-bold text-lg text-white group-hover:text-gold-500 tracking-wider">
        {children}
      </span>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gold-500 group-hover:translate-x-1 transition-transform" />
  </button>
);
