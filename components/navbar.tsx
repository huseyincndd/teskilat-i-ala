import React, { useState, useEffect } from 'react';
import { Menu, X, Crosshair } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-dark-950/80 backdrop-blur-md border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Crosshair className="w-8 h-8 text-gold-500 group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gold-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl leading-none font-bold tracking-widest text-white">
                TESKILAT-I
              </span>
              <span className="font-display text-lg leading-none font-bold tracking-[0.3em] text-gold-500">
                ALA
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            <NavButton onClick={() => scrollToSection('home')}>ANA SAYFA</NavButton>
            <NavButton onClick={() => scrollToSection('server-info')}>SUNUCU</NavButton>
            <NavButton onClick={() => scrollToSection('features')}>ÖZELLİKLER</NavButton>
            <NavButton onClick={() => scrollToSection('rules')}>KURALLAR</NavButton>
            
            <div className="ml-6 w-px h-8 bg-white/10"></div>
            
            <button 
              onClick={() => scrollToSection('server-info')}
              className="ml-6 px-8 py-2 bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black font-display font-bold text-sm tracking-wider clip-button transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              OYUNA KATIL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8 text-gold-500" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark-950/95 backdrop-blur-xl z-40 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white p-2 hover:text-gold-500 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          
          <NavButton onClick={() => scrollToSection('home')}>ANA SAYFA</NavButton>
          <NavButton onClick={() => scrollToSection('server-info')}>SUNUCU</NavButton>
          <NavButton onClick={() => scrollToSection('features')}>ÖZELLİKLER</NavButton>
          <NavButton onClick={() => scrollToSection('rules')}>KURALLAR</NavButton>
          <button 
              onClick={() => scrollToSection('server-info')}
              className="px-10 py-3 bg-gold-500 text-black font-bold clip-button"
            >
              OYUNA KATIL
          </button>
      </div>
    </nav>
  );
};

const NavButton: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="relative px-5 py-2 text-gray-400 hover:text-white font-medium tracking-wider transition-colors text-sm font-display group overflow-hidden"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
  </button>
);

