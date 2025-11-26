import React, { useState, useEffect } from 'react';
import { ChevronDown, Crosshair, Users, Zap, Star, Shield, Megaphone } from 'lucide-react';

const BACKGROUND_IMAGES = [
  "https://wallpapers.com/images/hd/counterstrike-3lourqobllt98xdr.jpg", // Tech/Motherboard look
  "https://wallpapers.com/images/hd/720p-counter-strike-global-offensive-background-1280-x-720-ijyroyz95bthyemb.jpg", // Dark Gaming Abstract
  "https://wallpapers.com/images/hd/counter-strike-global-offensive-desktop-izhxqaman6aw7rin.jpg", // Dark geometric
];

const TYPING_TEXTS = [
  "Sıfır Lag Garantisi",
  "7/24 Aktif Yönetim",
  "Profesyonel Ortam",
  "Hile Korumalı",
  "Ödüllü Turnuvalar"
];

export const Hero: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  // Background Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Text Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Marquee content block to be duplicated
  const MarqueeContent = () => (
    <div className="flex items-center shrink-0">
      <div className="flex items-center mx-8 gap-3 opacity-80">
        <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
        <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">IP: 95.173.173.16</span>
      </div>
      <div className="flex items-center mx-8 gap-3 opacity-80">
        <Zap className="w-4 h-4 text-gold-500" />
        <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">TS3: TAPRO</span>
      </div>
      <div className="flex items-center mx-8 gap-3 opacity-100 bg-purple-500/20 px-3 py-1 rounded border border-purple-500/30">
        <Megaphone className="w-4 h-4 text-purple-400" />
        <span className="font-display font-bold text-purple-100 tracking-wider text-sm md:text-base">SPONSOR: KARASU REKLAM AJANSI</span>
      </div>
      <div className="flex items-center mx-8 gap-3 opacity-80">
        <Shield className="w-4 h-4 text-gold-500" />
        <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">SXE KORUMA</span>
      </div>
      <div className="flex items-center mx-8 gap-3 opacity-80">
        <Crosshair className="w-4 h-4 text-gold-500" />
        <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">PRO PUBLIC</span>
      </div>
      <div className="flex items-center mx-8 gap-3 opacity-80">
        <Users className="w-4 h-4 text-gold-500" />
        <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">KLAN ALIMLARI AÇIK</span>
      </div>
    </div>
  );

  return (
    <div id="home" className="relative w-full h-screen flex flex-col justify-center overflow-hidden bg-dark-950">
      
      {/* Dynamic Background Image Slider */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === bgIndex ? 'opacity-30' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-transparent z-10"></div>
          <img 
            src={img} 
            alt={`Background ${index}`} 
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ease-linear ${index === bgIndex ? 'scale-110' : 'scale-100'}`}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-radial-fade z-0"></div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-gold-500/20 rounded-full animate-float blur-sm hidden md:block"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 border border-blue-500/10 rounded-full animate-float blur-md hidden md:block" style={{animationDelay: '1s'}}></div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center mt-[-60px]">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md mb-8 animate-fade-in-down hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 font-mono text-xs tracking-widest uppercase font-bold">CS 1.6 System Online</span>
          <span className="w-px h-3 bg-green-500/30 mx-1"></span>
          <div className="flex items-center gap-1 text-green-300/80 text-xs">
            <Users size={12} />
            <span>32/32</span>
          </div>
        </div>
        
        {/* Main Title - UPDATED FOR MOBILE FIX */}
        <div className="relative mb-6">
           <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none drop-shadow-2xl whitespace-nowrap">
            TESKILAT-I
          </h1>
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-amber-700 tracking-tighter leading-none mt-2 relative inline-block animate-pulse-slow">
            ALA
            <span className="absolute -inset-1 blur-2xl bg-gold-500/20 -z-10"></span>
          </h1>
        </div>
        
        {/* Dynamic Typing Subtitle */}
        <div className="h-8 mb-12 flex justify-center items-center">
          <p key={textIndex} className="text-gold-500 text-xl md:text-2xl font-mono tracking-widest uppercase animate-fade-in">
             {`> ${TYPING_TEXTS[textIndex]}_`}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0">
          <button 
            onClick={() => document.getElementById('server-info')?.scrollIntoView({behavior: 'smooth'})}
            className="group relative px-4 sm:px-8 py-3 sm:py-4 bg-gold-500 text-black font-display font-black text-sm sm:text-lg tracking-wide sm:tracking-widest clip-button transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] w-full sm:w-64 max-w-xs sm:max-w-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
              <Crosshair className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform flex-shrink-0" />
              <span>IP KOPYALA</span>
            </div>
          </button>
          
          <button 
             onClick={() => window.open('ts3server://tapro', '_blank')}
             className="group relative px-4 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm sm:text-lg tracking-wide sm:tracking-widest clip-button transition-all hover:border-gold-500 hover:text-gold-500 w-full sm:w-64 max-w-xs sm:max-w-none backdrop-blur-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>TS3 BAĞLAN</span>
            </span>
          </button>
        </div>
      </div>

      {/* Infinite Seamless Marquee Slider */}
      <div className="absolute bottom-0 w-full bg-gold-500/10 border-t border-b border-gold-500/20 backdrop-blur-sm h-14 flex items-center overflow-hidden z-30">
        {/* Container moves from 0 to -50% */}
        <div className="flex whitespace-nowrap animate-marquee w-max">
           {/* First Set */}
           <MarqueeContent />
           <MarqueeContent />
           <MarqueeContent />
           <MarqueeContent />
           {/* Duplicate Set for seamless loop */}
           <MarqueeContent />
           <MarqueeContent />
           <MarqueeContent />
           <MarqueeContent />
        </div>
      </div>
    </div>
  );
};

